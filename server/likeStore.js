import crypto from "crypto";
import { ensureLikeTables, getDb } from "./mysql.js";

function getClientId(req) {
  const headerId = req.headers?.["x-client-id"];
  if (typeof headerId === "string" && headerId.trim()) return headerId.trim();

  const xff = req.headers?.["x-forwarded-for"];
  if (typeof xff === "string" && xff.trim()) return xff.split(",")[0].trim();

  const remoteAddress = req.socket?.remoteAddress;
  if (typeof remoteAddress === "string" && remoteAddress.trim()) return remoteAddress.trim();

  return crypto.randomBytes(16).toString("hex");
}

export async function getLikeCount() {
  await ensureLikeTables();
  const db = await getDb();
  const [rows] = await db.query("SELECT like_count FROM likes WHERE id = 1 LIMIT 1");
  const likeCount = rows?.[0]?.like_count;
  return Number(likeCount ?? 0);
}

export async function likeOnce(req) {
  await ensureLikeTables();
  const db = await getDb();
  const clientId = getClientId(req);

  const conn = await db.getConnection();
  try {
    await conn.beginTransaction();

    // If client_id already exists, don't increment.
    const [ins] = await conn.query(
      "INSERT INTO like_events (client_id) VALUES (?) ON DUPLICATE KEY UPDATE client_id = client_id",
      [clientId]
    );

    // MySQL for ON DUPLICATE KEY UPDATE: affectedRows = 1 if inserted, 2 if updated.
    const affected = ins?.affectedRows ?? 0;

    if (affected === 1) {
      await conn.query(
        "UPDATE likes SET like_count = like_count + 1 WHERE id = 1"
      );
    }

    const [rows] = await conn.query(
      "SELECT like_count FROM likes WHERE id = 1 LIMIT 1"
    );

    await conn.commit();

    const likeCount = rows?.[0]?.like_count;
    return Number(likeCount ?? 0);
  } catch (e) {
    await conn.rollback();
    throw e;
  } finally {
    conn.release();
  }
}


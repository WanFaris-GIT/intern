import { getDb } from "./db";
import crypto from "crypto";

function getClientId(req) {
  const headerId = req.headers?.["x-client-id"];
  if (typeof headerId === "string" && headerId.trim()) return headerId.trim();

  const ip = req.headers?.["x-forwarded-for"];
  if (typeof ip === "string" && ip.trim()) return ip.trim().split(",")[0].trim();

  // remoteAddress may be undefined depending on runtime
  const remoteAddress = req.socket?.remoteAddress;
  if (typeof remoteAddress === "string" && remoteAddress.trim()) return remoteAddress.trim();

  // fallback random id (won't dedupe across requests)
  return crypto.randomBytes(16).toString("hex");
}

export async function getLikeCount() {
  const db = getDb();
  const row = db
    .prepare("SELECT like_count FROM likes WHERE id = 1")
    .get();
  return Number(row?.like_count ?? 0);
}

export async function likeOnce(req) {
  const db = getDb();
  const clientId = getClientId(req);

  // Insert event; if client_id already exists, do nothing (dedupe)
  const insert = db
    .prepare("INSERT OR IGNORE INTO like_events (client_id) VALUES (@client_id)");

  const info = insert.run({ client_id: clientId });

  if (info && info.changes > 0) {
    db.prepare("UPDATE likes SET like_count = like_count + 1, updated_at = datetime('now') WHERE id = 1").run();
  }

  const newCount = db
    .prepare("SELECT like_count FROM likes WHERE id = 1")
    .get();

  return Number(newCount?.like_count ?? 0);
}


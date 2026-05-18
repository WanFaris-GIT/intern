import { getLikeCount, likeOnce } from "../server/likeStore.js";

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const likeCount = await getLikeCount();
      res.status(200).json({ ok: true, likeCount });
      return;
    }

    if (req.method === "POST") {
      const likeCount = await likeOnce(req);
      res.status(200).json({ ok: true, likeCount });
      return;
    }

    res.status(405).json({ ok: false, error: "Method not allowed" });
  } catch (e) {
    res.status(500).json({ ok: false, error: String(e?.message || e) });
  }
}


// Like API (global, stored in-memory for dev).
// In production, replace with DB.

let likeCount = 0;
const likedClients = new Set();

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      res.status(200).json({ ok: true, likeCount });
      return;
    }

    if (req.method === "POST") {
      // Basic per-client protection (best-effort)
      // Use a header if provided; else fallback to remote address.
      const clientId =
        req.headers["x-client-id"] ||
        req.headers["x-forwarded-for"] ||
        req.socket?.remoteAddress ||
        "anonymous";

      if (!likedClients.has(clientId)) {
        likedClients.add(clientId);
        likeCount += 1;
      }

      res.status(200).json({ ok: true, likeCount });
      return;
    }

    res.status(405).json({ ok: false, error: "Method not allowed" });
  } catch (e) {
    res.status(500).json({ ok: false, error: String(e?.message || e) });
  }
}


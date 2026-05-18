// Feedback API removed.
// Kept file to avoid runtime resolution errors; no-op.

export default async function handler(req, res) {
  res.status(410).json({ ok: false, error: "Feedback endpoint removed" });
}


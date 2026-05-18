# TODO - Feedback to email (standard webpage via Vercel)

## Status
✅ Client submit POST siap
✅ Vercel endpoint /api/feedback siap (SendGrid via nodemailer)

## Anda perlu buat di Vercel
1) Dalam Vercel Project Settings > Environment Variables, tambah:
   - `SENDGRID_API_KEY` (API key)
   - `SENDGRID_SENDER` = `wanfaris3235@gmail.com`
   - (optional) `SENDGRID_TO` = (kalau nak hantar ke email lain)

2) Deploy semula.

## Testing
- Buka `/feedback`, isi name/message/rating, tekan Submit.
- Jika berjaya, status pada page akan tunjuk “Terima kasih! Feedback anda telah dihantar.” dan email masuk inbox.


# TODO (Love count - MySQL migration)

- [x] Cari code yang berkaitan dengan love count & animation
- [x] Kenal pasti endpoint yang UI gunakan (GET/POST /api/like-sqlite)
- [x] Tukar backend love count daripada SQLite/in-memory kepada MySQL
- [x] Buat connection pool MySQL (`server/mysql.js`)
- [x] Buat logic Like store MySQL (`server/likeStore.js`)
- [x] Tukar endpoint `api/like-sqlite.js` supaya gunakan MySQL (supaya UI kekal boleh jalan)
- [x] Buang code sqlite lama (`server/db.js` jadi placeholder)
- [x] Buang dependency sqlite (`npm uninstall better-sqlite3`)
- [x] Buang API in-memory tidak digunakan (`api/like.js`, `api/like-global.js`)
- [ ] Konfigurasi env MySQL (DB_HOST/DB_USER/DB_PASS/DB_NAME/DB_PORT)
- [ ] Jalankan app & test: count bertambah selepas click (dedupe ikut client_id)



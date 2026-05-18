// SQLite helper for global like counter.
// This uses a local file `like.sqlite3` created on first run.
// Note: For Vercel/Serverless, you must use a managed SQLite or a different DB.

import fs from "fs";
import path from "path";
import Database from "better-sqlite3";

const dbFile = path.join(process.cwd(), "like.sqlite3");

// Ensure directory exists (process.cwd() is project root)
try {
  const dir = path.dirname(dbFile);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
} catch {
  // ignore
}

export function getDb() {
  const db = new Database(dbFile);

  db.exec(`
    PRAGMA journal_mode = WAL;

    CREATE TABLE IF NOT EXISTS likes (
      id INTEGER PRIMARY KEY CHECK (id = 1),
      like_count INTEGER NOT NULL DEFAULT 0,
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    );

    -- single row initializer
    INSERT OR IGNORE INTO likes (id, like_count) VALUES (1, 0);

    CREATE TABLE IF NOT EXISTS like_events (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      client_id TEXT NOT NULL UNIQUE,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
  `);

  return db;
}


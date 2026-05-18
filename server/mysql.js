import mysql from "mysql2/promise";

const {
  DB_HOST = "",
  DB_PORT = "3306",
  DB_USER = "",
  DB_PASS = "",
  DB_NAME = "",
  DB_CONNECTION_LIMIT = "10",
} = (globalThis.process?.env ?? {});

function requireEnv(name, value) {
  if (!value) {
    throw new Error(
      `[MySQL] Missing env ${name}. Set DB_HOST/DB_USER/DB_PASS/DB_NAME in deployment environment.`
    );
  }
}

requireEnv("DB_HOST", DB_HOST);
requireEnv("DB_USER", DB_USER);
requireEnv("DB_NAME", DB_NAME);



const pool = mysql.createPool({
  host: DB_HOST,
  port: Number(DB_PORT),
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  waitForConnections: true,
  connectionLimit: Number(DB_CONNECTION_LIMIT),
  queueLimit: 0,
});

export async function getDb() {
  return pool;
}

export async function ensureLikeTables() {
  const db = await getDb();
  await db.query(`
    CREATE TABLE IF NOT EXISTS likes (
      id INT PRIMARY KEY,
      like_count BIGINT NOT NULL DEFAULT 0,
      updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );
  `);

  await db.query(`
    INSERT INTO likes (id, like_count)
    VALUES (1, 0)
    ON DUPLICATE KEY UPDATE id = id;
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS like_events (
      id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
      client_id VARCHAR(255) NOT NULL UNIQUE,
      created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (id)
    );
  `);
}


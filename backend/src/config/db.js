import pkg from "pg";
import { env } from "./env.js";

const { Pool } = pkg;

const pool = new Pool({
  connectionString: env.db,
});

export async function testDbConnection() {
  const result = await pool.query("SELECT NOW()");
  console.log("DB OK:", result.rows[0]);
}

export default pool;

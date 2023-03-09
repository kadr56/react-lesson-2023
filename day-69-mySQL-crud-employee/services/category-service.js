import { pool } from "../config/mysql-config.js";

export async function getPopularCategory() {
  const [rows] = await pool.query(`select * from popular_category`);
  console.log(rows);
  return rows;
}

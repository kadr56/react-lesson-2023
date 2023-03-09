import { pool } from "../config/mysql-config.js";

export async function getPopularCategories() {
  const [rows] = await pool.query(`select * from popular_category limit 10`);
  // console.log(rows);
  return rows;
}

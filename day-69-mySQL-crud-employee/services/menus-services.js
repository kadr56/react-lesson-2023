import { pool } from "../config/mysql-config.js";

export async function getParentMenus() {
  const [rows] = await pool.query(
    `select * from menus where parent_id is null`
  );
  console.log(rows);
  return rows;
}

export async function getChildrenMenus(parentId) {
  const [rows] = await pool.query(`select * from menus where parent_id = ?`, [
    parentId,
  ]);
  console.log(rows);
  return rows;
}

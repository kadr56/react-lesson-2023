import { pool } from "../config/mysql-config.js";

export async function getUserRole() {
  const [rows] = await pool.query(
    `SELECT user_role_id AS id, user_role_name FROM user_role`
  );
  console.log(rows);
  return rows;
}

export async function addUserRole(roleName) {
  const query = `INSERT INTO user_role (user_role_name) VALUES( ?)`;
  const [rows] = await pool.query(query, [roleName]);
  console.log(rows);

  // const [select_rows] = await pool.query(
  //   `SELECT user_role_id AS id, user_role_name FROM user_role`
  // );

  return rows;

}

export async function updateUserRole(id, roleName) {
  const query = `UPDATE user_role SET user_role_name = '${roleName}' where user_role_id = ${id}`;
  const [rows] = await pool.query(query);

  // const [select_rows] = await pool.query(
  //   `SELECT user_role_id AS id, user_role_name FROM user_role`
  // );

  return rows;
}

export async function deleteUserRole(id) {
  const query = `DELETE FROM user_role where user_role_id = ${id}`;
  const [rows] = await pool.query(query);

  return rows;
}

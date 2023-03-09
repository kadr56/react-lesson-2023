import mysql from "mysql2/promise";

export const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  //   port: '3306',
  port: "3306",
  database: "myEcommerce",
});

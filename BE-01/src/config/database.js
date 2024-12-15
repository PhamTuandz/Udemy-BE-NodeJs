require("dotenv").config();
const mysql = require("mysql2/promise");

// Tạo mới kết nối đến database => Gây tình trạng chết server nếu như nhiều truy cập cùng lúc

// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     port: process.env.DB_PORT,
//     database: process.env.DB_NAME
//   })

// Tạo pool connection: tái sử dụng connection => Giải quyết tình trạng chết server

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = connection;

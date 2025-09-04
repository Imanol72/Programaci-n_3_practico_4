const mysql = require("mysql2/promise");
require("dotenv").config();

const crearBaseDeDatos = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
    });

    await connection.query(
      `CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\`;`
    );

    console.log("✅ Base de datos creada exitosamente");
    await connection.end();
  } catch (error) {
    console.error("❌ Error creando la base de datos:", error.message);
  }
};

crearBaseDeDatos();

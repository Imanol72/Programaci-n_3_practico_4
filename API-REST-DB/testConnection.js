const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Conexión establecida correctamente con la base de datos.");
  } catch (error) {
    console.error("❌ Error al conectar con la base de datos:", error.message);
  } finally {
    await sequelize.close();
  }
};

testConnection();
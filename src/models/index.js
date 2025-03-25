const sequelize = require("../config/database");
const Product = require("./product");

const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: false }); // `force: false` evita recriar tabelas
    console.log("Banco de dados sincronizado!");
  } catch (error) {
    console.error("Erro ao sincronizar banco:", error);
  }
};

module.exports = { syncDatabase, Product };

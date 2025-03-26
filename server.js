require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { syncDatabase } = require("./src/models");
const productRoutes = require("./src/routes/productRoutes");
const usersRoutes = require("./src/routes/usersRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rotas
app.use("/products", productRoutes);
app.use("/users", usersRoutes);

// Sincronizar banco e iniciar servidor
syncDatabase().then(() => {
  app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
});
    
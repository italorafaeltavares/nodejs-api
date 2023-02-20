const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

// Configurar body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Conectar ao banco de dados MongoDB
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/api-crud", {
  useNewUrlParser: true,
});

// Configurar as rotas
app.use("/users", require("./routes/user"));

// Iniciar o servidor
app.listen(3000, () => console.log("Servidor iniciado na porta 3000"));

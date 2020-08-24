const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// Iniciando o App
const app = express();

// Iniciando o DB.
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

requireDir("./src/models");

const Product = mongoose.model("Product");

app.get("/", (req, res) => {
  Product.create({
    title: "React native",
    description: "Teste de cadastro",
    url: "https://github.com",
  });
  res.send("Hello World. :)");
});

app.listen(3000);

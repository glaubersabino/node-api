const express = require("express");
const routes = express.Router();

const ProductController = require("./controllers/ProductController");

routes.get("/products", ProductController.index);
routes.post("/products", ProductController.store);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.destroy);
routes.get("/products/:id", ProductController.show);

module.exports = routes;

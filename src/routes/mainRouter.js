// Acá nos falta express y el router
const express = require("express");
const router = express.Router();

// Aća nos falta traer el controller
const mainController = require ("../controllers/mainController");
const productController = require ("../controllers/productController");

// Acá definimos las rutas
router.get("/", mainController.index);
router.get("/detalleMenu/:id", productController.index);

// Acá exportamos el resultado
module.exports = router
// Módulos
const express = require('express');
const app = express();
// Acá falta uno... 😇
const path = require ("path");

app.set("port", process.env.PORT || 3000); 
app.listen(app.get("port"), () => console.log("Server Start http://localhost:"+app.get("port")));

// Configuración
const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));

// Acá falta el template engine
app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "./views"))

// Rutas
const index = require("./routes/mainRouter");
app.use(index);
/* const product = require("./routes/productRouter");
app.use("/product", product); */




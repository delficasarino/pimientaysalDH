const product = require ("../models/product")

module.exports = {
    index: (req, res)=>res.render("index", {products: product.allWithExtra()}), 
    }


const product = require ("../models/product");

module.exports = {
    index: (req, res)=>res.render("detalleMenu", {product: product.oneWithExtra(req.params.id)})

}
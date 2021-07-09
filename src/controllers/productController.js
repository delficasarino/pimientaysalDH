const product = require ("../models/product");

module.exports = {
    index: (req, res)=>res.render("detalleMenu", {product: product.oneWithExtra(req.params.id)})
    /* index: (req, res)=>res.send({product: product.oneWithExtra(req.params.id)}) */

}
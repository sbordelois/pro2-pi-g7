const data = require('../data/data')
const controller = {
    index: function(req, res){
        res.render("products", {
            productos : data.productos,
            usuarioLogueado: true //true o false
        })
    },
    detail: function(req, res){
        res.render("detail-products" )
    }

}

module.exports = controller
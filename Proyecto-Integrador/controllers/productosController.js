const data = require('../data/data')
const controller = {
    index: function(req, res){
        res.render("products", {
            productos : data.productos,
            usuarioLogueado: true //true o false
        })
    },
    subirproductos: function(req, res){
        res.render("products")
    }
}

module.exports = controller
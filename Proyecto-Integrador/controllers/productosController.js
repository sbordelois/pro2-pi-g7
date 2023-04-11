const data = require('../data/data')
const controller = {
    add: function(req, res){
        res.render("addproducts", {
            productos : data.productos,
            usuarioLogueado: true, //true o false
            usuarios : data.usuarios,
        })
    },
    detail: function(req, res){
        res.render("detail-products" ,{
        productos : data.productos,
        usuarioLogueado: true, //true o false
        usuarios : data.usuarios,
        }
        )
    }

}

module.exports = controller
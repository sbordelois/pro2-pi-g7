const data = require('../data/data')
const db = require ("../database/models/index")
let op = db.Sequelize.Op
const controller = {
    add: function(req, res){
        res.render("addproducts", {
            usuarioLogueado: true, 
            usuarios: data.usuarios
        })
    },
    detail: function(req, res){
        res.render("detail-products" ,{
        productos : data.productos,
        usuarioLogueado: false, 
        usuarios : data.usuarios,
        comments: data.comments
        }
        )
    }

}

module.exports = controller
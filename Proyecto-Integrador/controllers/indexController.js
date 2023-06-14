const data = require('../data/data')
const db = require ("../database/models/index")
let op = db.Sequelize.Op
const controller = {
/*     index: function (req, res) {
        res.render("index", {
            productos : data.productos,
            usuarioLogueado: false, 
            usuarios : data.usuarios,
            comments: data.comments,
            p: data.productos.slice(-4) ,

        })
    } */
    index: function(req, res){
        db.Productos.findAll({
            order: 
            [ 'id', 'DESC'],
            raw: true,
            nest:true,
            include:[
                {association: 'productos_usuarios'}, /* ver bien la association */
            ]
        })
        .then(function(data){
            console.log(data)
            res.render('index', {
                productos: data,
                usuarioLogueado: false
            })
            
        })
        .catch(function(err){
             console.log(err)})

}}

module.exports = controller

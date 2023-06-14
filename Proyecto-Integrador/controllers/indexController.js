const data = require('../data/data')
const db = require ("../database/models/index")
let op = db.Sequelize.Op
const controller = {
    index: function (req, res) {
        //db.productos.findAll({    ------no se si va
        //raw: true //array con los obejtos que nos trae de nuestra base de datos
        //})
        //.then(function(data){
        //})
        //.catch(function(err) {console.log (err)} )
        
        
        //db.usuarios.findAll({
        //    raw: true //array con los obejtos que nos trae de nuestra base de datos
        //})
        //.then(function(data){
        //    console.log(data)
        //})
        //.catch(function(err) {
        //    console.log (err)
        //})
        
        res.render("index", {
            productos : data.productos,
            usuarioLogueado: false, 
            usuarios : data.usuarios,
            comments: data.comments,
            p: data.productos.slice(-4) ,

        })
    }
}

module.exports = controller

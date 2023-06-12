const data = require('../data/data')
const db = require ("../database/models/index")
const controller = {
    index: function (req, res) {
        db.productos.findAll({
            raw: true
        })
        .then(function(data){
        })
        .catch(function(err) {console.log (err)} )
        
        
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

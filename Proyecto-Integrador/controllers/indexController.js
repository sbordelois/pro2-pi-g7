const data = require('../data/data')
const controller = {
    index: function (req, res) {
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

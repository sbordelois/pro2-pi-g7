const data = require('../data/data')
const controller = {
    index: function (req, res) {
        res.render("index", {
            productos : data.productos,
            usuarioLogueado: true, //true o false
            usuarios : data.usuarios,
        })
    }
}

module.exports = controller

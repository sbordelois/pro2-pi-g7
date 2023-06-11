const data = require('../data/data')
const controller = {
    login: function(req, res) {
        res.render("login")
      },
    
    register: function(req, res) {
        res.render("register")
      },
    
    profile: function(req, res) {
        res.render("profile", {
          productos : data.productos ,
          usuarioLogueado: true, 
          usuarios : data.usuarios,
          comments: data.comments
      })
      },
    
    edit: function(req, res) {
        res.render("edit-profile", {
          productos : data.productos,
          usuarioLogueado: true, 
          usuarios: data.usuarios
      })
      }
}

module.exports = controller
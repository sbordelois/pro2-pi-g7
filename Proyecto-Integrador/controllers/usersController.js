const { usuarios, comments } = require('../data/data')
const data = require('../data/data')
const controller = {
    login: function(req, res, next) {
        res.render("login")
      },
    
    register: function(req, res, next) {
        res.render("register")
      },
    
    profile: function(req, res, next) {
        res.render("profile", {
          productos : data.productos ,
          usuarioLogueado: true, 
          usuarios : data.usuarios,
          comments: data.comments
      })
      },
    
    edit: function(req, res, next) {
        res.render("edit-profile", {
          productos : data.productos,
          usuarioLogueado: true, 
          usuarios: data.usuarios
      })
      }
}

module.exports = controller
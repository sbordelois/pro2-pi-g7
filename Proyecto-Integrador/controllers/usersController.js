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
          productos : data.productos,
          usuarioLogueado: true //true o false
      })
      },
    
    edit: function(req, res, next) {
        res.render("edit-profile", {
          productos : data.productos,
          usuarioLogueado: true //true o false
      })
      }
}

module.exports = controller
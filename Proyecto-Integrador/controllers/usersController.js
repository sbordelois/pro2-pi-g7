const data = require('../data/data')
let db = require('../database/models/index')
let op = db.Sequelize.Op
const controller = {
    login: function(req, res) {
        res.render("login")
      },
    logout: function(req,res) {
      req.session.user = undefined
      res.redirect('/')
    },
    
    register: function(req, res) {
        res.render("register")
      },
    
    profile: function(req, res){
      let id = req.session.user.id
      db.Users.findByPk(id)
      .then(function(user){
          res.render('profile', {
              usuarioLogueado:true, 
          })
      })
      .catch(function(err){
          console.log(err)
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
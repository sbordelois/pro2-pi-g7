const data = require('../data/data')
let db = require('../database/models/index')
let op = db.Sequelize.Op
let bcrypt = require("bcryptjs")

const controller = {
  login: function (req, res) {
    res.render("login")
  },
  logout: function (req, res) {
    req.session.user = undefined
    res.redirect('/')
  },
  register: function (req, res) {
    res.render("register")
  },
  create: function (req, res) {
    let { email, nombre, password, fecha_de_nacimiento, dni, foto_de_perfil } = req.body
    if (
      (password == '') ||
      (password.length < 4) ||
      (email == '')) {
      let errors = {}
      if (password == '') {
        errors.message = "Debes ingresar una contraseña"
      } else if (password.length < 4) {
        errors.message = "Debes ingresar una contraseña de más de 3 caracteres"
      } else {
        errors.message = "Debes ingresar un email"
      }
      res.locals.errors = errors
      res.render('register')
    } else {
      db.Usuarios.findOne({
        where: {
          email: email
        }
      })
        .then(function (data) {
          if (data) {
            let errors = {}
            errors.message = "Ya a existe un usuario con ese email"
            res.locals.errors = errors
            res.render('register')
          } else {
            let pasEncriptada = bcrypt.hashSync(password, 12);
            db.Usuarios.create({
              email, nombre, password: pasEncriptada, fecha_de_nacimiento, dni, foto_de_perfil
            })
              .then(function (data) {
                res.redirect("/users/login")
              })
              .catch(function (err) {
                console.log(err)
              })
          }
        })
        .catch(function (err) {
          console.log(err)
        })
    }
  },
  profile: function (req, res) {
    let id = req.session.user.id
    db.Users.findByPk(id)
      .then(function (user) {
        res.render('profile', {
          usuarioLogueado: true,
        })
      })
      .catch(function (err) {
        console.log(err)
      })
  },

  edit: function (req, res) {
    res.render("edit-profile", {
      productos: data.productos,
      usuarioLogueado: true,
      usuarios: data.usuarios
    })
  },
  checkUser: function (req, res) {
    let errors = {}
    let { email, password } = req.body
    db.Usuarios.findOne({
      where: { email }
    })
      .then(function (user) {
        if (user !== null) {
          let compararPassword = bcrypt.compareSync(password, user.password)
          if (compararPassword) {
            req.session.user = {
              id: user.id,
              nombre: user.nombre,
              email: user.email
            }
            res.redirect("/")
          }
        }
        else {
          let errors = {}
          errors.message = ("No existe el usuario")
          res.locals.errors = errors
          return res.render("login")

        }

      })
      .catch(function (error) {
        console.log(error)
      })
  }
}

module.exports = controller

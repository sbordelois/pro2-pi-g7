const controller = {
    login: function(req, res, next) {
        res.send('aqui vamos a mandar al login');
        res.render("login")
      },
    
    register: function(req, res, next) {
        res.send('aqui vamos a mandar al register');
        res.render("register")
      },
    
    profile: function(req, res, next) {
        res.send('aqui vamos a mandar al profile');
        res.render("profile")
      },
    
    edit: function(req, res, next) {
        res.send('aqui vamos a mandar al edit');
        res.render("edit-profile")
      }
}

module.exports = controller
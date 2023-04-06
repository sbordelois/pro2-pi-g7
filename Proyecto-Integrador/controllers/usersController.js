const controller = {
    login: function(req, res, next) {
        res.send('aqui vamos a mandar al login');
      },
    
    register: function(req, res, next) {
        res.send('aqui vamos a mandar al register');
      },
    
    profile: function(req, res, next) {
        res.send('aqui vamos a mandar al profile');
      
      },
    
    edit: function(req, res, next) {
        res.send('aqui vamos a mandar al edit');
      
      }
}

module.exports = controller
var express = require('express');
var router = express.Router();
const controller = require('../controllers/usersController')

/* GET users listing. */
router.get('/login', controller.login);
router.post("/login", controller.checkUser)

router.get('/register', controller.register );
router.post('/register', controller.create);

router.get('/profile', controller.profile );

router.get('/edit-profile', controller.edit );

module.exports = router;

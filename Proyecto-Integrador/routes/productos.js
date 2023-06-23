const express = require ("express");
const router = express.Router();
const controller = require ("../controllers/productosController")

router.get("/add", controller.add)
router.get('/search-results', controller.search )
router.post("/add", controller.create)
router.get("/detail/:id", controller.detail)
router.post("/detail/:id", controller.addComment)




module.exports= router


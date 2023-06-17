const express = require ("express");
const router = express.Router();
const controller = require ("../controllers/productosController")

router.get("/add", controller.add)
router.get("/detail/:id", controller.detail)
router.post("/detail/:id", controller.addComment)

router.get('/search-results', controller.search )



module.exports= router


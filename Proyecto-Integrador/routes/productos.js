const express = require ("express")
const router = express.Router()
const controller = require ("../controllers/productosController")

router.get("/add", controller.add)
router.get("/detail", controller.detail)
router.get('/search-results', controller.search )



module.exports= router


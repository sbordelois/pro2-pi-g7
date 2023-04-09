const express = require ("express")
const router = express.Router()
const controller = require ("../controllers/productosController")

router.get("/", controller.index)
router.get("/subirproductos", controller.subirproductos)



module.exports= router


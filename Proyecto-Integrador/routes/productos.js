const express = require ("express")
const router = express.Router()
const controller = require ("../controllers/productosController")

router.get("/", controller.index)
router.get("/detail", controller.detail)


module.exports= router


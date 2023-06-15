/* const data = require('../data/data')*/
const { Association } = require("sequelize")
const db = require ("../database/models")

/* Productos no esta requerido ?? */
let op = db.Sequelize.Op
const controller = {
    add: function(req, res){
        res.render('addproducts', {usuarioLogueado:true}
        /* en headerLogueado.ejs no esta definido usuarios */)
    },
    detail: function(req, res){
        let id = req.params.id
        console.log(req.session)
        db.Productos.findByPk(id,
             {
                include:[
                    {association: 'productos_comentarios',
                    include: [{association:'comentarios_usuarios'}]}, /* ver esas associations y nombrarlas bien*/
                    {association: ' productos_usuarios'}
                ],
            })
        .then(function(data){
            /* cambiar si el usuario esta logueado q cambie si lo puede ediar o no etc */
            res.render('detail-products', {
                usuarioLogueado:false,
                productos: data,
            })
        })
        .catch(function(err){
            console.log(err)
        })
    },
    search: function(req, res){
        let busquedadelusuario = req.query.busqueda

        db.Productos.findAll({
            raw:true,
            nest:true,
            order:[['created_at', 'DESC']],
            where:{
                title:{
                    [op.like]: `%${busquedadelusuario}%`
                }
            }
        })
        .then(function(data){
            console.log(data.length)
            let obtuvimosResultados
            if(data.length > 0) {
                obtuvimosResultados = true
            } else {
                obtuvimosResultados = false
            }
            res.render(
                'search-results', 
                {
                    usuarioLogueado:false,
                    busquedadelusuario,
                    obtuvimosResultados,
                    resultados: data
                }
            )
        })
        .catch(function(err){
            console.log(err)
        })
    },

}

module.exports = controller
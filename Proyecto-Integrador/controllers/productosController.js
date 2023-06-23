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
                    include: {association:'comentarios_usuarios'}}, /* ver esas associations y nombrarlas bien*/
                    {association: 'productos_usuarios'}
                ],
            })
        .then(function(data){
            //res.send(data)
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
            where:{
                [op.or]:[
                  { nombre:{ [op.like]: `%${busquedadelusuario}%`}},
                  {descripcion:{[op.like]:`%${busquedadelusuario}%`}}
                    ],
            },
            order:[['created_at', 'DESC']],
            include: [
                {association:"productos_usuarios"},
                {association:"productos_comentarios"}
            ]
            
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
    addComment:function(req,res){
        if(req.session.user){
            let comment = {
                usuario_id : req.session.user.id,
                productos_id : req.params.id,
                texto: req.body.texto
                }
                db.Comentarios.create(comment)
                return res.redirect(`/productos/detail/${req.params.id}`)
            }
            else{
                return res.redirect("/users/login")
            }
        },
        create: function(req, res) {
            let producto = {
                usuario_id: req.session.user.id,
                nombre: req.body.nombre_del_producto,
                descripcion: req.body.descripcion_del_producto,
            }
            db.Productos.create(producto)
            .then(function(data) {
                res.redirect(`/productos/detail/${data.id}`)
            })
            .catch(function(err) {
                console.log(err)
            }) 
        },
        delete_product: function(req, res) { // Falta agregar ruta y botón (y validar que el producto pertenezca el usuario logueado!!)
            if (req.session.user == undefined) {
                return res.redirect("/users/login")
            } else {
                db.Usuarios.findByPk(req.session.user.id)
            }
            db.Productos.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(function(data) {
                res.redirect("/")
            })
            .catch(function(err) {
                console.log(err)
            })
        }
            
    
    }

module.exports = controller
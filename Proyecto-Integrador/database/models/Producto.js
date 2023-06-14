module.exports = function (sequelize, dataTypes){
    let alias = "Productos"
    let columnas = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unsigned: true,
        },
        usuario_id: {
            type: dataTypes.INTEGER,
            unsigned: true
        },
        nombre: {
            type: dataTypes.STRING,
            allowNull: true,
        },
        descripcion: {
            type: dataTypes.STRING,
            allowNull: true,
        },
/*         image: {
            type: dataTypes.STRING
        }
 */
    }

    let config = {
        TableName: "productos",
        timestamps: true,
        underscored: true,
    }



    const Productos = sequelize.define(alias, columnas, config)
    Productos.associate = function(models){
        Productos.belongsTo(models.Usuarios, {
            as:'productos_usuarios',
            foreignKey:'usuario_id'
        })
        Productos.belongsToMany(models.Comentarios, {
            as: 'Comentarios',
            through: 'fk_product_id', /* no se cual es la tabla pivot q las une */
            foreignKey:'productos_id',
            otherKey: 'productos_id',/* nose que dos FK poner, creo q en la tabla de procutos falta una fk de comentarios */
            timestamps:false
        })
    }
    return Productos
}
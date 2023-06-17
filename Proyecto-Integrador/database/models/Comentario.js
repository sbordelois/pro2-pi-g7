module.exports = function(sequelize, dataTypes){
    let alias = "Comentarios"
    let columnas = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unsigned: true
        },
        usuario_id: {
            type: dataTypes.INTEGER,
            allowNull: true,
            unsigned: true
        },
        productos_id: {
            type: dataTypes.INTEGER,
            allowNull: true,
            unsigned: true
        },
        texto: {
            type: dataTypes.STRING,
            allowNull: true
        }
    }

    let config = {
        tableName: "comentarios",
        timestamps: true,
        underscored: true
    }

    const Comentarios = sequelize.define(alias, columnas, config)
    Comentarios.associate = function(models){
        Comentarios.belongsTo(models.Productos, {
            as:'comentarios_productos',
            foreignKey: 'productos_id'
        })
        Comentarios.belongsTo(models.Usuarios, {
            as:'comentarios_usuarios',
            foreignKey: 'usuario_id'
        })
        
    }
    return Comentarios 
}
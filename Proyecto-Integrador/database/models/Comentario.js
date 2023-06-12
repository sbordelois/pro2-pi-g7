module.exports = function(sequelize, dataTypes){
    let alias = "comentarios"
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

    const comentarios = sequelize.define(alias, columnas, config)
    return comentarios 
}
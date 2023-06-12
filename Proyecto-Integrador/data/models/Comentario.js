module.exports = function(sequelize, dataTypes){
    let alias = "Comentarios"
    let Columnas = {
        id: {
            type: dataTypes.INTEGER,
            primarykey: true
        },
        usuario_id: {
            type: dataTypes.INTEGER
        },
        productos_id: {
            type: dataTypes.INTEGER
        }
        
    }

    let config = {
        tableName: "comentarios",
        timestamps: false
    }

    const comentarios = sequelize.define(alias, columnas, config)
    return comentarios 
}
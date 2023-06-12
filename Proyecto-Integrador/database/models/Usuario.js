module.exports = function(sequelize, dataTypes){
    let alias = "usuarios"
    let Columnas = {
        id: {
            type: dataTypes.INTEGER,
            primarykey: true
        },
        nombre: {
            type: dataTypes.string
        },
        email: {
            type: dataTypes.string //esta bien?
        },
        password: {
            type: dataTypes.INTEGER //esta bien?
        },
        foto_de_perfil: {
            type: dataTypes.null //esta bien?
        },
        dni: {
            type: dataTypes.INTEGER //esta bien?
        },
        fecha_de_nacimiento: {
            type: dataTypes.INTEGER //esta bien?
        },
        
    }

    let config = {
        tableName: "usuarios",
        timestamps: false
    }

    const usuarios = sequelize.define(alias, columnas, config)
    return usuarios 
}
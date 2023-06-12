module.exports = function (sequelize, DataTypes){
    let alias = "productos"
    let columnas = {
        id: {
            types: dataTypes.INTEGER,
            PrimaryKey: true
        },
        usuario_id: {
            types: dataTypes.INTEGER,
        },
        nombre: {
            types: dataTypes.STRING
        },
        descripcion: {
            types: dataTypes.STRING
        }

    }

    let config = {
        TableName: "productos",
        timestamps: false
    }



    const Productos = sequelize.define(alias, columnas, config)
    return Productos
}

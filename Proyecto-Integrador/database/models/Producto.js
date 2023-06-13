module.exports = function (sequelize, dataTypes){
    let alias = "productos"
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
        image: {
            type: dataTypes.STRING
        }

    }

    let config = {
        TableName: "productos",
        timestamps: true,
        underscored: true,
    }



    const Productos = sequelize.define(alias, columnas, config)
    return Productos
}
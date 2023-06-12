module.exports = function (sequelize, DataTypes){
    let alias = "productos"
    let columnas = {
        id: {
            types: dataTypes.INTEGER,
            PrimaryKey: true,
            autoIncrement: true,
            unsigned: true,
        },
        usuario_id: {
            types: dataTypes.INTEGER,
            unsigned: True
        },
        nombre: {
            types: dataTypes.STRING,
            allownull: true,
        },
        descripcion: {
            types: dataTypes.STRING,
            allowNull: true,
        },
        img: {
            types: dataTypes.STRING
        }

    }

    let config = {
        TableName: "productos",
        timestamps: false,
        underscored: true,
    }



    const Productos = sequelize.define(alias, columnas, config)
    return Productos
}

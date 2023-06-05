module.exports = function (sequelize, dataTypes){

    let alias = 'Producto';

    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        nombre: {
            type: dataTypes.STRING,
            allowNull: false
        },
        descripcion: {
            type: dataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updateAt: {
            type: dataTypes.DATE
        },
        comentarios: {
            type: dataTypes.INTEGER
        }
    };

    let config = {
        tableName: 'producto',
        timestamps: false,
        underscored: false,
    };
    
    const productoTabla = sequelize.define(alias,cols,config);
    return productoTabla
};
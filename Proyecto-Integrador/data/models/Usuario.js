module.exports = function (sequelize, dataTypes){

    let alias = 'Usuario';

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
        email: {
            type: dataTypes.STRING,
            allowNull: false
        },
        password: {
            type: dataTypes.STRING,
            allowNull: false
        },
        foto_de_perfil: {
            type: dataTypes.STRING,
        },
        dni: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        fecha_de_nacimiento: {
            type: dataTypes.DATE,
            allowNull: false
        },
    };
    //ver lo de timestamps y lo de seguidores
    
    let config = {
        tableName: 'usuario',
        timestamps: false,
        underscored: true,
    };

    
    const usuarioTabla = sequelize.define(alias,cols,config);
    return usuarioTabla
}
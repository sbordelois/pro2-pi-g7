module.exports = function(sequelize, dataTypes){
    let alias = "Usuarios"
    let columnas = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unsigned: true
        },
        nombre: {
            type: dataTypes.STRING,
            allowNull: false
        },
        email: {
            type: dataTypes.STRING,
            allownull: true,
            unique: true
        },
        password: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        foto_de_perfil: {
            type: dataTypes.STRING,
        },
        dni: {
            type: dataTypes.INTEGER,
            allowNull: false,
            unique: true,
        },
        fecha_de_nacimiento: {
            type: dataTypes.DATE,
            allowNull: false, 
        },
        
    }

    let config = {
        tableName: "usuarios",
        timestamps: false,
        underscored: true
    }

    const Usuarios = sequelize.define(alias, columnas, config)
    usuarios.hasMany(models.Producto, {
        as: "usuarios_productos",
        foreignKey: "usuario_id" //id_usuario es la fk que esta definida en Comentarios pero vinculando mi tabla 
    })
    usuarios.hasMany(models.Comentario, {
        as: "usuarios_comentarios", 
        foreignKey: "usuario_id"
    })

    return Usuarios
}
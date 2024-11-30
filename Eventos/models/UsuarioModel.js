let DataTypes = require('sequelize');
let sequelize = require('../config/db');

let Usuario = sequelize.define(
    'Usuario',{
        Nombre:{
            type:DataTypes.STRING,
            allowNull:true
        },
        Apellido:{
            type:DataTypes.STRING,
            allowNull:true
        },
        Direccion:{
            type:DataTypes.STRING,
            allowNull:true
        },
        Correo:{
            type:DataTypes.STRING,
            allowNull:true
        },
        Telefono:{
            type:DataTypes.INTEGER,
            allowNull:true
        }
    },
    {
        timestamps: true,
        tableName:'usuario'
    }
);

module.exports = Usuario;
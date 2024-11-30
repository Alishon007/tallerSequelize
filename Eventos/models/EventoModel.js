let DataTypes = require('sequelize');
let sequelize = require('../config/db');

let Evento = sequelize.define(
    'Evento',{
        Nombre:{
            type:DataTypes.STRING,
            allowNull:true
        },
        Descripcion:{
            type:DataTypes.STRING,
            allowNull:true
        },
        Fecha:{
            type:DataTypes.DATE,
            allowNull:true
        },
        Hora:{
            type:DataTypes.TIME,
            allowNull:true
        },
        Direccion:{
            type:DataTypes.STRING,
            allowNull:false
        },
        Capacidad:{
            type:DataTypes.INTEGER,
            allowNull:true
        }, 
        Estado:{
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        timestamps: true,
        tableName:'evento'
    }
);

module.exports = Evento;
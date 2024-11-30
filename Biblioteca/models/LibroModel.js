let DataTypes = require('sequelize');
let sequelize = require('../config/db');

let Libro = sequelize.define(
    'Libro',{
        Titulo:{
            type:DataTypes.STRING,
            allowNull:true
        },
        Autor:{
            type:DataTypes.STRING,
            allowNull:true
        },
        Año:{
            type:DataTypes.INTEGER,
            allowNull:true
        },
        Disponibilidad:{
            type:DataTypes.BOOLEAN,
            allowNull:false
        }
    },
    {
        timestamps: true,
        tableName:'libro'
    }
);

module.exports = Libro;
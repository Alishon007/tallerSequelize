let DataTypes = require('sequelize');
let sequelize = require('../config/db');
const Libro = require('./LibroModel');
const Usuario = require('./UsuarioModel');


let Prestamo = sequelize.define(
    'Prestamo',{
        FechaDevolucion:{
            type:DataTypes.DATE,
            allowNull:false
        },
        LibroId:{
            type:DataTypes.INTEGER,
            references:{
                model: Libro,
                key:'id'
            }
        },
        UsuarioId:{
            type:DataTypes.INTEGER,
            references:{
                model: Usuario,
                key:'id'
            }
        },
        Estado:{
            type: DataTypes.STRING,
            allowNull:true
        }  
    },
    {
        timestamps:true,
        tableName:'prestamo'
    }
);
// Crear la relacion
Prestamo.belongsTo(Libro, { foreignKey: 'LibroId' });
Prestamo.belongsTo(Usuario, { foreignKey: 'UsuarioId' });

module.exports = Prestamo;
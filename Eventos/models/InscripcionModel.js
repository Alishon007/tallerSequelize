let DataTypes = require('sequelize');
let sequelize = require('../config/db');
const Evento = require('./EventoModel');
const Usuario = require('./UsuarioModel');


let Inscripcion = sequelize.define(
    'Inscripcion',{
        EventoId:{
            type:DataTypes.INTEGER,
            references:{
                model: Evento,
                key:'id'
            }
        },
        UsuarioId:{
            type:DataTypes.INTEGER,
            references:{
                model: Usuario,
                key:'id'
            }
        }
    },
    {
        timestamps:true,
        tableName:'inscripcion'
    }
);
// Crear la relacion
Inscripcion.belongsTo(Evento, { foreignKey: 'EventoId' });
Inscripcion.belongsTo(Usuario, { foreignKey: 'UsuarioId' });

module.exports = Inscripcion;
let Inscripcion = require('../models/InscripcionModel');
let sequelize = require('../config/db');
let Evento = require('../models/EventoModel')

class InscripcionService{
    static async obtenerInscripcion(){
        try{
            //dindAll
            let tarea = await Inscripcion.findAll();
            return tarea;
        } catch (e){
            console.log('ERROR' + e)
        }
    }
    static async crearInscripcion(datos){
        try{
            let tarea = await Inscripcion.create(datos);
            return tarea;
        }catch(e){
            console.log('Error al crear el Inscripcion'+ e)
        }
    }
    static async actualizarInscripcion(id, datos) {
        try {
            let [ actualizar ] = await Inscripcion.update(datos, { where: { id } });
            //let tarea = await Inscripcion.findByPk(id);
            if (actualizar == 0) {
                console.log('Inscripcion no encontrado');
            } else {
                 // Aquí se añade la condición where 
                
                return datos;
            }
        } catch (e) {
            console.log('Error al actualizar el Inscripcion: ' + e);  
        }
    }
    static async eliminarInscripcion(id){
        try{
            let tarea = await Inscripcion.findByPk(id);
            if(!tarea){
                console.log('Inscripcion no encontrado')
            }else{
                let eliminar = await Inscripcion.destroy( {where: { id }});
                return eliminar;
            }
        } catch(e) {
            console.log('Error al eliminar el Inscripcion', e);
        }
    }
    // static async inscripcionesEventos(){
    //     try{
    //         let [tarea] = await sequelize.query(`SELECT Evento.Nombre, Evento.Descripcion, COUNT(Inscripcion.id) AS NumeroInscripciones FROM Inscripcion JOIN Evento ON Inscripcion.EventoId = Evento.id GROUP BY Inscripcion.EventoId, Evento.Nombre, Evento.Descripcion ORDER BY NumeroInscripciones DESC`);
    //         return tarea;
    //     } catch (e){
    //         console.log('ERROR' + e)
    //     }
    // }
    static async inscripcionesEventos(){
        try { 
            const eventosConInscripciones = await Inscripcion.findAll({
                 attributes: [ 
                    'EventoId', 
                    [sequelize.fn('COUNT', 
                        sequelize.col('EventoId')), 
                        'NumeroInscripciones'] ], 
                        include: [ { 
                            model: Evento, 
                            attributes: ['Nombre', 'Descripcion'] 
                        } ], 
                        group: ['EventoId', 'Evento.id'], 
                        order: [[sequelize.literal('NumeroInscripciones'), 
                            'DESC']] 
                        }); 
            return eventosConInscripciones; 
        }catch (e){
            console.log('ERROR' + e)
        }
    }
    
}
module.exports = InscripcionService
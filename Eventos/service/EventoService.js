let Evento = require('../models/EventoModel');

class EventoService{
    static async obtenerEvento(){
        try{
            //dindAll
            let tarea = await Evento.findAll();
            return tarea;
        } catch (e){
            console.log('ERROR' + e)
        }
    }
    static async crearEvento(datos){
        try{
            let tarea = await Evento.create(datos);
            return tarea;
        }catch(e){
            console.log('Error al crear el Evento'+ e)
        }
    }
    static async actualizarEvento(id, datos) {
        try {
            let [ actualizar ] = await Evento.update(datos, { where: { id } });
            //let tarea = await Evento.findByPk(id);
            if (actualizar == 0) {
                console.log('Evento no encontrado');
            } else {
                 // Aquí se añade la condición where 
                
                return datos;
            }
        } catch (e) {
            console.log('Error al actualizar el Evento: ' + e);  
        }
    }
    static async eliminarEvento(id){
        try{
            let tarea = await Evento.findByPk(id);
            if(!tarea){
                console.log('Evento no encontrado')
            }else{
                let eliminar = await Evento.destroy( {where: { id }});
                return eliminar;
            }
        } catch(e) {
            console.log('Error al eliminar el Evento', e);
        }
    }
    static async eventosDisponibles(){
        try{
            let tarea = await Evento.findAll({where: {estado :'disponible'}});
            return tarea;
        } catch (e){
            console.log('ERROR' + e)
        }
    }
    static async capacidadEventos(){
        try { 
            const eventosConInscripciones = await Evento.findAll({
                    attributes:['Nombre', 'Capacidad']
            });
            return eventosConInscripciones; 
        }catch (e){
            console.log('ERROR' + e)
        }
    }
}
module.exports = EventoService
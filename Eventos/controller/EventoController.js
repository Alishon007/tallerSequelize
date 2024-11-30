const evento = require('../models/EventoModel');

let EventoService = require('../service/EventoService');

class EventoControllers{

    static async traerEvento(req, res){
        try {
            let tareas = await EventoService.obtenerEvento();
            res.json(tareas)
        } catch (error) {
            res.json({error: `Error al obtener el Evento: ${error}`})
        }
    };
    static async adicionarEvento(req, res){
        try{
            let tarea = await EventoService.crearEvento(req.body);
            res.json(tarea)
        } catch (e) {
            res.json('Error al agregar el Evento ' + e)
        }
    };
    static async actualizarEvento(req, res){
        try{
            let tarea = await EventoService.actualizarEvento(req.params.id ,req.body);
            res.json(tarea)
        } catch(e) {
            res.json({e: 'Error al actualizar los datos del Evento' + e})
        }
    };
    static async eliminarEvento(req, res) {
        try{
            let tarea = await EventoService.eliminarEvento(req.params.id);
            res.json(tarea)
        }catch(e){
            res.json({e: 'Error al eliminar el Evento'})
        }
    };
    static async eventosDisponibles(req, res){
        try {
            let tareas = await EventoService.eventosDisponibles();
            res.json(tareas)
        } catch (error) {
            res.json({error: `Error al obtener el Evento: ${error}`})
        }
    };
    static async capacidadEventos(req, res){
        try {
            let tareas = await EventoService.capacidadEventos();
            res.json(tareas)
        } catch (error) {
            res.json({error: `Error al obtener el Evento: ${error}`})
        }
    };
    
}

module.exports = EventoControllers
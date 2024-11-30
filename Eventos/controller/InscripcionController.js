const inscripcion = require('../models/InscripcionModel');

let InscripcionService = require('../service/InscripcionService');

class InscripcionControllers{

    static async traerInscripcion(req, res){
        try {
            let tareas = await InscripcionService.obtenerInscripcion();
            res.json(tareas)
        } catch (error) {
            res.json({error: `Error al obtener la Inscripcion: ${error}`})
        }
    };
    static async adicionarInscripcion(req, res){
        try{
            let tarea = await InscripcionService.crearInscripcion(req.body);
            res.json(tarea)
        } catch (e) {
            res.json('Error al agregar la Inscripcion ' + e)
        }
    };
    static async actualizarInscripcion(req, res){
        try{
            let tarea = await InscripcionService.actualizarInscripcion(req.params.id ,req.body);
            res.json(tarea)
        } catch(e) {
            res.json({e: 'Error al actualizar los datos de la Inscripcion' + e})
        }
    };
    static async eliminarInscripcion(req, res) {
        try{
            let tarea = await InscripcionService.eliminarInscripcion(req.params.id);
            res.json(tarea)
        }catch(e){
            res.json({e: 'Error al eliminar la Inscripcion'})
        }
    };
    static async inscripcionesEventos(req, res){
        try {
            let tareas = await InscripcionService.inscripcionesEventos();
            res.json(tareas)
        } catch (error) {
            res.json({error: `Error al obtener el Evento: ${error}`})
        }
    };
    
}

module.exports = InscripcionControllers
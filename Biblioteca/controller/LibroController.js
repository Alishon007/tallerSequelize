const Libro = require('../models/LibroModel');

let LibroService = require('../service/LibroService');

class TareaControllers{

    static async traerLibro(req, res){
        try {
            let tareas = await LibroService.obtenerLibro();
            res.json(tareas)
        } catch (error) {
            res.json({error: `Error al obtener el libro: ${error}`})
        }
    };
    static async adicionarLibro(req, res){
        try{
            let tarea = await LibroService.crearLibro(req.body);
            res.json(tarea)
        } catch (e) {
            res.json('Error al agregar el libro ' + e)
        }
    };
    static async actualizarLibro(req, res){
        try{
            let tarea = await LibroService.actualizarLibro(req.params.id ,req.body);
            res.json(tarea)
        } catch(e) {
            res.json({e: 'Error al actualizar los datos del libro' + e})
        }
    };
    static async eliminarLibro(req, res) {
        try{
            let tarea = await LibroService.eliminarLibro(req.params.nombre, req.params.id);
            res.json(tarea)
        }catch(e){
            res.json({e: 'Error al eliminar el libro'})
        }
    };
}

module.exports = TareaControllers
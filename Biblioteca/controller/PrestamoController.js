const Prestamo = require('../models/PrestamoModel');

let PrestamoService = require('../service/PrestamoService');

class PrestamoControllers{

    static async traerPrestamo(req, res){
        try {
            let tareas = await PrestamoService.obtenerPrestamo();
            res.json(tareas)
        } catch (error) {
            res.json({error: `Error al obtener el Prestamo: ${error}`})
        }
    };
    static async adicionarPrestamo(req, res){
        try{
            let tarea = await PrestamoService.crearPrestamo(req.body);
            res.json(tarea)
        } catch (e) {
            res.json('Error al agregar el Prestamo ' + e)
        }
    };
    static async actualizarPrestamo(req, res){
        try{
            let tarea = await PrestamoService.actualizarPrestamo(req.params.id ,req.body);
            res.json(tarea)
        } catch(e) {
            res.json({e: 'Error al actualizar los datos del Prestamo' + e})
        }
    };
    static async eliminarPrestamo(req, res) {
        try{
            let tarea = await PrestamoService.eliminarPrestamo(req.params.id);
            res.json(tarea)
        }catch(e){
            res.json({e: 'Error al eliminar el Prestamo'})
        }
    };
    static async consultaLibroEstado(req, res){
        try{
            let resultad = await PrestamoService.consultaLibroEstado();
            res.json(resultad)
        }catch(e){
            res.json({err: e, })
        }
    }
    static async librosMasSolicitados(req, res){
        try{
            let resultad = await PrestamoService.librosMasSolicitados();
            res.json(resultad)
        }catch(e){
            res.json({err: e, })
        }
    }
    static async PrestamosRecientes(req, res){
        try{
            let resultad = await PrestamoService.PrestamosRecientes();
            res.json(resultad)
        }catch(e){
            res.json({err: e, })
        }
    }
}

module.exports = PrestamoControllers
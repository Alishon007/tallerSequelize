const usuario = require('../models/UsuarioModel');

let UsuarioService = require('../service/UsuarioService');

class UsuarioControllers{

    static async traerUsuario(req, res){
        try {
            let tareas = await UsuarioService.obtenerUsuario();
            res.json(tareas)
        } catch (error) {
            res.json({error: `Error al obtener el Usuario: ${error}`})
        }
    };
    static async adicionarUsuario(req, res){
        try{
            let tarea = await UsuarioService.crearUsuario(req.body);
            res.json(tarea)
        } catch (e) {
            res.json('Error al agregar el Usuario ' + e)
        }
    };
    static async actualizarUsuario(req, res){
        try{
            let tarea = await UsuarioService.actualizarUsuario(req.params.id ,req.body);
            res.json(tarea)
        } catch(e) {
            res.json({e: 'Error al actualizar los datos del Usuario' + e})
        }
    };
    static async eliminarUsuario(req, res) {
        try{
            let tarea = await UsuarioService.eliminarUsuario(req.params.id);
            res.json(tarea)
        }catch(e){
            res.json({e: 'Error al eliminar el Usuario'})
        }
    };
}

module.exports = UsuarioControllers
let Usuario = require('../models/UsuarioModel');


class UsuarioService{
    static async obtenerUsuario(){
        try{
            //dindAll
            let tarea = await Usuario.findAll();
            return tarea;
        } catch (e){
            console.log('ERROR' + e)
        }
    }
    static async crearUsuario(datos){
        try{
            let tarea = await Usuario.create(datos);
            return tarea;
        }catch(e){
            console.log('Error al crear el usuario'+ e)
        }
    }
    static async actualizarUsuario(id, datos) {
        try {
            let [ actualizar ] = await Usuario.update(datos, { where: { id } });
            //let tarea = await Usuario.findByPk(id);
            if (actualizar == 0) {
                console.log('Usuario no encontrado');
            } else {
                 // Aquí se añade la condición where 
                
                return datos;
            }
        } catch (e) {
            console.log('Error al actualizar el usuario: ' + e);  
        }
    }
    static async eliminarUsuario(id){
        try{
            let tarea = await Usuario.findByPk(id);
            if(!tarea){
                console.log('Usuario no encontrado')
            }else{
                let eliminar = await Usuario.destroy( {where: { id }});
                return eliminar;
            }
        } catch(e) {
            console.log('Error al eliminar el usuario', e);
        }
    }
}
module.exports = UsuarioService
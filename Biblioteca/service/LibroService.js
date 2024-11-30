let Libro = require('../models/LibroModel');
let Usuario = require('../models/UsuarioModel');


class LibroService{
    static async obtenerLibro(){
        try{
            //dindAll
            let tarea = await Libro.findAll();
            return tarea;
        } catch (e){
            console.log('ERROR' + e)
        }
    }
    static async crearLibro(datos){
        try{
            let tarea = await Libro.create(datos);
            return tarea;
        }catch(e){
            console.log('Error al crear tarea'+ e)
        }
    }
    static async actualizarLibro(id, datos) {
        try {
            let [ actualizar ] = await Libro.update(datos, { where: { id } });
            //let tarea = await Libro.findByPk(id);
            if (actualizar == 0) {
                console.log('Libro no encontrada');
            } else {
                 // Aquí se añade la condición where 
                
                return datos;
            }
        } catch (e) {
            console.log('Error al actualizar tarea: ' + e);  
        }
    }
    static async eliminarLibro(nombre, id){
        try{
            const usuario = await Usuario.findOne({ where: { nombre } });
            if (!usuario || usuario.Administrador === false) { 
                return ('Acceso denegado. El usuario no es administrador o no está registrado.' ); 
            } else {
                let tarea = await Libro.findByPk(id);
                if(!tarea){
                    console.log('Libro no encontrada')
                }else{
                    let eliminar = await Libro.destroy( {where: { id }});
                    return eliminar;
                }
            }
            // let tarea = await Libro.findByPk(id);
            // if(!tarea){
            //     console.log('Libro no encontrada')
            // }else{
            //     let eliminar = await Libro.destroy( {where: { id }});
            //     return eliminar;
            // }
        } catch(e) {
            console.log('Error al eliminar tarea', e);
        }
    }
}
module.exports = LibroService
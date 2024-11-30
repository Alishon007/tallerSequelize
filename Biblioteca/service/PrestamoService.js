const Libro = require('../models/LibroModel');
const Usuario = require('../models/UsuarioModel')
let Prestamo = require('../models/PrestamoModel');
const sequelize = require('../config/db');

class PrestamoService{
    static async obtenerPrestamo(){
        try{
            //dindAll
            let tarea = await Prestamo.findAll({
                include:[{
                    model: Libro,
                    attributes:['Titulo', 'Autor']
                },
                {
                    model: Usuario,
                    attributes:['Nombre']
                }]
            });
            return tarea;
        } catch (e){
            console.log('ERROR' + e)
        }
    }
    static async crearPrestamo(datos){
        try{
            let tarea = await Prestamo.create(datos);
            return tarea;
        }catch(e){
            console.log('Error al crear el Prestamo'+ e)
        }
    }
    static async actualizarPrestamo(id, datos) {
        try {
            let [ actualizar ] = await Prestamo.update(datos, { where: { id } });
            //let tarea = await Prestamo.findByPk(id);
            if (actualizar == 0) {
                console.log('Prestamo no encontrado');
            } else {
                 // Aquí se añade la condición where 
                
                return datos;
            }
        } catch (e) {
            console.log('Error al actualizar el Prestamo: ' + e);  
        }
    }
    static async eliminarPrestamo(id){
        try{
            let tarea = await Prestamo.findByPk(id);
            if(!tarea){
                console.log('Prestamo no encontrado')
            }else{
                let eliminar = await Prestamo.destroy( {where: { id }});
                return eliminar;
            }
        } catch(e) {
            console.log('Error al eliminar el Prestamo', e);
        }
    }
    static async consultaLibroEstado(){
        try{
            let rtarea = await Prestamo.findAll({
                attributes:['Estado'],
                include:{
                    model: Libro,
                    attributes:['Titulo', 'Autor', 'Año']
                }
            })
            return rtarea;
        }catch(e){
            console.log('Error', e)
        }
    }
    // static async librosMasSolicitados(){
    //     try { 
    //         const [librosMasSolicitados] = await sequelize.query(`SELECT Libro.Titulo, Libro.Autor, COUNT(Prestamo.id) AS VecesPrestado FROM Prestamo JOIN Libro ON Prestamo.LibroId = Libro.id GROUP BY Prestamo.LibroId, Libro.Titulo, Libro.Autor ORDER BY VecesPrestado DESC`) 
    //     return librosMasSolicitados; 
    // }
    //     catch(e){
    //         console.log('Error', e)
    //     }
    // }
    static async librosMasSolicitados() { 
        try { 
            const librosMasSolicitados = await Prestamo.findAll({ 
                attributes: [ 'LibroId', 
                    [sequelize.fn('COUNT', 
                        sequelize.col('LibroId')), 
                        'numeroPrestamos'] ], 
                        include: [{ model: Libro, 
                            attributes: ['Titulo', 'Autor'] }], 
                            group: ['LibroId', 'Libro.id'], 
                            order: [[sequelize.literal('numeroPrestamos'), 'DESC']] 
                        }); 
                return librosMasSolicitados; } 
    catch (error){ 
        console.error('Error al obtener los libros más solicitados:', error); } 
    }
    // static async PrestamosRecientes(){
    //     try { 
    //         const [prestamosRecientes] = await sequelize.query(`SELECT Prestamo.id, Prestamo.FechaPrestamo, Prestamo.FechaDevolucion, Libro.Titulo, Usuario.Nombre, Prestamo.Estado FROM Prestamo JOIN Libro ON Prestamo.LibroId = Libro.id JOIN Usuario ON Prestamo.UsuarioId = Usuario.id ORDER BY Prestamo.FechaPrestamo DESC LIMIT 10`);
    //     return prestamosRecientes; 
    // }
    //     catch(e){
    //         console.log('Error', e)
    //     }
    // }
    static async PrestamosRecientes(){
        try { 
            const prestamosMasRecientes = await Prestamo.findAll({ 
                include: [ { 
                    model: Libro, 
                    attributes: ['Titulo'] }, 
                    { model: Usuario, attributes: ['Nombre'] } ], 
                    order: [['FechaPrestamo', 'DESC']], 
                    limit: 10 }); 
                return prestamosMasRecientes;
        }catch(e){
            console.log('Error', e)
        }
    }
}
module.exports = PrestamoService
const express = require('express');
let PrestamoController = require('../controller/PrestamoController')

let router = express.Router();

router.get('/prestamo', PrestamoController.traerPrestamo);
router.post('/prestamo', PrestamoController.adicionarPrestamo);
router.put('/prestamo/:id', PrestamoController.actualizarPrestamo);
router.delete('/prestamo/:id', PrestamoController.eliminarPrestamo);
router.get('/libroEstado', PrestamoController.consultaLibroEstado);
router.get('/librosMasSolicitados', PrestamoController.librosMasSolicitados);
router.get('/prestamosRecientes', PrestamoController.PrestamosRecientes);

module.exports = router;
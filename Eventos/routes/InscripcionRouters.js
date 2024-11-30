const express = require('express');
let InscripcionController = require('../controller/InscripcionController')

let router = express.Router();

router.get('/inscripcion', InscripcionController.traerInscripcion);
router.post('/inscripcion', InscripcionController.adicionarInscripcion);
router.put('/inscripcion/:id', InscripcionController.actualizarInscripcion);
router.delete('/inscripcion/:id', InscripcionController.eliminarInscripcion);
router.get('/inscripcionesEventos', InscripcionController.inscripcionesEventos);


module.exports = router;
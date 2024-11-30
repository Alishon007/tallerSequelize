const express = require('express');
let LibroController = require('../controller/LibroController')

let router = express.Router();

router.get('/libro', LibroController.traerLibro);
router.post('/libro', LibroController.adicionarLibro);
router.put('/libro/:id', LibroController.actualizarLibro);
router.delete('/libro/:nombre/:id', LibroController.eliminarLibro);

module.exports = router;
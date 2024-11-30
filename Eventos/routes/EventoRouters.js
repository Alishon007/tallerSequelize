const express = require('express');
let EventoController = require('../controller/EventoController')

let router = express.Router();

router.get('/evento', EventoController.traerEvento);
router.post('/evento', EventoController.adicionarEvento);
router.put('/evento/:id', EventoController.actualizarEvento);
router.delete('/evento/:id', EventoController.eliminarEvento);
router.get('/eventosDisponibles', EventoController.eventosDisponibles);
router.get('/capacidadEventos', EventoController.capacidadEventos);



module.exports = router;
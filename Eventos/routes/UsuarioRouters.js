const express = require('express');
let UsuarioController = require('../controller/UsuarioController')

let router = express.Router();

router.get('/usuario', UsuarioController.traerUsuario);
router.post('/usuario', UsuarioController.adicionarUsuario);
router.put('/usuario/:id', UsuarioController.actualizarUsuario);
router.delete('/usuario/:id', UsuarioController.eliminarUsuario);

module.exports = router;
const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/user');


// GET - Mostrar formulario para crear usuarios
router.get('/add', userCtrl.renderaddUser);

// POST - Crear usuarios
router.post('/add', userCtrl.addUser)

// GET - Mostrar formulario para cambiar usuarios
router.get('/add', userCtrl.renderchangeUser);

// POST - Mostrar nuevo cambio de usuario
router.post('/add', userCtrl.changeUser)


module.exports = router;

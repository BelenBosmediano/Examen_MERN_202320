// Desarrollo web 3 - Examen de medio semestre - 202320
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', mainCtrl.index);

module.exports = router;
// ************ Require's ************
const express = require('express');
const router = express.Router();
// ************ Controller Require ************
const mainController = require('../controllers/mainController');

router.get('/', mainController.home);
router.get('/contacto', mainController.contacto);
router.get('/buscador', mainController.buscador);

module.exports = router;
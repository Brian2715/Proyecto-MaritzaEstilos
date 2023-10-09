// ************ Module Require's ************
const express = require('express');
const router = express.Router();
// ************ Controller Require ************
const mainController = require('../controllers/mainController');
// ************ Routes ************
router.get('/', mainController.home);
router.get('/contacto', mainController.contacto);
router.get('/buscador', mainController.buscador);
router.get('/search', mainController.search);
router.get('/login', mainController.login);

module.exports = router;
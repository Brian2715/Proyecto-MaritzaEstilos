const path = require('path');
const mainController = {
    home: (req, res) => {
        return res.render('home')
    },
    contacto: (req, res) => {
        return res.render('contacto')
    },
    buscador: (req, res) => {
        return res.render('buscador')
    }
};

module.exports = mainController;
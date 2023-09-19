const fs = require('fs');
const path = require('path');

const products = require('../data/productsDataBase.json');


const controller = {
    home: (req, res) => {

        //** Vestidos Cena Blanca */
        const arrCenaBlanca = products.filter((elem) => elem.category === "cena-blanca");

        //** Vestidos de XV */
        const arrQuince = products.filter((elem) => elem.category === "quince");

        //** Vestidos de Reina */
        const arrReina = products.filter((elem) => elem.category === "reina");

        //** Pasarserlos a la vista */

        res.render('home', {
			cena: arrCenaBlanca,
            quince: arrQuince,
            reina: arrReina,
		})
    },
    contacto: (req, res) => {
        return res.render('contacto')
    },
    buscador: (req, res) => {
        return res.render('buscador')
    }
};

module.exports = controller;
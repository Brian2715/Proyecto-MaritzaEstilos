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
    login: (req, res) => {
        return res.render('login')
    },
    buscador: (req, res) => {
        return res.render('buscador')
    },
    detail: (req,res) => {
        return res.render('detail')
    },
    search: (req, res) => {
        ///** Capturar info del QueryString */
        const { keywords } = req.query;


        //** Buscar dentro del array */
        const prodSearch = products.filter( ( prod ) => prod.name.toLowerCase().includes(keywords.toLowerCase()))


        //** Pasarserlos a la vista */
        res.render('results', {
            results: prodSearch
        })
    }
};

module.exports = controller;
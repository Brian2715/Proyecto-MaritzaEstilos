const fs = require('fs');
const path = require('path');

const products = require('../data/productsDataBase.json');
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	home: (req, res) => {
		// Do the magic
		res.render('products', {
			arrCenaBlanca: products,
			arrQuince: products,
			arrReina: products,
		})
	}
};

module.exports = controller;
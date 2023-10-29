// ************ Require's ************
const express = require('express');
const path = require('path');


// ************ express() - (don't touch) ************
const app = express();


// ************ Servidor PORT- (don't touch) ************
const port = process.env.PORT || 5555;

app.listen(port, () => {
    console.log('Servidor funcionando');
});


// ************ Middlewares - (don't touch) ************
app.use(express.static(path.resolve(__dirname, 'public'))); // Necesario para los archivos estáticos en el folder /public


// ************ Template Engine - (don't touch) ************
app.set('view engine', 'ejs');
app.set('views', './src/views'); // Define la ubicación de la carpeta de las Vistas


// ************ Sistema de Rutas, require y use() ************
const mainRouter = require('./src/routes/mainRouter'); // Rutas main
const productsRouter = require('./src/routes/productsRouter'); // Rutas /products

app.use('/', mainRouter);
app.use('/products', productsRouter);

module.exports = app;
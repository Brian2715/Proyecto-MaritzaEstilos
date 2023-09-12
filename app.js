const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname, 'public')));

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('Servidor funcionando');
});

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/src/views/home.html');
});

app.get('/contacto.html', (req, res) =>{
    res.sendFile(__dirname + '/src/views/contacto.html');
});

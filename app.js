const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname, 'public')));

app.listen(5000, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/src/views/home.html');
});
const express = require('express');
const app = express();

app.get('/', function(req, res) {  //arrow function: (req, res) => {}
    res.status(200).send('Olá Mundo!');
});

app.listen(3000, function() {   
    console.log('Servidor Api NoFood iniciado na porta 3000');
});
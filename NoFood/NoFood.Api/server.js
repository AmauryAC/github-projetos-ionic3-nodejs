const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

let pessoas = [];

app.get('/', function(req, res) {  //arrow function: (req, res) => {}
    res.status(200).send(pessoas);
});

app.post('/', function(req, res) {
    pessoas.push(req.body);
    
    res.status(201).send(req.body);
});

app.put('/:id', function(req, res) {
    let pessoaEncontrada = pessoas.filter(pes => { return pes.id == req.params.id });
    pessoaEncontrada = req.body;

    res.status(202).send(pessoaEncontrada);
});

app.delete('/:id', function(req, res) {
    for (let index = 0; index < pessoas.length; index++) {
        const pessoa = pessoas[index];
        
        if(pessoa.id == req.params.id) {
            pessoas.splice(index, 1);
        }
    }

    res.status(204).send();
});

//400 - Bad request
//401 - Unauthorized
//500 - Internal server error

app.listen(3000, function() {   
    console.log('Servidor Api NoFood iniciado na porta 3000');
});
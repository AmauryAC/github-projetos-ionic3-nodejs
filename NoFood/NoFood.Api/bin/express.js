const express = require('express');
const bodyParser = require('body-parser');

// Routes
const categoriaRouter = require('../routes/categoria-router');

// Criando/Invocando a Api do Express
const app = express();

// Configuração de parse do JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Configurando as rotas
app.use('/api/categoria', categoriaRouter);

// Exportando nossa Api
module.exports = app;
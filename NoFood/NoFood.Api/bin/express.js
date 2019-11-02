const express = require('express');
const bodyParser = require('body-parser');

// Routes
const categoriaRouter = require('../routes/categoria-router');
const produtoRouter = require('../routes/produto-router');

// Criando/Invocando a Api/Server Web do Express
const app = express();

// Configuração de parse do JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Configurando as rotas
app.use('/api/categoria', categoriaRouter);
app.use('/api/produto', produtoRouter);

// Exportando nossa Api
module.exports = app;
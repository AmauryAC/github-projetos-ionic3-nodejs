'use strict'

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const produtoModel = new schema({
    nome: { type: String, required: true, trim: true, index: true },
    descricao: { type: String },
    preco: { type: Number, required: true },
    foto: { type: String, required: true },
    ativo: { type: Boolean, required: true },
    dataCriacao: { type: true, default: Date.now }
}, { versionKey: false });

produtoModel.pre('save', next => {
    let agora = new Date();

    if(!this.dataCriacao)
        this.dataCriacao = agora;

    next();
});

module.exports = mongoose.model('Produto', produtoModel);
'use strict'

const repository = require('../repositories/produto-repository');
const validation = require('../bin/helpers/validation');
const ctrlBase = require('../bin/base/controller-base');

const _repo = new repository();

function produtoController() {

}

produtoController.prototype.post = async function(req, res) {
    let _validationContract = new validation();

    _validationContract.isRequired(req.body.nome, 'O nome do produto é obrigatório');
    _validationContract.isRequired(req.body.descricao, 'A descrição do produto é obrigatória');
    _validationContract.isRequired(req.body.preco, 'O preço do produto é obrigatório');
    _validationContract.isRequired(req.body.foto, 'A foto do produto é obrigatória');
    _validationContract.isRequired(req.body.categoriaId, 'Informe a categoria do produto');
    
    if(req.body.preco)
        _validationContract.isTrue(req.body.preco == 0, 'O preço do produto deve ser maior que zero.');
    
    ctrlBase.post(_repo, _validationContract, req, res);
};

produtoController.prototype.put = async function(req, res) {
    let _validationContract = new validation();

    _validationContract.isRequired(req.body.nome, 'O nome do produto é obrigatório');
    _validationContract.isRequired(req.body.descricao, 'A descrição do produto é obrigatória');
    _validationContract.isRequired(req.body.preco, 'O preço do produto é obrigatório');
    _validationContract.isRequired(req.body.foto, 'A foto do produto é obrigatória');
    _validationContract.isRequired(req.params.id, 'O Id que será atualizado é obrigatório');
    _validationContract.isRequired(req.body.categoriaId, 'Informe a categoria do produto');
    
    if(req.body.preco)
        _validationContract.isTrue(req.body.preco == 0, 'O preço do produto deve ser maior que zero.');
    
    ctrlBase.put(_repo, _validationContract, req, res);
};

produtoController.prototype.get = async function(req, res) {
    ctrlBase.get(_repo, req, res);
};

produtoController.prototype.getById = async function(req, res) {
    ctrlBase.getById(_repo, req, res);
};

produtoController.prototype.delete = async function(req, res) {
    ctrlBase.delete(_repo, req, res);
};

module.exports = produtoController;
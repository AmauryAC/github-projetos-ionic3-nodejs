'use strict'

const repository = require('../repositories/categoria-repository');
const validation = require('../bin/helpers/validation');
const ctrlBase = require('../bin/base/controller-base');

const _repo = new repository();

function categoriaController() {

}

categoriaController.prototype.post = async function(req, res) {
    let _validationContract = new validation();

    _validationContract.isRequired(req.body.titulo, 'O título é obrigatório');
    _validationContract.isRequired(req.body.foto, 'A foto é obrigatória');
    
    ctrlBase.post(_repo, _validationContract, req, res);
};

categoriaController.prototype.put = async function(req, res) {
    let _validationContract = new validation();

    _validationContract.isRequired(req.body.titulo, 'O título é obrigatório');
    _validationContract.isRequired(req.body.foto, 'A foto é obrigatória');
    _validationContract.isRequired(req.params.id, 'O Id que será atualizado é obrigatório');
    
    ctrlBase.put(_repo, _validationContract, req, res);
};

categoriaController.prototype.get = async function(req, res) {
    ctrlBase.get(_repo, req, res);
};

categoriaController.prototype.getById = async function(req, res) {
    ctrlBase.getById(_repo, req, res);
};

categoriaController.prototype.delete = async function(req, res) {
    ctrlBase.delete(_repo, req, res);
};

module.exports = categoriaController;
 
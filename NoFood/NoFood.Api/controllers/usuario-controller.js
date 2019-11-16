'use strict'

const repository = require('../repositories/usuario-repository');
const validation = require('../bin/helpers/validation');
const ctrlBase = require('../bin/base/controller-base');

const md5 = require('md5');

const _repo = new repository();

function usuarioController() {

}

usuarioController.prototype.post = async function(req, res) {
    let _validationContract = new validation(); 

    _validationContract.isRequired(req.body.nome, 'Informe seu nome');
    _validationContract.isRequired(req.body.email, 'Informe seu e-mail');
    _validationContract.isEmail(req.body.email, 'O e-mail informado é inválido');
    _validationContract.isRequired(req.body.senha, 'A senha é obrigatória');
    _validationContract.isRequired(req.body.senhaConfirmacao, 'A senha de confirmação é obrigatória');
    _validationContract.isTrue(req.body.senha != req.body.senhaConfirmacao, 'A senha e a confirmação de senha não coincidem');
    
    let usuarioIsEmailExiste = await _repo.isEmailExiste(req.body.email);

    if(usuarioIsEmailExiste) {
        _validationContract.isTrue(usuarioIsEmailExiste.nome != undefined, `Já existe o e-mail ${req.body.email} cadastrado em nossa base`);
    }

    // Criptografa a senha do usuário
    req.body.senha = md5(req.body.senha);
    
    ctrlBase.post(_repo, _validationContract, req, res);
};

usuarioController.prototype.put = async function(req, res) {
    let _validationContract = new validation(); 

    _validationContract.isRequired(req.body.nome, 'Informe seu nome');
    _validationContract.isRequired(req.body.email, 'Informe seu e-mail');
    _validationContract.isEmail(req.body.email, 'O e-mail informado é inválido');
    _validationContract.isRequired(req.params.id, 'Informe o Id do usuário que será editado');

    let usuarioIsEmailExiste = await _repo.isEmailExiste(req.body.email);

    if(usuarioIsEmailExiste) {
        _validationContract.isTrue(usuarioIsEmailExiste.nome != undefined && usuarioIsEmailExiste._id != req.params.id, `Já existe o e-mail ${req.body.email} cadastrado em nossa base`);
    }

    ctrlBase.put(_repo, _validationContract, req, res);
};

usuarioController.prototype.get = async function(req, res) {
    ctrlBase.get(_repo, req, res);
};

usuarioController.prototype.getById = async function(req, res) {
    ctrlBase.getById(_repo, req, res);
};

usuarioController.prototype.delete = async function(req, res) {
    ctrlBase.delete(_repo, req, res);
};

module.exports = usuarioController;
 
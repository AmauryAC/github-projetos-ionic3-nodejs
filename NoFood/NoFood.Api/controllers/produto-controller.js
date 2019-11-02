'use strict'

function produtoController() {

}

produtoController.prototype.post = async function(req, res) {};

produtoController.prototype.put = async function(req, res) {};

produtoController.prototype.get = async function(req, res) {
    res.status(200).send('Listando os produtos...');
};

produtoController.prototype.getById = async function(req, res) {
    res.status(200).send(`O id passado foi ${req.params.id}`);
};

produtoController.prototype.delete = async function(req, res) {};

module.exports = produtoController;
'use strict'

function categoriaController() {

}

categoriaController.prototype.post = async function(req, res) {};

categoriaController.prototype.put = async function(req, res) {};

categoriaController.prototype.get = async function(req, res) {
    res.status(200).send('Listando as categorias...');
};

categoriaController.prototype.getById = async function(req, res) {
    res.status(200).send(`O id passado foi ${req.params.id}`);
};

categoriaController.prototype.delete = async function(req, res) {};

module.exports = categoriaController;
 
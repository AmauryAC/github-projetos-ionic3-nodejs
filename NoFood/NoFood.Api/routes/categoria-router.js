'use strict'

const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.status(200).send('Funcionando...');
});

router.get('/:id', function(req, res) {
    res.status(200).send(`O id passado foi ${req.params.id}`);
});

router.post('/', function(req, res) {

});

router.put('/:id', function(req, res) {

});

router.delete('/:id', function(req, res) {

});

module.exports = router;
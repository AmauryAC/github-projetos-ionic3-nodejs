exports.post = async(repository, validationContract, req, res) => {
    try {
        
        let data = req.body;

        if(!validationContract.isValid()) {
            res.status(400).send({
                message: 'Existem dados inválidos na sua requisição',
                validation: validationContract.errors()
            }).end();
            return;
        }

        let resultado = await repository.create(data);
        
        res.status(201).send(resultado);

    } catch (err) {
        console.log('POST com erro. Motivo: ', err);

        res.status(500).send({ message: 'Erro no processamento', error: err });
    }
};

exports.put = async(repository, validationContract, req, res) => {
    try {
        
        let id = req.params.id;
        let data = req.body;

        if(id) {
            if(!validationContract.isValid()) {
                res.status(400).send({
                    message: 'Existem dados inválidos na sua requisição',
                    validation: validationContract.errors()
                }).end();
                return;
            }

            let resultado = await repository.update(id, data);
            
            res.status(202).send(resultado);
        }
        else {
            res.status(400).send({ message: 'O parâmetro Id precisa ser informado' });
        }

    } catch (err) {
        console.log('PUT com erro. Motivo: ', err);

        res.status(500).send({ message: 'Erro no processamento', error: err });
    }
};

exports.get = async(repository, req, res) => {
    try {

        let lista = await repository.getAll();
        
        res.status(200).send(lista);

    } catch (err) {
        console.log('GET com erro. Motivo: ', err);

        res.status(500).send({ message: 'Erro no processamento', error: err });
    }
};

exports.getById = async(repository, req, res) => {
    try {

        let id = req.params.id;

        if(id) {
            let data = await repository.getById(id);
            
            res.status(200).send(data);
        }
        else {
            res.status(400).send({ message: 'O parâmetro Id precisa ser informado' });
        }

    } catch (err) {
        console.log('GET BY ID com erro. Motivo: ', err);

        res.status(500).send({ message: 'Erro no processamento', error: err });
    }
};

exports.delete = async(repository, req, res) => {
    try {

        let id = req.params.id;

        if(id) {
            let data = await repository.delete(id);
            
            res.status(200).send({ message: 'Registro excluído com sucesso!' });
        }
        else {
            res.status(400).send({ message: 'O parâmetro Id precisa ser informado' });
        }

    } catch (err) {
        console.log('DELETE com erro. Motivo: ', err);

        res.status(500).send({ message: 'Erro no processamento', error: err });
    }
};
const usuario = require('../models/Usuario');

module.exports = {
    async index(req,res){
        const result = await usuario.find({});

        res.send(result);
    },
    async findById(req,res){
        const id = req.param.id;
        const result = await usuario.findById(id);

        res.send(result);
    },
    async store(req,res){
        const {
            nome,
            email,
            senha,
            facebook,
            google,
            cep,
            endereco,
            dataNascimento,
            imagem
        } = req.body;
        const result = await usuario.create(
            nome,
            email,
            senha,
            facebook,
            google,
            cep,
            endereco,
            dataNascimento,
            imagem
        )
    },
    async update(req,res){

    },
    async delete(req,res){

    }
}
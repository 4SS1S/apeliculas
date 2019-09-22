const carrinho = require('../models/Carrinho');

module.exports = {
    async index(req,res){
        const { usuario } = req.body;
        const result = await carrinho.findOne(usuario);

        res.send(result);
    },
    async save(req,res){
        const {
            usuario, pelicula, quantidade
        } = req.body;
        const result = await carrinho.create(usuario,[pelicula,quantidade]);

        res.send(result);
    },
    async update(req,res){

    },
    async delete(req,res){
        const _id = req.params._id;
        const result = awaitcarrinho.findByIdAndDelete(_id);
        
        res.send(result);
    }
}
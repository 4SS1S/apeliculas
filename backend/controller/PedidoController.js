const pedido = require('../models/Pedido');
const TIPO_DE_PEDIDO = require('../services/TiposDePedidos');

module.exports = {
    async index(req,res){
        const result = await pedido.find({});

        res.send(result);
    },
    async findByStatus(req,res){
        const status = req.params.status;
        const result = await pedido.find(status);

        res.send(result);
    },
    async findByUser(req,res){
        const usuario = req.params.usuario;
        const result  = await pedido.find(usuario);

        res.send(result);
    },
    async store(req,res){
        const {
            pelicula,
            quantidade,
            valor,
            usuario,
            valorTotal,
            modoDePagamento
        } = req.body;

        const date = new Date;

        const result = await pedido.create({
            pelicula,
            quantidade,
            valor,
            usuario,
            status: TIPO_DE_PEDIDO.PEDIDO,
            valorTotal,
            modoDePagamento,
            dataDePedido: date
        });
        
        res.send(result);
    }
}
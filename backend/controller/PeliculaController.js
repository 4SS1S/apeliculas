const pelicula = require('../models/Pelicula');

module.exports = {
    async index(req,res){
        const result = await pelicula.find({});

        res.send(result);
    },
    async findById(req,res){
        const id = req.params.id;
        const result = await pelicula.findById(id);

        res.send(result);
    },
    async findByModel(req,res){
        const model = req.params.model;
        const result = await pelicula.find(model);

        res.send(result);
    },
    async store(req,res){
        const {
            modelo,
            nome,
            valor,
            quantidade
        } = req.body;
        const result = await pelicula.create({
            modelo,
            nome,
            valor,
            quantidade
        });

        res.send(result);
    },
    async update(req,res){
        const {
            id,
            modelo,
            nome,
            valor,
            quantidade
        } = req.body;
        const result = await pelicula.findOneAndUpdate(id,{
            modelo,
            nome,
            valor,
            quantidade
        });

        res.send(result);
    },
    async delete(req,res){
        const id = req.params.id;
        const result = await pelicula.findOneAndDelete(id);

        res.send(result);
    }
}
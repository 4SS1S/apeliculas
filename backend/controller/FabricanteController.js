const fabricante = require('../models/Fabricante');

module.exports = {

    async index(req,res){
        const { name } = req.query;

        console.log(name)
        const results = await fabricante.find(name);

        res.send(results);
    },
    async findOne(req,res){
        const id = req.params.id;
        const results = await fabricante.findById(id);

        res.send(results);
    },
    async findByName(req,res){
        const { name } = req.params.name;
        const results = await fabricante.findOne(name);

        res.send(results);
    },
    async store(req,res){
        const { name } = req.body;
        const result = await fabricante.create({name});

        res.send(result);
    },
    async update(req,res){

    },
    async delete(req,res){
        const { id } = req.params;
        const result = await fabricante.findOneAndDelete(id);

        res.send(result);
    }
}
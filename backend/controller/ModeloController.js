const modelo = require('../models/Modelo');
const Fabricante = require('../models/Fabricante');

module.exports = {
    async index(req,res){
        const { fabricante } = req.query;

        if(fabricante){
            // const f = await Fabricante.find({name: fabricante});
            // const marca = f[0]._id;
            const result = await modelo.find({fabricante});

            res.send(result);
        }else{
            const result = await modelo.find({});

            res.send(result);
        }
    },
    async findByFabricante(req,res){
        const { fabricante } = req.body;
        const result = await modelo.find(fabricante);

        res.send(result);
    },
    async store(req,res){
        const {
            fabricante,
            nome,
            imagem
        } = req.body;
        const result = await modelo.create({fabricante,nome,imagem});

        res.send(result);
    },
    async findOne(req,res){
        const id = req.params.id;
        const result = await modelo.findById(id);

        res.send(result);
    },
    async update(req,res){
        const {
            id,
            modelo,
            nome
        } = req.body;
        const result = await modelo.findOneAndUpdate(id,{
            modelo,
            nome
        });

        res.send(result);
    },
    async remove(req,res){
        const id = req.params.id;
        const result = await modelo.findByIdAndDelete(id);

        res.send(result);
    }
}
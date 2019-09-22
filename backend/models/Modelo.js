const { model, Schema } = require('mongoose');

const ModeloSchema = new Schema({
    fabricante: {
        type: Schema.Types.ObjectId,
        ref: 'Fabricante',
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    imagem: {
        type: String
    }
});

module.exports = model('Modelo',ModeloSchema);
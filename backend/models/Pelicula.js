const { model, Schema } = require('mongoose');

const PeliculaSchema = new Schema({
    modelo: {
        type: Schema.Types.ObjectId,
        ref: 'Modelo',
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    valor: {
        type: Number,
        required: true
    },
    quantidade: {
        type: Number,
        required: true
    }
});

module.exports = model('Pelicula', PeliculaSchema);
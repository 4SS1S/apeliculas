const { model, Schema } = require('mongoose');

const UsuarioSchema = new Schema({
    nome: {
        type: String,
        requierd: true
    },
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    facebook: {
        type: String
    },
    google: {
        type: String
    },
    dataNascimento: {
        type: Date
    },
    imagem: {
        type: String
    },
    endereco: {
        type: String,
        required: true
    },
    cep: {
        type: String,
        required: true
    }
});

module.exports = model('Usuario',UsuarioSchema);
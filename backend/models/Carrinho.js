const { model, Schema } = require('mongoose');

const CarrinhoSchema = new Schema({
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    itens: [
        {
            pelicula: {
                type: Schema.Types.ObjectId,
                ref: 'Pelicula'
            },
            quantidade: {
                type: Number,
            }
        }
    ]
});

module.exports = model('Carrinho',CarrinhoSchema);
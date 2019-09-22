const { model, Schema } = require('mongoose');

const PedidoSchema = new Schema({
    itens: [
        {
            pelicula: {
                type: Schema.Types.ObjectId,
                ref: 'Pelicula',
                required: true
            },
            quantidade: {
                type: Number,
                required: true
            },
            valor: {
                type: Number,
                required: true
            }
        }
    ],
    usuario: {
        type: Schema.Types.ObjectId,
        required: true
    },
    status: {
        type: Number
    },
    modoDePagamento: {
        type: Number,
        required: true
    },
    valorTotal: {
        type: Number,
        required: true
    },
    dataDePedido: {
        type: Date,
        required: true
    },
    dataDeEntrega: {
        type: Date
    }
});

module.exports = model('Pedido',PedidoSchema);
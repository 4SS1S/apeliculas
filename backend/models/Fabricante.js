const { model, Schema } = require('mongoose');

const FabricanteSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = model('Fabricante',FabricanteSchema);
const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
    marca: {type: String, required: true},
    modelo: {type: String, requerid: true},
    precio: {type: Number, requerid: true},
    sistemaOperativo: {type:String}
});

module.exports = mongoose.model('Device', deviceSchema)


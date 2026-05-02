const mongoose = require('mongoose');

// Sub-esquema para el historial de riegos
const RiegoSchema = new mongoose.Schema({
    fecha: { type: Date, default: Date.now },
    cantidad: { type: String, required: true } 
});

const PlantaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    tipo: { type: String, required: true },
    fechaSiembra: { type: Date, default: Date.now },
    riegos: [RiegoSchema] // Arreglo para guardar los riegos
});

module.exports = mongoose.model('Planta', PlantaSchema);
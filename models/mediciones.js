const mongoose = require("mongoose");

const Medicion = mongoose.Schema({
  IDBovino: { type: Number, required: true},
  temperatura: { type: Number},
  frecuenciaCardiaca: { type: Number },
  frecuenciaRespiratoria: { type: Number},
  fechaMuestra: { type: Date, required: true },
});

module.exports = mongoose.model("Mediciones", Medicion);
const mongoose = require("mongoose");

const Medicion = mongoose.Schema({
  id: { type: String, required: true},
  temperatura: { type: Number},
  FC: { type: Number },
  FR: { type: Number},
  fechaMuestra: { type: Date, required: true },
});

module.exports = mongoose.model("Mediciones", Medicion);
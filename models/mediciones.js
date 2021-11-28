const { ObjectId } = require("bson");
const mongoose = require("mongoose");

const Medicion = mongoose.Schema({
  idbovino: {type: mongoose.Schema.Types.ObjectId,
    ref: "bovinos"},
  temperatura: {type: Number},
  FC: {type: Number },
  FR: {type: Number},
  fecha_muestra: { type: String, required: true },
});

module.exports = mongoose.model("Mediciones", Medicion);
const mongoose = require("mongoose");

const Gestor = mongoose.Schema({
  IDGestor: { type: Number, required: true},
  Nombre: { type: String, required: true },
  cedula: { type: Number, required: true },
  correo: { type: String, required: true },
  celular: { type: Number, required: true},
  cargo: { type: String, required: true },
  IDFinca: { type: String, required: true },
});

module.exports = mongoose.model("Gestores", Gestor);
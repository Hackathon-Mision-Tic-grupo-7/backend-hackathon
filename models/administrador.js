const mongoose = require("mongoose");

const Administrador = mongoose.Schema({
  IDAdministrador: { type: Number, required: true},
  Nombre: { type: String, required: true },
  cedula: { type: Number, required: true },
  correo: { type: String, required: true },
  celular: { type: Number, required: true},
  IDFinca: { type: String, required: true },
});

module.exports = mongoose.model("Administradores", Administrador);
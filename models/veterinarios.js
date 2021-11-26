const mongoose = require("mongoose");

const Veterinario = mongoose.Schema({
  IDVeterinario: { type: Number, required: true},
  Nombre: { type: String, required: true },
  cedula: { type: Number, required: true },
  correo: { type: String, required: true },
  celular: { type: Number, required: true},
  clinica: { type: String, required: true },
  IDFinca: { type: String, required: true },
});

module.exports = mongoose.model("Veterinarios", Veterinario);
const mongoose = require("mongoose");

const Finca = mongoose.Schema({
  IDFinca: { type: Number, required: true},
  nombre: { type: String, required: true },
  ubicacion: { type: String, required: true },
});

module.exports = mongoose.model("Fincas", Finca);
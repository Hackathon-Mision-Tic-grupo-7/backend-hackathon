const mongoose = require("mongoose");

const Bovino = mongoose.Schema({
  edad: { type: Number, required: true},
  identificacion: { type: String, unique:true },
  fechaNacimiento: { type: Date, required: true },
});

module.exports = mongoose.model("Bovinos", Bovino);
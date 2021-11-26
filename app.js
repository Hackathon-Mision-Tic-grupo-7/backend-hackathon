var express = require("express");
var app = express();
var mongoose = require("mongoose");
require('dotenv').config();
const bovinosRoute = require("./routes/bovinos");
const adminRoute = require("./routes/administrador");
const fincasRoute = require("./routes/finca");
const gestoresRoute = require("./routes/gestor");
const medicionesRoute = require("./routes/mediciones");
const veterinariosRoute = require("./routes/veterinarios");
// const salesManagment = require("./routes/salesManagment");
const url= process.env.mongo_uri;
const cors = require("cors");

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/bovinos", bovinosRoute);
app.use("/api/administradores", adminRoute);
app.use("/api/fincas", fincasRoute);
app.use("/api/gestores",gestoresRoute);
app.use("/api/mediciones",medicionesRoute);
app.use("/api/veterinarios",veterinariosRoute);

app.use(express.static("./public"));
//Database

mongoose.connect(url).then((db) => console.log("DB is connected"));
module.exports = app;

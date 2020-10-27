const express = require("express");
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/personas", function (req, res) {
  let nombre = req.body.nombre;
  let apellidos = req.body.apellidos;
  let edad = req.body.edad;
  res.send({ nombre: nombre, apellidos: apellidos, edad: edad });
});

app.listen(3000);

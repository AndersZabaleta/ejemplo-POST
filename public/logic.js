function enviar() {
  let nombre = document.getElementById("nombre").value;
  let edad = document.getElementById("edad").value;
  let apellidos = document.getElementById("apellidos").value;
  let persona = {
    nombre: nombre,
    edad: edad,
    apellidos: apellidos,
  };
  fetch("/personas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(persona),
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (res) {
      let mensaje = `<h1>${res.nombre}</h1>`;
      document.getElementById("div1").innerHTML = mensaje;
    });
}

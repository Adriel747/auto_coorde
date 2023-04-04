import Matriz from "./ControlAuto.js";

var tablaDiv = document.getElementById("tabla-matriz");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let filas = Number.parseInt(f.value);
  let columnas = Number.parseInt(c.value);
  var miMatriz=Matriz(filas,columnas);
  function Matriz(filas, columnas) {
    var matriz = [];
    for (var i = 0; i < filas; i++) {
      matriz[i] = [];
      for (var j = 0; j < columnas; j++) {

        matriz[i][j] = "0"; 
      }
    }
    return matriz;
  }
  var tabla = document.createElement("table");
  for (var i = 0; i < miMatriz.length; i++) {
    var fila = tabla.insertRow();
    for (var j = 0; j < miMatriz[i].length; j++) {
      var celda = fila.insertCell();
      celda.appendChild(document.createTextNode(miMatriz[i][j]));
    }
  }
  tablaDiv.appendChild(tabla);
});
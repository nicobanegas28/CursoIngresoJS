/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() {
  var PrecioUno;
  var PrecioDos;
  var PrecioTres;
  var suma;

  num1 = parseInt(document.getElementById("PrecioUno").value);
  num2 = parseInt(document.getElementById("PrecioDos").value);
  num3 = parseInt(document.getElementById("PrecioTres").value);
  suma = num1 + num2 + num3;

  alert("la suma es " + suma);
}
function Promedio() {
  var PrecioUno;
  var PrecioDos;
  var PrecioTres;
  var Promedio;

  num1 = parseInt(document.getElementById("PrecioUno").value);
  num2 = parseInt(document.getElementById("PrecioDos").value);
  num3 = parseInt(document.getElementById("PrecioTres").value);
  Promedio = num1 + num2 + num3 / 3;

  alert("El promedio es " + Promedio);
}
function PrecioFinal() {
  var PrecioUno;
  var PrecioDos;
  var PrecioTres;
  var PrecioFinal;
  var Iva;

  num1 = parseInt(document.getElementById("PrecioUno").value);
  num2 = parseInt(document.getElementById("PrecioDos").value);
  num3 = parseInt(document.getElementById("PrecioTres").value);

  PrecioFinal = num1 + num2 + num3;

  alert("El precio final + IVA " + PrecioFinal);
}

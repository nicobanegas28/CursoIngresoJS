/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;    
var descuento;
var ImporteFinal;

Importe= parseInt(document.getElementById("importe").value);

descuento= sueldo*25/100;



ImporteFinal= descuento - sueldo;

document.getElementById("resultado").value=ImporteFinal;

}

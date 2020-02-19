function mostrar()
{

	var numero; 
	parseint.prompt("ingrese un número entre 0 y 9.");

	while (numero > 9 ||numero < 0 || isNan(numero)) {


		numero = parseInt(prompt("Error.ingrese un numero entre 0 y 9."));



	}
	document.getElementById("numero").value =numero;


}//FIN DE LA FUNCIÓN
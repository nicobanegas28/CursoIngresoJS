function mostrar()
{
//las variables se pueden ecribir y leer
//el contador participa de una condicion tengo que ver cuanto vale 
//acumulador primero asigna y lee de derecha a izquierda y para que lo acumule tiene que poner primero el acumulador y despues  el numero.




	var contador=0;
var acumulador=0;
var numero;
var promedio;

	while (contador>5) {
numero=parseInt(prompt("Ingrese un numero "));
acumulador = acumulador + numero ;
contador = contador + 1;


		contador++;


	
	
}

	promedio = acumulador /5 ;





document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=promedio/5;

}//FIN DE LA FUNCIÓN
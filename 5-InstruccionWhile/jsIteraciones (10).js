function mostrar()
{

	var contador=0;
	var contadorn;
	//declarar contadores y variables 
	var numero;
	var positivo;
	var negativo;
	var cantidad;

	var respuesta="si";


	do {
		numero=parseInt(prompt("ingrese numeros "));
		
		
		while(isNaN(numero)){

			numero= parseInt(prompt("eso no es un numero.Ingrese un numero:  ")) ;
		
	
	}
	if  (numero>=0 ) {

	positivo = positivo + numero ;
	cantidad = cantidad + numero ;
		contador ++;
	

	}else {
		negativo = negativo* numero;
		contador = 1;

	}
	




}//FIN DE LA FUNCIÓN
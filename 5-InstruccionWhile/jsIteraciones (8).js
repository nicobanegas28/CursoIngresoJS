function mostrar()
{
var flag=0;
	var contador;
	var positivo=0;
	var negativo=1;
	var seguir;
	var respuesta;
var numero;



	do {
		numero=parseInt(prompt("Ingrese  numeros "));

		while(isNaN(numero)){

			numero= parseInt(prompt("eso no es un numero.Ingrese un numero:  ")) ;


		}
		if  (numero>=0) {

			positivo = positivo + numero ;

		}else {
			negativo = negativo* numero;
			flag = 1;

		}

		respuesta= prompt("quiere continuar ingresando numeros");
	
		 
			
		
	}while (respuesta == "s");
		

		if (flag == 0) {
			negativo= 0;
		}






 document.getElementById('suma').value=positivo;
 document.getElementById('producto').value=negativo;



}
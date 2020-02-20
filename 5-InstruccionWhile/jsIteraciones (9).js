function mostrar()
{
	var flag=0;
	var contador=0;
	var numero;
	
	var maximo;
	var minimo;
	// declarar variables
	
	var respuesta='si';
	
	do {
		numero=parseInt(prompt("ingrese numeros "));

		while(isNaN(numero)){

			numero= parseInt(prompt("eso no es un numero.Ingrese un numero:  ")) ;


		}
if(flag == 0){
		maximo=numero ;
		minimo= numero;
		flag=2;
	}
		if  (numero>maximo) {

			maximo = numero ;

		}
		
		else if (numero<minimo){
		minimo = numero;
			
		}
	

		respuesta = prompt("quiere continuar ingresando numeros");
	
		 
			
		
	}while (respuesta == "s");
		


		

		document.getElementById("maximo").value =maximo;
        document.getElementById("minimo").value =minimo;


}//FIN DE LA FUNCIÓN
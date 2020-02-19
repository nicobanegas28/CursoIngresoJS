function mostrar()
{

	

	var contador=0;
	var acumulador=0;
	var numero;
	var seguir;
	
	
	do {
	numero=parseInt(prompt("Ingrese un numero "));
	acumulador = acumulador + numero ;
	 contador ++;
	 seguir = prompt("quiere que lo salude de nuevo");

		
	}while (seguir == "s")
	 
	
	
	
document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN
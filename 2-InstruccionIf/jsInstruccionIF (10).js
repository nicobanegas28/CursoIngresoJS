function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;
	var maximo =10;
	var minimo=1;

	nota=math.floor(Math.random() *((maximo + 1 ) - minimo ));
	
	if (nota>=9 )  {

		alert("Excelente. Nota: " + nota);
	}
	else if   (nota>=4)	{
		alert("Aprobo. Nota: "  + nota );
	}
else {
	alert("Vamos la proxima se puede. Nota: "+ nota);
}

}//FIN DE LA FUNCIÓN
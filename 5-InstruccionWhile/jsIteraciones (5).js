function mostrar()
{

var sexo;

sexo = prompt("ingrese f ó m .");

while ( sexo != "m" &&  sexo != "f" && sexo != "M" && sexo != "F")

{
   
sexo=(prompt("Error.ingrese una letra m ó f ." ));

}

document.getElementById("Sexo").value=sexo;

}//FIN DE LA FUNCIÓN
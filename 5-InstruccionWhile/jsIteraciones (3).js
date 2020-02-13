function mostrar()
{
//pido el dato
var clave ;

prompt("ingrese la clave.");
//me fijo si el dato es invalido
while (clave != "utn750") {
	
    alert( "clave incorrecta");
    //si estoy aca es porque el dato no es valido
    //informo y pido nuevamente
    
    clave=prompt("ingresar nuevamente la clave");

	

  }

//si llegue a este punto del programa es porque ingresaron la clave validad
  alert("la clave es correcta");

}//FIN DE LA FUNCIÓN

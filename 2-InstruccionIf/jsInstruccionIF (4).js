function mostrar()
{
//tomo la edad  

var edad;
 
edad= parseInt(document.getElementById("edad").value);

/*ej.1
if  ( edad >=13 && edad <=17 ) {

alert("Es adolescente") */


/* ej.2 si la edad no esta fuera del rango */

if (!(edad < 13 || edad  > 17)){

alert("Es adolescente");
}

}//FIN DE LA FUNCIÓN
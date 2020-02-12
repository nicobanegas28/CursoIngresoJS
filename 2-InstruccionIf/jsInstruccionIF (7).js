function mostrar()
{
//tomo la edad  
var edad;
var estado;

estado = document.getElementById("estadoCivil").value;
edad = parseInt(document.getElementById("edad").value);
    
if  ( edad < 18 && estado!="Soltero")  {

    alert ("Es muy pequeño para no ser soltero");


    }


}//FIN DE LA FUNCIÓN
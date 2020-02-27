function mostrar()
{
var numero;
var contadorpares=0;



    numero= parseInt(prompt("ingrese numero "))

    while(isNaN(numero)){
    
        numero=parseInt(prompt("eso no es un numero; por favor ingrese un numero"));
    }

    for (var i =1; i<= numero ; i++){

        
        if (i % 2== 0 ) {
            
            contadorpares++;
          
          document.write("pares"+ i +"</br>")

        }

    }
document.write("cantidad de pares"+ contadorpares + "</br>");
    



}//FIN DE LA FUNCIÓN
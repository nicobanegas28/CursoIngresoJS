function mostrar()
{
    var numero;
    var contadorpares=0;
    
    
    
        numero= parseInt(prompt("ingrese numero "))
    
        while(isNaN(numero)){
        
            numero=parseInt(prompt("eso no es un numero; por favor ingrese un numero"));
        }
    
        for (var i =1; i<= numero ; i++){
    
            
            if (numero % i == 0 ) {
                
                contadorpares++;
              
              document.write("divisibles por"+ i +"</br>")
    
            }
    
        }
    document.write("cantidad divisores"+ contadorpares + "</br>");



}//FIN DE LA FUNCIÓN
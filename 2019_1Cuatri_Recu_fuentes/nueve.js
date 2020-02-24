function mostrar() {
  var contador;
  var respuesta;
  var notaAlumno;
  var sexoAlumno;
  var edadAlumno;
  var nombreAlumno;
  var acumulador;
  var promedioNotas;
  var mejorNota;
  var peorNota;

  contador = 0;
  acumulador = 0;
  respuesta = "si";

  while (respuesta == "si") {
    nombreAlumno = prompt("ingrese el nombre del alumno");
  }

  edadAlumno = prompt("ingrese edad del alumno");
  edadAlumno = parseInt(edadAlumno);

  while (edadAlumno < 0 || edadAlumno > 100) {
    edadAlumno = prompt("error, reingrese " + contador + "edad");
    edadAlumno = parseInt(edadAlumno);
  }

  sexo = prompt("ingrese f ó m .");

  while (sexo != "m" && sexo != "f" && sexo != "M" && sexo != "F");

  {
    sexo = prompt("Error.ingrese una letra m ó f .");
  }

  notadelFinal = prompt("ingrese nota del final");
  notadelFinal = parseInt(notadelFinal);

  while (notadelFinal == promedioNotas);
  {
    nota = prompt("reingrese una nota del 1 al 10");
  }

  // while (edad <= 17) {

  // }
}

//   while (notaAlumno) console.log("contador" + contador);
//   console.log("acumulador" + acumulador);

/* Realizar el algoritmo que permita ingresar el nombre de un estudiante, la edad (validar) , el sexo (validar) y la nota del final (validar)   
        <br>	hasta que el usuario quiera e informar al terminar el ingreso por document.write:
				<br>a)
				La cantidad de varones aprobados
				<br>b)
				El promedio de notas de los menores de edad
				<br>c)
				El promedio de notas de los adolescentes.
				<br>d)
				El promedio de notas de los mayores		
				<br>f)
				El promedio de notas  por sexo masculino y femenino
    
    
*/

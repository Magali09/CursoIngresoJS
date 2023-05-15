/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
function mostrar()
{
	
/*El alumno deberá ingresar:
Nombre del alumno
Carrera (Programación, Psicología, Diseño gráfico)
Estado de la carrera: en curso-abandono-finalizado
genero (femenino-masculino-nobinario)
Nota (entre 1 y 10)
Se desconoce la cantidad de alumnos que se ingresaran.
Informar:
A. Cantidad total de alumnos de cada carrera.
B. Cantidad total de mujeres que cursan la carrera de programación
C. Cantidad de alumnos no binarios.
D. Promedio de notas de los alumnos finalizantes.
E. Nombre  del mejor alumno no binario en la carrera de psicología.
F. ¿Cuál es la carrera que tiene más alumnos?*/
//CHEQUEADO FUNCIONANDO

let nombreAlumno;
let carrera;
let estadoCarrera;
let genero;
let notas;
let contadorAlumnosPorCarrera;
let contadorMujeres;
let contadorNoBinarios;
let acumuladorFinalizado;
let contadorFinalizado;
let promedioFinalizados;
let nombreMejorAlumno;
let banderaMejoralumno;
let notaMejorAlumno;
let carreraMasAlumnos;
let contadorProgramacion;
let contadorDiseno;
let contadorPsicologia;
let mensaje;


respuesta = true;
contadorAlumnosPorCarrera = 0;
contadorMujeres = 0;
contadorNoBinarios = 0;
acumuladorFinalizado = 0;
contadorFinalizado = 0;
banderaMejoralumno = true;
contadorProgramacion = 0;
contadorDiseno = 0;
contadorPsicologia = 0;

while (respuesta == true) {


  nombreAlumno = prompt("Ingrese nombre");

  carrera = prompt("Ingrese carrera entre Programación, Psicología, Diseño gráfico");
  while (carrera != "programacion" && carrera != "psicologia" && carrera != "diseño grafico") {
    carrera = prompt("Error. Ingrese carrera entre Programación, Psicología, Diseño gráfico");
  }

  estadoCarrera = prompt("Ingrese Estado de la carrera: en curso-abandono-finalizado");
  while (estadoCarrera != "cursando" && estadoCarrera != "abandono" && estadoCarrera != "finalizado") {
    estadoCarrera = prompt("Error. Ingrese Estado de la carrera: en curso-abandono-finalizado");
  }

  genero = prompt("Ingrese femenino-masculino-nobinario");
  while (genero != "femenino" && genero != "masculino" && genero != "nobinario") {
    genero = prompt("Error. Ingrese femenino-masculino-nobinario");
  }

  notas = parseInt(prompt("Ingrese entre 1 y 10 "));
  while (isNaN(notas) || notas < 1 || notas > 10) {
    notas = parseInt(prompt("Errror. Ingrese entre 1 y 10"));
  }


  //a)A. Cantidad total de alumnos de cada carrera.
  contadorAlumnosPorCarrera = contadorAlumnosPorCarrera + 1;

  switch (carrera) {
    case "programacion"://B. Cantidad total de mujeres que cursan la carrera de programación
      contadorProgramacion = contadorProgramacion + 1;
      if (genero == "femenino") {
        contadorMujeres = contadorMujeres + 1;
      }
      break;
    case "diseño grafico":
      contadorDiseno = contadorDiseno + 1;
      break;
    case "psicologia"://E. Nombre  del mejor alumno no binario en la carrera de psicología.
      contadorPsicologia = contadorPsicologia + 1;
      if (genero == "nobinario" && (banderaMejoralumno == true || notaMejorAlumno < notas)) {
        notaMejorAlumno = notas;
        banderaMejoralumno = false;
        nombreMejorAlumno = nombreAlumno;


      }
      break;
  }

  //C. Cantidad de alumnos no binarios.
  if (genero == "nobinarios") {
    contadorNoBinarios = contadorNoBinarios + 1;
  }
  //D. Promedio de notas de los alumnos finalizantes.
  if (estadoCarrera == "finalizado") {
    acumuladorFinalizado = acumuladorFinalizado + notas;
    contadorFinalizado = contadorFinalizado + 1;
  }

  respuesta = confirm("quiere ingresar otro dato");
}
//fin while


promedioFinalizados = acumuladorFinalizado / contadorFinalizado;

//F. ¿Cuál es la carrera que tiene más alumnos?*
if (contadorProgramacion > contadorPsicologia && contadorProgramacion > contadorDiseno) {

  carreraMasAlumnos = "prgramacion";

} else if (contadorPsicologia > contadorDiseno) {

  carreraMasAlumnos = "psicologia";

} else {
  carreraMasAlumnos = "diseño grafico";
}

if (banderaMejoralumno == false && genero == "nobinario") {

  mensaje = nombreMejorAlumno

} else {

  mensaje = "No se ingreso ningun alumno no binario en la carrera de psicologia"
}

document.write("Cantidad total de alumnos de cada carrera.: " + contadorAlumnosPorCarrera + "<br>");
document.write("Cantidad total de mujeres que cursan la carrera de programación " + contadorMujeres + "<br>");
document.write(" Cantidad de alumnos no binarios: " + contadorNoBinarios + "<br>");
document.write("Promedio de notas de los alumnos finalizantes.: " + promedioFinalizados + "<br>");
document.write("Nombre  del mejor alumno no binario en la carrera de psicología.: " + mensaje + "<br>");
document.write(" ¿Cuál es la carrera que tiene más alumnos?: " + carreraMasAlumnos + "<br>");






}



/*Realizar el algoritmo que permita ingresar 5 paises:
del continente (validar entre america , asia , europa y africa)
el nombre del país,
cantidad de habitantes en millones entre 1 y 2000 (validar)
la temperaruta promedio que se registra en su territorio(entre -50 y 50)
Se debe Informar al usuario lo siguiente:
a)La cantidad de temperaturas pares.
b)El nombre del pais con menos habitantes
c)la cantidad de paises de america que tienen menos de 0 grados .
d)el promedio de habitantes entre los paises ingresados .
e) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
*/

function mostrar(){
	let continente;
	let paisIngresado;
	let cantidadDeHabitantes;
	let temperaturaIngresada;

	let contadorTemperaturasPares;
	let banderaMenosHabitantes;
	let nombrePaisMenosHabitantes;
	let cantidadMenosHabitantes;
	let cantidadDePaisesAmericanosFrios;
	let promedioDeHabitantes;
	let acumDeHabitantesTotales;
	let banderaTemperaturaMinima;
	let nombrePaisMinTemperatura;
	let tempMinima;

	contadorTemperaturasPares = 0;
	banderaMenosHabitantes = true;
	cantidadDePaisesAmericanosFrios = 0;
	acumDeHabitantesTotales = 0;
	banderaTemperaturaMinima = true;

	for(let i = 0; i < 5; i++){

		continente = prompt("Ingrese continente entre america , asia , europa y africa");
		while(continente != "america" && continente != "asia" && continente != "europa" && continente != "africa"){
			continente = prompt("Error. Ingrese continente entre america , asia , europa y africa");
		}

		paisIngresado = prompt("Ingrese pais");

		cantidadDeHabitantes = parseInt(prompt("Ingrese cantidad de habitantes en millones entre 1 y 2000 "));
		while(isNaN(cantidadDeHabitantes) || cantidadDeHabitantes < 1 || cantidadDeHabitantes > 2000){
			cantidadDeHabitantes = parseInt(prompt("Errror. Ingrese cantidad de habitantes en millones entre 1 y 2000 "));
		}

		temperaturaIngresada = parseFloat(prompt("Ingrese la temperaruta promedio que se registra en su territorio(entre -50 y 50)"));
		while(isNaN(temperaturaIngresada) || temperaturaIngresada < -50 || temperaturaIngresada > 50){
			temperaturaIngresada = parseFloat(prompt("Errror. Ingrese la temperaruta promedio que se registra en su territorio(entre -50 y 50)"));
		}
		//a)La cantidad de temperaturas pares.
		if(temperaturaIngresada % 2 == 0){
			contadorTemperaturasPares = contadorTemperaturasPares + 1;
		}
		//b)El nombre del pais con menos habitantes  Ingreso actual       menor Ingreso
		if(banderaMenosHabitantes == true || cantidadMenosHabitantes > cantidadDeHabitantes){
			cantidadMenosHabitantes = cantidadDeHabitantes;
			nombrePaisMenosHabitantes = paisIngresado;
			banderaMenosHabitantes = false;
		}

		//c)la cantidad de paises de america que tienen menos de 0 grados .
		switch(continente){
			case "america":
				if(temperaturaIngresada < 0){
					cantidadDePaisesAmericanosFrios = cantidadDePaisesAmericanosFrios + 1;
				}
			break;
		}
		//e) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
		if(banderaTemperaturaMinima == true || tempMinima > temperaturaIngresada){
			tempMinima = temperaturaIngresada;
			nombrePaisMinTemperatura = paisIngresado;
			banderaTemperaturaMinima = false;
		}

		acumDeHabitantesTotales = acumDeHabitantesTotales + cantidadDeHabitantes;
	}

	//d)el promedio de habitantes entre los paises ingresados .
	promedioDeHabitantes = acumDeHabitantesTotales / 5;

 

	document.write("La cantidad de temperaturas pares es: " + contadorTemperaturasPares + "<br>");
	document.write("El nombre del pais con menos habitantes: " + nombrePaisMenosHabitantes + "<br>");
	document.write("la cantidad de paises de america que tienen menos de 0 grados: " + cantidadDePaisesAmericanosFrios + "<br>");
	document.write("el promedio de habitantes entre los paises ingresados: " + promedioDeHabitantes + "<br>");
	document.write("la temperatura mínima ingresada es: " + tempMinima + " y nombre del pais que registro esa temperatura: " + nombrePaisMinTemperatura + "<br>");
	
}

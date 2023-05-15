/*Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y 
estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros. */

function mostrar() {
	let nombre;
	let edad;
	let edadTercera;
	let sexo;
	let contadorMayorViudos;
	let estadoCivil;
	let temperaturaCorporal;
	let respuesta;
	let banderaMasTemperatura;
	let temperaturaMasAlata = 0;
	let nombrePersonaMasTemperatura;
	let sumaViudosMayores;
	let sumaSolteros;
	let acumuladorTemperaturaTercera;
	let acumuladorEdadSolteros;
	let contadorSolteros;
	let contadorSolterosViudos = 0;
	let promedioSolterosHombres;
	let cantidadPersonasMayores;






	respuesta = true;
	banderaMasTemperatura = true;
	sumaViudosMayores = 0;
	acumuladorEdadSoltero = 0;
	sumaSolteros = 0;
	contadorSolteros = 0;
	contadorMayorViudos = 0;
	contadorSolterosViudos = 0;
	cantidadPersonasMayores = 0;
	acumuladorEdadSolteros = 0;
	acumuladorTemperaturaTercera = 0;





	while (respuesta == true) {
		nombre = prompt("Ingrese nombre");

		edad = parseInt(prompt("Ingrese edad"));
		while (edad < 0 || edad > 100) {
			edad = prompt("Error: ingrese edad, valida (entre 0 o 100) ");
		}


		sexo = prompt("ingrese sexo");
		while (sexo != "m" && sexo != "f") {
			sexo = prompt("Error: ingrese sexo, f o m ");
		}

		estadoCivil = prompt("ingrese el estado civil");
		while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo") {
			estadoCivil = prompt("Error: ingrese el estado civil, soltero o casado o viudo");
		}

		temperaturaCorporal = parseFloat(prompt("ingrese temperatura corporal"));
		while (temperaturaCorporal < 32 || temperaturaCorporal > 43) {
			temperaturaCorporal = parseFloat(prompt("Error: ingrese temperaturaCorporal, entre 32 "));
		}

		//a) El nombre de la persona con mas temperatura.
		if (banderaMasTemperatura == true || temperaturaMasAlata < temperaturaCorporal) {

			nombrePersonaMasTemperatura = nombre;
			temperaturaMasAlata = temperaturaCorporal;
			banderaMasTemperatura = false;
		}

		switch (estadoCivil) {
			case "soltero":
				if (sexo == "m") {
					acumuladorEdadSolteros = acumuladorEdadSolteros + edad;
					//c) La cantidad de hombres que hay solteros o viudos.
					contadorSolterosViudos = contadorSolterosViudos + 1;
					contadorSolteros = contadorSolteros + 1;
				}

				break;


			case "viudo":

				if (sexo == "m") {
					//c) La cantidad de hombres que hay solteros o viudos.
					contadorSolterosViudos = contadorSolterosViudos + 1;
				}
				if (edad > 17) {
					contadorMayorViudos = contadorMayorViudos + 1;
				}

				break;
		}





		//d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
		if (temperaturaCorporal > 38 && edad > 60) {

			edadTercera = edad;
			acumuladorTemperaturaTercera = acumuladorTemperaturaTercera + temperaturaCorporal;
			cantidadPersonasMayores = cantidadPersonasMayores + 1;

		}

		respuesta = confirm("Desea cargar otro dato");
	}

	promedioSolterosHombres = acumuladorEdadSolteros / contadorSolteros;
	// 	a) El nombre de la persona con mas temperatura.
	// b) Cuantos mayores de edad estan viudos
	// c) La cantidad de hombres que hay solteros o viudos.
	// d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
	// e) El promedio de edad entre los hombres solteros.
	console.log("El nombre de la persoma con mas temperatura es : " + nombrePersonaMasTemperatura);
	console.log("La cantidad de mayores edad viudos son : " + contadorMayorViudos);
	console.log("La cantidad de hombres sonteros o viudos son : " + contadorSolterosViudos);
	console.log("Personas mayores de 60 con temperatura mayor a 38 son : " + cantidadPersonasMayores);
	console.log("El promedio de hombres solteros es : " + promedioSolterosHombres);












}

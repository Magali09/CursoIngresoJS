/*Bienvenidos.
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad*, sexo("f" o "m")* 
y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.*/
//Cristofori Magalí Chekeado OK
function mostrar() {
	let nombre;
	let edad;
	let nacionalidad;
	let sexo;
	let estadoCivil;
	let nacionalidadConMasTemperatura;
	let contadorSolteros = 0;
	let nacionalidadMasTemperatura;
	let nacionalidadTemperatura;
	let banderaNacionalidadConMasTemperatura = true;
	let contadorMujeresSolterasViudas = 0;
	let contadorTerceraEdadTemperatura = 0;
	let acumuladorMujerCasada = 0;
	let contadorMujeresCasadas = 0;
	let promedioMujeres;
	let respuesta = true;
	let contadorMujeresSolteras = 0;


	banderaNacionalidadConMasTemperatura = true;






	while (respuesta == true) {
		nombre = prompt("Ingrese nombre");
		nacionalidad = prompt("Ingrese su nacionalidad");
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

		//a) la Nacionalidad de la persona con mas temperatura.
		if (banderaNacionalidadConMasTemperatura == true || nacionalidadMasTemperatura < temperaturaCorporal) {

			nacionalidadMasTemperatura = temperaturaCorporal;
			nacionalidadTemperatura = nacionalidad;
			banderaNacionalidadConMasTemperatura = false;

		}
		switch (estadoCivil) {
			case "soltero":
				if (edad > 17) {
					contadorSolteros = contadorSolteros + 1;
				}
				if (sexo == "f") {//c) La cantidad de Mujeres que hay solteras o viudas.
					contadorMujeresSolteras = contadorMujeresSolteras + 1
				}

				break;

			case "viudo"://c) La cantidad de Mujeres que hay solteras o viudas.
				if (sexo == "m") {
					contadorMujeresSolterasViudas = contadorMujeresSolterasViudas + 1
				}
				break;
			case "casado":
				if (sexo == "f") {
					acumuladorMujerCasada = acumuladorMujerCasada + edad;
					contadorMujeresCasadas = contadorMujeresCasadas + 1;
				}
				break;
		}
		if (edad < 60 && temperaturaCorporal < 38) {
			contadorTerceraEdadTemperatura = contadorTerceraEdadTemperatura + 1;
		}
		
	
		respuesta = confirm("Desea ingresar otro dato")
	}//Fin WHILE

	//e) El promedio de edad entre las mujeres casadas.
	promedioMujeres = acumuladorMujerCasada / contadorMujeresCasadas;

	/*a) la Nacionalidad de la persona con mas temperatura.
	b) Cuantos mayores de edad( más de 17) estan solteros
	c) La cantidad de Mujeres que hay solteras o viudas.
	d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
	e) El promedio de edad entre las mujeres casadas.*/
	console.log("La nacionalidad de la persona con mas temperatura es: " + nacionalidadTemperatura);
	console.log("La cantidad de mayores de 17 son : " + contadorSolteros);
	console.log("La cantidad de mujeres  viudas son : " + contadorMujeresSolterasViudas + " y solteras " + contadorMujeresSolteras);
	console.log("Personas mayores de 60 con temperatura mayor a 38 son : " + contadorTerceraEdadTemperatura);
	console.log("El promedio de mujeres casadas es : " + promedioMujeres);

}

	

	
	





	
	




  
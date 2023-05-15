
function mostrar()
{
	
	
	
 }//FIN FUNCION
/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'
Magali Cristofori div B TM*/
// let nombre;
// 	let mensaje;

// 	nombre = "Escriba su nombre"
// 	mensaje = prompt(nombre);
// 	//alert es de salida
// 	// alert(mensaje);



	/*
2. Una librería que se especializa en venta de libros importados desea 
calcular ciertas métricas en base a las ventas de sus productos (No se sabe cuántos).
Se ingresa de cada venta:
Título del libro
Género: (ciencia ficción – Drama – Terror)
Material del libro (rústica – tapa dura)
Importe (No pueden ser números negativos ni mayor a los 30000)
Se pide:                          	
El más barato de los libros de drama con su importe.
Qué porcentaje de cada género se vendió.
Informar el título del primer libro de drama que se vendió.

*/
// let titulo;
// 	let genero;
// 	let materialLibro;
// 	let precio;
// 	let respuesta = true;
// 	let banderaLibroMasBarato = true;
// 	let porcentajeGeneroDrama;
// 	let porcentajeGeneroTerror;
// 	let porcentajeCienciaFiccion;
// 	let contadorDrama = 0;
// 	let contadorTerror = 0;
// 	let contadorCienciaFiccion = 0;
// 	let contadorGeneral = 0;
// 	let precioBarato;
// 	let nombreBarato;
// 	let primerLibreDrama;


// 	while (respuesta == true){
		
// 		titulo = prompt("Ingrese titulo");
//         while (!isNaN(titulo)) {
//             titulo = prompt("Error. Ingrese titulo del libro");
//         }

//         genero = prompt("Ingrese genero ciencia ficción / Drama / Terror");
//         while (!isNaN(genero) && genero != "ciencia ficcion" && genero != "drama" && genero != "terror") {
//             genero = prompt("Error. Ingrese genero ciencia ficción / Drama / Terror");
//         }

// 		materialLibro = prompt("Ingrese material Libro rústica / tapa dura");
//         while (!isNaN(materialLibro) && materialLibro != "rustica" && materialLibro != "tapa dura") {
//             materialLibro = prompt("Error. Ingrese material Libro rústica / tapa dura");
//         }

//         precio = parseInt(prompt("Ingrese precio "));
//         while (isNaN(precio) || precio < 1 || precio > 30000) {
//             precio = parseInt(prompt("Error. Ingrese  precio "));
//         }

// 		switch (genero) {
// 			case "drama":
// 				if (banderaLibroMasBarato == true || precio < precioBarato) {
// 					precioBarato = precio;
// 					nombreBarato = titulo;
// 					banderaLibroMasBarato = false;
// 				}
// 				if (contadorDrama == 0) {
// 					primerLibreDrama = titulo;
// 				}
// 				contadorDrama = contadorDrama + 1;
				
// 				break;
// 			case"terror":
// 				contadorTerror = contadorTerror + 1;
// 				break;
// 			default:
// 				contadorCienciaFiccion = contadorCienciaFiccion + 1;
// 				break;
// 		}

// 	contadorGeneral = contadorGeneral + 1;


// 		respuesta = confirm("Desea ingresar otro libro");
// 	}
// 	if (contadorGeneral != 0) {
// 		porcentajeGeneroDrama = contadorDrama * 100 /contadorGeneral;
// 		porcentajeGeneroTerror = contadorTerror * 100 / contadorGeneral;
// 		porcentajeCienciaFiccion = contadorCienciaFiccion * 100 / contadorGeneral;
// 	}
// 	console.log("El más barato de los libros de drama con su importe." + precioBarato);
// 	console.log("Qué porcentaje de cada género se vendió. DRAMA" + porcentajeGeneroDrama);
// 	console.log("Qué porcentaje de cada género se vendió. TERROR" +porcentajeGeneroTerror);
// 	console.log("Qué porcentaje de cada género se vendió. CIENCIA FICCION"   + porcentajeCienciaFiccion);
// 	console.log("Informar el título del primer libro de drama que se vendió." + primerLibreDrama);








/*EJERCICIO 1
Para una veterinaria se necesita un programa que permita ingresar datos de perros 
con su precio de vacunación a pagar hasta que el cliente quiera. 
Por cada perro, se ingresa:
* raza: (validar "sharpei", "galgo", "pastor").
* nombre,
* edad (entre 1 y 25),
* peso (mas de 0),
* precio de consulta (desde 500 hasta 1500).
Se pide informar por alert:
a)El mas pesados de los galgos.
b)El importe total a pagar, y  con descuento (solo si corresponde)
	Si se vacunan más de 2 perros, se obtiene un 5% de descuento sobre el total a pagar.
	Si se vacunan más de 4 perros, se obtiene un 10% de descuento sobre el total a pagar.
c)promedio de peso entre cada raza de perros ingresada
d)Nombre, raza y edad del perro más viejo ingresado
*/


// 	let raza;
// 	let nombre;
// 	let edad;
// 	let peso;
// 	let precio;
// 	let respuesta= true;
// 	let banderaMaspesado = true;
// 	let masPesado;
// 	let contadorGalgo =0;
// 	let acumuladorGalgo = 0;
// 	let contadoPastor = 0;
// 	let acumuladorPastor = 0;
// 	let contadorSharpier = 0;
// 	let acumuladorSharpier = 0;
// 	let promedioGalgo;
// 	let promedioPastor;
// 	let promedioSharpier;
// 	let contadorGeneral = 0;
// 	let totalBruto;
// 	let vacuna;
// 	let descuento;
// 	let totalVacunados;
// 	let totalPagarDescuento;
// 	let contadorVacuna = 0;
// 	let edadMasViejo;
// 	let nombreMasViejo;
// 	let razaMasViejo;

	

// 		while(respuesta == true){

// 			nombre = prompt("Ingrese nombre");
// 			while (!isNaN(nombre)) {
// 				nombre = prompt("Error. Ingrese nombre del perro");
// 			}

// 			raza = prompt("Ingrese raza sharpei o galgo o pastor");
// 			while (!isNaN(raza) && raza != "razasharpei" && raza != "galgo" && raza != "pastor") {
// 				raza = prompt("Error. Ingrese razasharpei o galgo o pastor");
// 			}

// 			vacuna = prompt("Ingrese vacuna si / no");
// 			while (!isNaN(vacuna) && vacuna != "si" && vacuna != "no") {
// 				vacuna = prompt("Error. Ingrese  vacuna si / no");
// 			}

// 			edad = parseInt(prompt("Ingrese edad "));
// 			while (isNaN(edad) || edad < 1 || edad > 25) {
// 				edad = parseInt(prompt("Error. Ingrese  edad  1 a 25 años"));
// 			}

// 			peso = parseFloat(prompt("Ingrese peso "));
// 			while (isNaN(peso) || peso < 0 || peso > 100) {
// 				peso = parseFloat(prompt("Error. Ingrese  peso "));
// 			}

// 			precio = parseFloat(prompt("Ingrese precio "));
// 			while (isNaN(precio) || precio < 500 || precio > 1500) {
// 				precio = parseFloat(prompt("Error. Ingrese  precio "));
// 			}

// 			// Se pide informar por alert:
			
// 			// b)El importe total a pagar, y  con descuento (solo si corresponde)
// 			// 	Si se vacunan más de 2 perros, se obtiene un 5% de descuento sobre el total a pagar.
// 			// 	Si se vacunan más de 4 perros, se obtiene un 10% de descuento sobre el total a pagar.
// 			// c)promedio de peso entre cada raza de perros ingresada
// 			// d)Nombre, raza y edad del perro más viejo ingresado

// 			switch (raza) {

// 				case "galgo":// a)El mas pesados de los galgos.
// 					if (banderaMaspesado == true || peso > masPesado) {
// 						masPesado = peso;
// 						banderaMaspesado = false
// 					}
// 					acumuladorGalgo = acumuladorGalgo + peso;
// 					contadorGalgo = contadorGalgo + 1;
// 					break;
// 				case "pastor":
// 						acumuladorPastor = acumuladorPastor + peso;
// 						contadoPastor = contadoPastor + 1;
// 					break;
// 				case "razasharpei":
// 						acumuladorSharpier = acumuladorSharpier + peso;
// 						contadorSharpier = contadorSharpier + 1;
// 					break;
// 			}
				
// 			if (contadorGeneral == 0 || edad > edadMasViejo) {
// 				edadMasViejo = edad;
// 				nombreMasViejo = nombre;
// 				razaMasViejo = raza;
// 			}
// 			contadorGeneral = contadorGeneral + 1;
// 			contadorVacuna = contadorVacuna + 1;

// 			respuesta = confirm("Desea ingresar otro perro");

// 	}//fin while

// 	totalBruto = contadorGeneral * precio;
// 	if (vacuna == "si" || vacuna  >= 2) {

// 		descuento = 0.05;
// 		totalPagarDescuento = totalBruto - (totalBruto * descuento);
// 		console.log("El total a pagar con 5% de descuento " + totalPagarDescuento);
// 	}else if(vacuna >= 4){
// 		descuento = 0.1;
// 		totalPagarDescuento = totalBruto - (totalBruto * descuento);
// 		console.log("El total a pagar con 10% de descuento " + totalPagarDescuento);
// 	}

// 	// c)promedio de peso entre cada raza de perros ingresada
// 	if (contadoPastor != 0) {

// 		promedioGalgo = acumuladorGalgo / contadorGalgo;
// 		console.log("promedio de peso entre cada raza de perros ingresada " + promedioGalgo);
// 	}else{
// 		console.log("no se ingreso ningun galgo"); 
// 	}
// 	if (contadoPastor != 0) {

// 		promedioPastor = acumuladorPastor / contadoPastor;
// 		console.log("promedio de peso entre cada raza de perros ingresada " + promedioPastor );
// 	}else{
// 		console.log( "no se ingreso ningun pastor");
// 	}
// 	if(contadorSharpier != 0){
// 		console.log("promedio de peso entre cada raza de perros ingresada " + promedioSharpier);
// 		promedioSharpier = acumuladorPastor / contadoPastor;
// 	}else{
// 		console.log("no se ingreso ningun sharpier"); 
// 	}
// 	console.log(" mas pesado galgo " + masPesado);
// 	console.log("El nombre mas viejo " + nombreMasViejo + "la raza es " + razaMasViejo + "y la edad es " + edadMasViejo)







/*
Ejercicio 2
El dueño de una tienda de revistas desea un sistema para el control de stock de su negocio.
Para ello se debe ingresar hasta que el usuario desee:
1.	Tipo de revista (Ocio, Científica, Informativas), validar.
2.	Genero (Deporte, Tecnología, Moda, Hogar), validar.
3.	Nombre de la revista.
4.	Año de lanzamiento (entre 2010 y 2021).
Se pide informar por document.write:
A.	El nombre y tipo de revista con género “Tecnología” mas antiguo en el sistema.
B.	Cuantas revistas de género “Moda” y que son de “Ocio” poseen fecha de lanzamiento previo al 2015.
C.	El promedio de año de lanzamiento para las revistas de tipo Cientifica.
*/

//                FUNCIONA!!!!






// let tipoRevista;
// 	let genero;
// 	let nombre;
// 	let ano;
// 	let respuesta = true;
// 	let banderaMasvieja = true;
// 	let nombreMasVieja;
// 	let tipoMasVieja;
// 	let masVieja;
// 	let contadorOcio = 0;
// 	let acumuladorCientifica = 0;
// 	let contadorCientifica = 0;
// 	let promedio;



// 	while (respuesta == true) {

// 		nombre = prompt("ingrese nombre")
// 		tipoRevista = prompt("Ingrese situacion Laboral entre Ocio, Científica, Informativas'");
// 		while (isNaN(tipoRevista) && tipoRevista != "ocio" && tipoRevista != "cientifica" && tipoRevista != "informativas") {
// 			tipoRevista = prompt("Error. Ingrese situacion Laboral entre  Ocio, Científica, Informativas");
// 		}
// 		genero = prompt("Ingrese genero Deporte, Tecnología, Moda, Hogar");
// 		while (isNaN(genero) && genero != "deporte" && genero != "tecnologia" && genero != "moda" && genero != "hogar") {
// 			genero = prompt("Error. Ingrese genero Deporte, Tecnología, Moda, Hogar");
// 		}
// 		ano = parseInt(prompt("Ingrese entre 2010 y 2021"));
// 		while (isNaN(ano) || ano < 2010 || ano > 2021) {
// 			ano = parseInt(prompt("Error. Ingrese entre 2010 y 2021 "));
// 		}

// 		switch (genero) {
// 			case "tecnologia":// A.	El nombre y tipo de revista con género “Tecnología” mas antiguo en el sistema.
// 				if (banderaMasvieja == true || ano > masVieja) {
// 					masVieja = ano;
// 					nombreMasVieja = nombre;
// 					tipoMasVieja = tipoRevista;
// 					banderaMasvieja = false;
// 				}
// 				break;
// 			case "moda":
// 				if (tipoRevista == "ocio" && ano < 2015) {
// 					contadorOcio = contadorOcio + 1;
// 				}

// 				break;
// 		}
// 		if (tipoRevista == "cientifica") {
// 			acumuladorCientifica = acumuladorCientifica + ano;
// 			contadorCientifica = contadorCientifica + 1;
// 		}


// 		respuesta = confirm("Desea ingresar otro dato")

// 	}
// 	// A.	El nombre y tipo de revista con género “Tecnología” mas antiguo en el sistema.
// 	// B.	Cuantas revistas de género “Moda” y que son de “Ocio” poseen fecha de lanzamiento previo al 2015.
// 	// C.	El promedio de año de lanzamiento para las revistas de tipo Cientifica.
// 	if (banderaMasvieja == false) {
// 		console.log("El nombre y tipo de revista con género “Tecnología” mas antiguo en el sistema." + nombreMasVieja + tipoMasVieja);
// 	} else {
// 		console.log(" no Se enconto datos ");
// 	}

// 	if (contadorOcio != 0) {
// 		console.log("Cuantas revistas de género “Moda” y que son de “Ocio” poseen fecha de lanzamiento previo al 2015." + contadorOcio);
// 	} else {
// 		console.log(" no se encontraron revistas previas 2015");
// 	}
// 	if (contadorCientifica != 0) {
// 		promedio = acumuladorCientifica / contadorCientifica;
// 		console.log("El promedio de año de lanzamiento para las revistas de tipo Cientifica." + promedio);
// 	} else {
// 		console.log("No se encontro un promedio");
// 	}
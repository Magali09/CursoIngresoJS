/*Recuperatorio de Parcial 2020: Realizar el algoritmo que permita ingresar los datos de una
compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas(0-300),
Precio por bolsa (más de cero y menor a 10000 ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 15 bolsas en total tenes 10% de descuento sobre el total a pagar.
Si compro más de 45 bolsas en total tenes 30% de descuento sobre el total a pagar.
a)El importe total a pagar , bruto sin descuento y...
b)el importe total a pagar con descuento(solo si corresponde)
d)Informar la bolsa mas cara de Cal y la mas barata de Cemento.
e)Cuantas bolsas de arena se compraron en total, y el promedio por compra.
Cristofori Magalí*/
function mostrar()
{
//   let tipo;
//   let cantidadBolsas;
//   let precioBolsas;
//   let descuento;
//   let totalPagarConDescuento;
//   let precioBruto;
//   let precioTotalBruto = 0;
//   let banderaCalMasCara = true;
//   let banderaCementoMasBarata = true;
//   let calMasCara;
//   let cementoMasBarata;
//   let acumuladorArena = 0;
//   let contadorArena = 0;
//   let promedioArena;
//   let respuesta = true;
//   let acumuladorBolsas = 0;



//   while (respuesta == true) {
//     tipo = prompt("ingrese arena o cal o cemento");
//     while (tipo != "arena" && tipo != "cal" && tipo != "cemento") {
//       tipo = prompt("Error: ingrese el tipo, arena o cal o cemento");
//     }
//     cantidadBolsas = parseInt(prompt("Ingrese cantidadBolsas"));
//     while (cantidadBolsas < 0 || cantidadBolsas > 300) {
//       cantidadBolsas = prompt("Error: ingrese cantidad Bolsas, valida (entre 0 o 300) ");
//     }

//     precioBolsas = parseFloat(prompt("ingrese precio por bolsa"));
//     while (precioBolsas < 0 || precioBolsas > 10000) {
//       precioBolsas = parseFloat(prompt("Error: ingrese precio por bolsa entre 0 o 10000 "));
//     }

//     precioBruto = cantidadBolsas * precioBolsas;
//     precioTotalBruto = precioTotalBruto + precioBruto;
//     //d)Informar la bolsa mas cara de Cal y la mas barata de Cemento.
//     switch (tipo) {
//       case "arena":
//         acumuladorArena = acumuladorArena + precioBolsas;
//         contadorArena = contadorArena + 1;
//         break;

//       case "cal":
//         if (banderaCalMasCara == true || calMasCara < precioBolsas) {
//           calMasCara = precioBolsas
//           banderaCalMasCara = false
//         }
//         break;
//       case "cemento":
//         if (banderaCementoMasBarata == true || cementoMasBarata > precioBolsas) {
//           cementoMasBarata = precioBolsas
//           banderaCementoMasBarata = false
//         }
//         break;
//     }

//     acumuladorBolsas = acumuladorBolsas + cantidadBolsas;

//     respuesta = confirm("Desea ingresar otro dato")
//   }//FIN WHILE

//   /*al terminar la compra el cliente accede a un descuento segun las bolsas en total
//      Si compro más de 15 bolsas en total tenes 10% de descuento sobre el total a pagar.
//     Si compro más de 45 bolsas en total tenes 30% de descuento sobre el total a pagar. */
//   if (acumuladorBolsas > 45) {
//     descuento = 30;
//   }else if (acumuladorBolsas > 15) {
//     descuento = 10;
//   }else{
//     descuento = 0;
//   }
  
//   descuento = precioBolsas * descuento / 100;
//   totalPagarConDescuento = (precioBolsas * acumuladorBolsas) - descuento;

//   promedioArena = acumuladorArena / contadorArena;
// //   a)El importe total a pagar , bruto sin descuento y...
// // b)el importe total a pagar con descuento(solo si corresponde)
// // d)Informar la bolsa mas cara de Cal y la mas barata de Cemento.
// // e)Cuantas bolsas de arena se compraron en total, y el promedio por compra.

// console.log("El importe total a pagar : " + precioTotalBruto);
// console.log("el importe total a pagar con descuento(solo si corresponde) : " + totalPagarConDescuento);
// console.log("Informar la bolsa mas cara de Cal : " + calMasCara);
// console.log("Informar la bolsa mas barata de Cemento : " + cementoMasBarata);
// console.log("Cuantas bolsas de arena se compraron en total : " + contadorArena);
// console.log("el promedio por compra de bolsa de arena : " + promedioArena);




 /*Parcial 2020 3 bis:  "Mapa Mundi"
    Realizar el algoritmo que permita ingresar 5 paises:
    el continente (validar entre America , Asia , Europa ,Africa y Oceania) 
    el nombre del país, 
    cantidad de habitantes en millones entre 1 y 7000 (validar)
    el nivel de pobresa entre (pobre, rico, millonario) en europa no hay paises pobre(validar)
    la temperaruta mínima que se registra en su territorio(entre -50 y 50)
    a)La cantidad de temperaturas pares.
    b)la cantidad de temperaturas impares de europa
    c)El nombre del pais con menos habitantes
    d)la cantidad de paises que superan los 40 grados. PREGUNTAR
    e)la cantidad de paises de america que tienen menos de 0 grados .
    f)el promedio de habitantes entre los paises ingresados .
    g)el promedio de habitantes entre los paises que superan los 40 grados
    H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
    i) que continente tiene mas habitantes.
    Probado y funcionando*/

      //   let continente;
      //   let nombrePais;
      //   let cantidadHabitantes;
      //   let nivenPobreza;
      //   let temperatura;
      //   let contadorPar;
      //   let contadorTemperaturaImpar;
      //   let banderaPaisMenosHabitantes;
      //   let paisMenosHabitantes;
      //   let nombreMenosHabitantes;
      //   let contadorMasCuarenta;
      //   let contadorMenosCero;
      //   let promedioHabitantes;
      //   let contadorHabitantes;
      //   let acumuladorHabitantes;
      //   let acumuladorTemperaturaAltas;
      //   let promedioTemperaturaAltas;
      //   let banderaTemperaturaMinima;
      //   let nombrePaisTemperaturaMinima;
      //   let paisTemperaturaMinima;
      //   let acumuladorAmerica;
      //   let acumuladorAsia;
      //   let acumuladorAfrica;
      //   let acumuladorEuropa;
      //   let acumuladorOceania;
      //   let masHabitantesPorContinente;
      //   let mensaje;
        

      //   contadorPar = 0;
      //   contadorTemperaturaImpar = 0;
      //   contadorMasCuarenta = 0;
      //   contadorMenosCero = 0;
      //   contadorHabitantes = 0;
      //   acumuladorHabitantes = 0;
      //   acumuladorTemperaturaAltas = 0;
      //   acumuladorAmerica = 0;
      //   acumuladorAsia = 0;
      //   acumuladorAfrica = 0;
      //   acumuladorEuropa = 0;
      //   acumuladorOceania = 0;

      //   banderaPaisMenosHabitantes = true;
      //   banderaTemperaturaMinima = true;
        

      //   for (let i = 0; i < 2; i++) {
          

      //     continente = prompt("ingrese continenter");
      //     while (!isNaN(continente) || continente != "america" && continente != "africa" && continente != "europa" && continente != "asia" && continente != "oceania") {
      //       continente = prompt("Error: ingrese continente ");
      //     }
      //     nombrePais = prompt("ingrese cnombre pais");

      //     cantidadHabitantes = prompt("ingrese cantidad de habitantes");
      //     cantidadHabitantes = parseInt(cantidadHabitantes);
      //     while (isNaN(cantidadHabitantes) || cantidadHabitantes < 0 || cantidadHabitantes > 7000) {
      //       cantidadHabitantes = parseInt(prompt("Error: ingrese cantidad de  habitantes"));
      //     }

      //     nivenPobreza = prompt("ingrese pobreza");
      //     while (nivenPobreza != "pobre" && nivenPobreza != "rico" && nivenPobreza != "millonarioa") {
      //       nivenPobreza = prompt("Error: ingrese niven Pobreza ");
      //     }

      //     temperatura = parseFloat(prompt("Ingrese temperatura "))
      //     while (isNaN(temperatura) || temperatura < -50 || temperatura > 50) {
      //         temperat = parseFloat(prompt("Error: Ingrese temperatura"))
      //     }
      //     //a)La cantidad de temperaturas pares.
      //     if (temperatura % 2 == 0) {
      //       contadorPar = contadorPar + 1;
      //     }
         
      //     //b)la cantidad de temperaturas impares de europa
      //     switch (continente) {
      //       case "europa":
      //         acumuladorEuropa = acumuladorEuropa + cantidadHabitantes;
      //         if (temperatura % 2 != 0) {
      //          contadorTemperaturaImpar = contadorTemperaturaImpar + 1;
      //         }
      //         break;
      //         acumuladorAmerica = acumuladorAmerica + cantidadHabitantes;
      //       case "america":    // e)la cantidad de paises de america que tienen menos de 0 grados .
      //         if (temperatura < 0) {
      //           contadorMenosCero = contadorMenosCero + 1;
      //         }
      //         break;
      //       case "asia":
      //         acumuladorAsia = acumuladorAsia + cantidadHabitantes;
      //         break;
      //       case "africa":
      //         acumuladorAfrica = acumuladorAfrica + cantidadHabitantes
      //         break;
      //       default:
      //         acumuladorOceania = acumuladorOceania + cantidadHabitantes;
      //         break;
      //     }
      //     if (banderaPaisMenosHabitantes == true ||  cantidadHabitantes < paisMenosHabitantes) {
      //       banderaPaisMenosHabitantes = false;
      //       paisMenosHabitantes = cantidadHabitantes;
      //       nombreMenosHabitantes = nombrePais;
      //     }
      //     // d)la cantidad de paises que superan los 40 grados. PREGUNTAR
      //     if (temperatura > 40) {
      //       contadorMasCuarenta = contadorMasCuarenta + 1
      //       acumuladorTemperaturaAltas = acumuladorTemperaturaAltas + temperatura;
      //       mensaje = "La cantidad de paises con mas de 40 grados son " + contadorMasCuarenta;
      //     }
      //     // f)el promedio de habitantes entre los paises ingresados .

      //     acumuladorHabitantes = acumuladorHabitantes + cantidadHabitantes;
      //     cantidadHabitantes = cantidadHabitantes + 1;

      //     // H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
      //     if (banderaTemperaturaMinima == true || temperatura < paisTemperaturaMinima) {
      //       banderaTemperaturaMinima = false;
      //       paisTemperaturaMinima = temperatura;
      //       nombrePaisTemperaturaMinima = nombrePais;
      //     }
         
         
      //   }//FIN FOR

      //   // f)el promedio de habitantes entre los paises ingresados .
      //   promedioHabitantes = acumuladorHabitantes / contadorMasCuarenta;

      //   // g)el promedio de habitantes entre los paises que superan los 40 grados
      //   if (temperatura < 40) {
      //     mensaje = "No se registro temperatuas de mas de 40"
      //   }else{
      //     promedioTemperaturaAltas = acumuladorTemperaturaAltas /contadorMasCuarenta
      //     mensaje = promedioTemperaturaAltas;
      //   }
     

      //   if (acumuladorAmerica > acumuladorAfrica && acumuladorAmerica > acumuladorAsia && acumuladorAmerica > acumuladorEuropa && acumuladorAmerica > acumuladorOceania) {
      //     masHabitantesPorContinente = "america";
      //   } else if(acumuladorAfrica > acumuladorAsia && acumuladorAfrica > acumuladorEuropa && acumuladorAfrica > acumuladorOceania){
      //     masHabitantesPorContinente = "africa";
      //   }else if(acumuladorAsia > acumuladorEuropa && acumuladorAsia > acumuladorOceania){
      //     masHabitantesPorContinente = "asia";
      //   }else if(acumuladorEuropa > acumuladorOceania){
      //     masHabitantesPorContinente = "oceania";
      //   }else{
      //     masHabitantesPorContinente = "europa"
      //   }
      
      //  console.log("La cantidad de temperaturas pares " + contadorPar );
      //  console.log("la cantidad de temperaturas impares de europa" +contadorTemperaturaImpar);
      //  console.log("El nombre del pais con menos habitantes" +  nombreMenosHabitantes);
      //  console.log("la cantidad de paises que superan los 40 grados" + contadorMasCuarenta);
      //  console.log("la cantidad de paises de america que tienen menos de 0 grados " +  contadorMenosCero);
      //  console.log("el promedio de habitantes entre los paises ingresados" + promedioHabitantes);
      //  console.log("el promedio de habitantes entre los paises que superan los 40 grados " + mensaje);
      //  console.log("la temperatura mínima ingresada," +  paisTemperaturaMinima + " y nombre del pais que registro esa temperatura.  " +  nombrePaisTemperaturaMinima);
      //  console.log("que continente tiene mas habitantes " + masHabitantesPorContinente);






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

// function mostrar(){
// 	let continente;
// 	let paisIngresado;
// 	let cantidadDeHabitantes;
// 	let temperaturaIngresada;

// 	let contadorTemperaturasPares;
// 	let banderaMenosHabitantes;
// 	let nombrePaisMenosHabitantes;
// 	let cantidadMenosHabitantes;
// 	let cantidadDePaisesAmericanosFrios;
// 	let promedioDeHabitantes;
// 	let acumDeHabitantesTotales;
// 	let banderaTemperaturaMinima;
// 	let nombrePaisMinTemperatura;
// 	let tempMinima;

// 	contadorTemperaturasPares = 0;
// 	banderaMenosHabitantes = true;
// 	cantidadDePaisesAmericanosFrios = 0;
// 	acumDeHabitantesTotales = 0;
// 	banderaTemperaturaMinima = true;

// 	for(let i = 0; i < 5; i++){

// 		continente = prompt("Ingrese continente entre america , asia , europa y africa");
// 		while(continente != "america" && continente != "asia" && continente != "europa" && continente != "africa"){
// 			continente = prompt("Error. Ingrese continente entre america , asia , europa y africa");
// 		}

// 		paisIngresado = prompt("Ingrese pais");

// 		cantidadDeHabitantes = parseInt(prompt("Ingrese cantidad de habitantes en millones entre 1 y 2000 "));
// 		while(isNaN(cantidadDeHabitantes) || cantidadDeHabitantes < 1 || cantidadDeHabitantes > 2000){
// 			cantidadDeHabitantes = parseInt(prompt("Errror. Ingrese cantidad de habitantes en millones entre 1 y 2000 "));
// 		}

// 		temperaturaIngresada = parseFloat(prompt("Ingrese la temperaruta promedio que se registra en su territorio(entre -50 y 50)"));
// 		while(isNaN(temperaturaIngresada) || temperaturaIngresada < -50 || temperaturaIngresada > 50){
// 			temperaturaIngresada = parseFloat(prompt("Errror. Ingrese la temperaruta promedio que se registra en su territorio(entre -50 y 50)"));
// 		}
// 		//a)La cantidad de temperaturas pares.
// 		if(temperaturaIngresada % 2 == 0){
// 			contadorTemperaturasPares = contadorTemperaturasPares + 1;
// 		}
// 		//b)El nombre del pais con menos habitantes  Ingreso actual       menor Ingreso
// 		if(banderaMenosHabitantes == true || cantidadMenosHabitantes > cantidadDeHabitantes){
// 			cantidadMenosHabitantes = cantidadDeHabitantes;
// 			nombrePaisMenosHabitantes = paisIngresado;
// 			banderaMenosHabitantes = false;
// 		}

// 		//c)la cantidad de paises de america que tienen menos de 0 grados .
// 		switch(continente){
// 			case "america":
// 				if(temperaturaIngresada < 0){
// 					cantidadDePaisesAmericanosFrios = cantidadDePaisesAmericanosFrios + 1;
// 				}
// 			break;
// 		}
// 		//e) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
// 		if(banderaTemperaturaMinima == true || tempMinima > temperaturaIngresada){
// 			tempMinima = temperaturaIngresada;
// 			nombrePaisMinTemperatura = paisIngresado;
// 			banderaTemperaturaMinima = false;
// 		}

// 		acumDeHabitantesTotales = acumDeHabitantesTotales + cantidadDeHabitantes;
// 	}

// 	//d)el promedio de habitantes entre los paises ingresados .
// 	promedioDeHabitantes = acumDeHabitantesTotales / 5;

 

// 	document.write("La cantidad de temperaturas pares es: " + contadorTemperaturasPares + "<br>");
// 	document.write("El nombre del pais con menos habitantes: " + nombrePaisMenosHabitantes + "<br>");
// 	document.write("la cantidad de paises de america que tienen menos de 0 grados: " + cantidadDePaisesAmericanosFrios + "<br>");
// 	document.write("el promedio de habitantes entre los paises ingresados: " + promedioDeHabitantes + "<br>");
// 	document.write("la temperatura mínima ingresada es: " + tempMinima + " y nombre del pais que registro esa temperatura: " + nombrePaisMinTemperatura + "<br>");
	
//}

/*Recu 2020 1 bis: "Jugando al Doctor" 
De 7 personas que ingresan al hospital se deben tomar y validar los siguientes datos:
nombre, altura, peso y sexo.
a)Informar la cantidad de personas de sexo femenino. 
b)La altura promedio en total de pacientes.
c)El nombre del hombre con menos peso(si lo hay).
d)De la persona no binaria, el más flaco. 
Pedir datos por prompt y mostrar por document.write o console.log*/


  // let nombre;
  // let altura;
  // let peso;
  // let sexo;
  // let contadorSexoF;
  // let promedioAltura;
  // let contadorAltura;
  // let acumuladorAltura;
  // let banderaDelHombreMasLiviano;
  // let nombreDelHombreMasLiviano;
  // let mensaje;
  // let banderaDelmasFlacoBinario;
  // let masFlacoBinario;
  // let mensajeMasFlaco;


  // contadorSexoF = 0;
  // contadorAltura = 0;
  // acumuladorAltura = 0;
  // banderaDelHombreMasLiviano = true;
  // banderaDelmasFlacoBinario = true;



  // for (let i = 0; i < 3; i++) {

  //   nombre = prompt("Ingrese nombre");
  //   while (!isNaN(nombre)) {
  //     nombre = prompt("Error: Ingrese nombre");
  //   }


  //   altura = parseFloat(prompt("Ingrese altura "));
  //   while (isNaN(altura) || altura < 1 || altura > 2.0) {
  //     altura = parseFloat(prompt("Error: Ingrese altura "));
  //   }


  //   peso = parseFloat(prompt("Ingrese peso "));
  //   while (isNaN(peso) || peso < 1 || peso > 130) {
  //     peso = parseFloat(prompt("Error: Ingrese peso "));
  //   }

  //   sexo = prompt("Ingrese sexo entre 'f' o 'm' o 'b'");
  //   while (!isNaN(sexo) && sexo != "f" && sexo != "m" && sexo != "b") {
  //     sexo = prompt("error: Ingrese sexo entre 'f' o 'm' o 'b'");
  //   }

  //   switch (sexo) {
  //     case "f"://a)Informar la cantidad de personas de sexo femenino. 
  //       contadorSexoF = contadorSexoF + 1;
  //       break;
  //     case "m":
  //       if (banderaDelHombreMasLiviano == true || peso < nombreDelHombreMasLiviano) {
  //         nombreDelHombreMasLiviano = nombre;
  //         mensaje = nombreDelHombreMasLiviano;
  //         banderaDelHombreMasLiviano = false;
  //       }
  //       break;
  //     default:
  //       if (banderaDelmasFlacoBinario == true || peso > masFlacoBinario) {
  //         masFlacoBinario = peso
  //         mensajeMasFlaco = masFlacoBinario;
  //         banderaDelmasFlacoBinario = false;
  //       }

  //       break;
  //   }

  //   acumuladorAltura = acumuladorAltura + altura;
  //   contadorAltura = contadorAltura + 1;





  // }//fin for

  // //b)La altura promedio en total de pacientes.
  // promedioAltura = acumuladorAltura / contadorAltura;

  // if (banderaDelHombreMasLiviano == false) {
  //   mensaje = "No se ingrso ningun hombre con menos peso"
  // }

  // if (banderaDelmasFlacoBinario == false) {
  //   mensaje = "No se ingreso ningun binario menos peso"
  // }
  // console.log("Informar la cantidad de personas de sexo femenino.  " + contadorSexoF);
  // console.log("La altura promedio en total de pacientes." + promedioAltura);
  // console.log("El nombre del hombre con menos peso(si lo hay)." + mensaje);
  // console.log("De la persona no binaria, el más flaco. " + mensajeMasFlaco);

  /*Recu 2020 2 bis: "El cine"
  De un cine se deben ingresar una cantidad indeterminada 
  de venta de entradas diaria, validando los
  siguientes datos:
  nombre de película, precio, cantidad de entradas, tipo(3D o 4D)
  a)El nombre de la película más cara de tipo 4D.
  b)Informar el precio total de la venta del día.
  c)El nombre de la película con menos cantidad de entradas.
  d)El tipo de pelicula más vista y la cantidad de entradas. 
  e)El nombre de la pelicula más barata en 3D. 
   CHEQUEADO Y FUNCIONANDO*/

  // let nombrePelicula;
  // let precio;
  // let cantidadEntradas;
  // let tipo;
  // let respuesta;
  // let banderaMasCara;
  // let nombreMasCara;
  // let precioMasCara;
  // let acumuladorPrecioTotal;
  // let banderaMenosEntradasVendidas;
  // let nombreMenosVendida;
  // let menosCantidadVendida;
  // let acumulador3D;
  // let acumulador4D;
  // let tipoMasVista;
  // let banderaMasBarata3D;
  // let nombreMasBarata3D;
  // let masBarata3D;



  // respuesta = true;
  // banderaMasCara = true;
  // banderaMenosEntradasVendidas = true;
  // banderaMasBarata3D = true;
  // acumuladorPrecioTotal = 0;
  // acumulador3D = 0;
  // acumulador4D = 0;


  // while (respuesta == true) {
  //   nombrePelicula = prompt("Ingrese nombrePeliculaMç");
  //   while (!isNaN(nombrePelicula)) {
  //     nombrePelicula = prompt("Error: Ingrese nombrePeliculaMç");
  //   }

  //   precio = parseFloat(prompt("Ingrese precio "));
  //     while (isNaN(precio) || precio < 1 || precio > 1300) {
  //       precio = parseFloat(prompt("Error: Ingrese precio "));
  //     }

  //     cantidadEntradas = parseInt(prompt("Ingrese cantidadEntradas "));
  //     while (isNaN(cantidadEntradas) || cantidadEntradas < 1 || cantidadEntradas > 10) {
  //       cantidadEntradas = parseInt(prompt("Error: Ingrese cantidadEntradas "));
  //     }
    
  //     tipo = prompt("Ingrese tipo entre 3D o 4D");
  //       while (!isNaN(tipo) && tipo != "3D" && tipo != "4D") {
  //         tipo = prompt("error: Ingrese tipo entre 3D o 4D");
  //       }
       
  //       //b)Informar el precio total de la venta del día.
  //       acumuladorPrecioTotal = acumuladorPrecioTotal + precio;
       

  //       //c)El nombre de la película con menos cantidad de entradas.
  //       if (banderaMenosEntradasVendidas == true || cantidadEntradas < menosCantidadVendida) {
  //         menosCantidadVendida = cantidadEntradas;
  //         nombreMenosVendida = nombrePelicula;
  //         banderaMenosEntradasVendidas = false;
  //       }

  //       //d)El tipo de pelicula más vista y la cantidad de entradas. 
  //       switch (tipo) {
  //         case "3D":
  //           acumulador3D = acumulador3D + cantidadEntradas;
  //     if (banderaMasBarata3D == true || precio < masBarata3D) {
  //             banderaMasBarata3D = false;
  //             masBarata3D = precio;
  //             nombreMasBarata3D = nombrePelicula;
  //     }
  //           break;
        
  //         default:
  //           acumulador4D = acumulador4D + cantidadEntradas;
  //            //a)El nombre de la película más cara de tipo 4D.
  //           if (banderaMasCara == true || precio > precioMasCara) {
  //             precioMasCara = precio
  //             nombreMasCara = nombrePelicula;
  //             banderaMasCara = false;
  //           }
  //           break;
  //       }
  //       respuesta=confirm("quiere otra entrada"); 
  // }//fin while
 
  //       if(acumulador3D > acumulador4D){
  //         tipoMasVista = " el tipo mas visto fue 3D " + acumulador3D + " fue la cantidad de entrada";
  //       }else{
  //         tipoMasVista = " el tipo mas visto fue 4D " + acumulador4D + " fue la cantidad de entrada";
  //       }


  //     console.log("El nombre de la película más cara de tipo 4D.  " + nombreMasCara);
  //     console.log("Informar el precio total de la venta del día." +acumuladorPrecioTotal);
  //     console.log("El nombre de la película con menos cantidad de entradas." + nombreMenosVendida);
  //     console.log(tipoMasVista);
  //     console.log("El nombre de la pelicula más barata en 3D.  " + masBarata3D);




      /* Recu 2020 3 bis: Vacaciones en Familia" 
      Nos ingresan una cantidad indeterminada de estadías de vacaciones, 
      validando los datos ingresados:
      nombre del pasajero titular, 
      destino( “Brasil”, “Caribe” o “Europa”), 
      temporada(“alta”,”baja”,“media”),
      cantidad de pasajeros que viajan.
      Informar:
      a)El destino más elegido.
      b)El nombre del pasajero titular que lleva menos pasajeros.
      c)El promedio de personas, que viajan en temporada alta.
      d)El total de personas que viajaron a Europa.*/

      let nombrePasajero;
      let destino;
      let temporada;
      let cantidadPasajeros;
      let repuesta;
      let banderaPasajerosMenos;
      let nombrePasajeroMenos;
      let cantidadMenosPasajeros;
      let acumuladorTemporadaAlta;
      let contadorTemporadaAlta;
      let promedioTemporadaAlta;
      let acumuladorEuyropa;
      let acumuladorDestinoCaribe;
      let acumuladorBrasil;
      let acumuladorEuropa;
      

    

      repuesta = true;
   
      banderaMasElegido = true;
      banderaPasajerosMenos = true;
      acumuladorTemporadaAlta = 0;
      contadorTemporadaAlta = 0;
      acumuladorEuyropa = 0;
      acumuladorDestinoCaribe = 0;
      acumuladorBrasil = 0;
      acumuladorEuropa = 0;

  while (repuesta == true) {

    nombrePasajero = prompt("Ingrese nombre ");
    while (!isNaN(nombrePasajero)) {
      nombrePasajero = prompt("Error: Ingrese nombre");
    }

    destino = prompt("Ingrese destino entre  “Brasil”, “Caribe” o “Europa”");
    while (!isNaN(destino) && destino != "brasil" && destino != "caribe" && destino != "europa") {
      destino = prompt("error: Ingrese destino entre  “Brasil”, “Caribe” o “Europa”");
    }

    temporada = prompt("Ingrese temporada entre “alta”,”baja”,“media”");
    while (!isNaN(temporada) && temporada != "alta" && temporada != "media" && temporada != "baja") {
      temporada = prompt("error: Ingrese temporada entre “alta”,”baja”,“media”");
    }

    cantidadPasajeros = parseInt(prompt("Ingrese cantidad Pasajeros "));
    while (isNaN(cantidadPasajeros) || cantidadPasajeros < 1 || cantidadPasajeros > 10) {
      cantidadPasajeros = parseInt(prompt("Error: Ingrese cantidad Pasajeros "));
    }

    //a)El destino más elegido.
  
   

      // b)El nombre del pasajero titular que lleva menos pasajeros.
      if (banderaPasajerosMenos == true || cantidadPasajeros < cantidadMenosPasajeros) {
          cantidadMenosPasajeros = cantidadPasajeros;
          nombrePasajeroMenos = nombrePasajero;
          banderaPasajerosMenos = false;
      }
      // c)El promedio de personas, que viajan en temporada alta.
      if (temporada == "alta") {
        acumuladorTemporadaAlta = acumuladorTemporadaAlta + cantidadPasajeros;
        contadorTemporadaAlta = contadorTemporadaAlta + 1;
      }
      //  d)El total de personas que viajaron a Europa.
      if (destino == "europa") {
        acumuladorEuyropa = acumuladorEuyropa + cantidadPasajeros;
      }


        repuesta = confirm("Desea ingresar otro dato")
      }//fin while

      promedioTemporadaAlta = acumuladorTemporadaAlta / contadorTemporadaAlta;



           console.log("El nombre del pasajero titular que lleva menos pasajeros.  " + nombrePasajeroMenos);
          console.log("El promedio de personas, que viajan en temporada alta." + promedioTemporadaAlta);
          console.log("El total de personas que viajaron a Europa." +acumuladorEuyropa);
          console.log( "El destino más elegido."  + contadorDestinoCaribe);
}














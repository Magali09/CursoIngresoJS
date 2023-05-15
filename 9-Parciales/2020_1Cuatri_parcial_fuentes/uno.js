/* 
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
while validar como validamos sexo
el precio (validar entre 100 y 300),
while validar un numero entre rangos
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
if y una bandera cuando pide el mas barato
b) Del tipo con mas unidades, el promedio por compra
if y bandera contador de c/u de los tipos y un acumulador de cantidades de c/u de los tipos uso switch
c) Cuántas unidades de jabones hay en total
contador de c/u de los tipos, acumlador de cantidades de c/u de los tipo*/
function mostrar()
{
	//declaro varibles
	// let tipo;
	// let precio;
	// let cantidad;
	// let marca;
	// let fabricante;
	// let acumuladorCantidadBarbijo = 0;
	// let acumuladorCantidadAlcohol = 0;
	// let acumuladorCantidadJabon = 0;
	// let contadorBarbijo = 0;
	// let contadorAlcohol = 0;
	// let contadorJabon = 0;
	// let precioAlcoholBarato;
	// let cantidadAlcoholBarato;
	// let fabricanteAlcoholBarato;
	// let promedioCompra;
	// let mayorTipoUnidades;
	// let flagAlcohol = 0;
	// let mensajeAlcohol = "No hubo compra de alcoholes";
	// let mensajeBarbijo;
	// let mensajeJabon;
	
	// for (let i = 0; i < 5; i++) 
	// {
		
	// 	tipo = prompt("ingrese tipo: barbijo , jabón o alcohol");
	// 	while (tipo != "barbijo" && tipo != "alcohol" && tipo != "jabon") {

	// 		tipo = prompt("Error, ingrese tipo: barbijo , jabón o alcohol");
	// 	}

	// 	precio = parseFloat(prompt("Ingrese el precio  entre $100 y $300"));//uso float xq no es un numero entero, voy a trabajar con valores de decimales
	// 	while(precio < 100 || precio > 300 || isNaN(precio))//otra alternativa (!(precio > 100 && precio < 300))
	// 	{
	// 		precio = parseFloat(prompt("Error: Ingrese el precio  entre $100 y $300"));
	// 	}

	// 	cantidad = parseInt(prompt("Ingrese el cantidad MAX 1000"));
	// 	while(!(cantidad > 0 && cantidad < 1000))
	// 	{
	// 		cantidad = parseInt(prompt("Error: Ingrese el cantidad MAX 1000"));
	// 	}

	// 	marca = prompt("ingrese marca");
	// 	fabricante = prompt("ingrese fabricante");

	// 	switch (tipo) {
	// 		case "alcohol"://punto A
				
	// 		acumuladorCantidadAlcohol = acumuladorCantidadAlcohol + cantidad;
	// 		contadorAlcohol = contadorAlcohol + 1;

	// 		if (flagAlcohol == 0 || precioAlcoholBarato > precio) {
				
	// 			precioAlcoholBarato = precio;
	// 			cantidadAlcoholBarato = cantidad;
	// 			fabricanteAlcoholBarato = fabricante;
	// 			flagAlcohol = 1;
	// 		}
	// 			break;
	// 		case "barbijo": 

	// 		acumuladorCantidadBarbijo = acumuladorCantidadBarbijo + cantidad;
	// 		contadorBarbijo = contadorBarbijo + 1;

	// 			break;
	// 		case "jabon"://punto C

	// 		acumuladorCantidadJabon = acumuladorCantidadJabon + cantidad;
	// 		contadorJabon = contadorJabon + 1;
	// 			break;
			
	// 	}



	// }//fin DEL FOR
	// /* otra manera de preguntar en el if
	
	// if(acumuladorAlcohol > acumuladorJabon)
	// {
	// 	promedioCompra = acumuladorCantidadAlcohol / contadorAlcohol;

	// }else if(acumuladorJabon > acumuladorBarbijo)
	// {
	// 	promedioCompra = acumuladorCantidadJabon / contadorJabon;
	
	// }else{
	// 	promedioCompra = acumuladorCantidadBarbijo / contadorBarbijo;
	// }
	// */

	// 	if (acumuladorCantidadAlcohol > acumuladorCantidadBarbijo && acumuladorCantidadAlcohol > acumuladorCantidadJabon)
	// 	{// acumulador alcohol sea el mayor

	// 		mayorTipoUnidades = "alcohol";
	// 		promedioCompra = acumuladorCantidadAlcohol / contadorAlcohol;
			
	// 	} else if(acumuladorCantidadBarbijo > acumuladorCantidadAlcohol && acumuladorCantidadBarbijo >= acumuladorCantidadJabon)//acuumulador barbijo sea el mayor 
	// 	{																							//uso el >= puede ser q en caso de arriba me de un empate
	// 		mayorTipoUnidades = "barbijo";
	// 		promedioCompra = acumuladorCantidadBarbijo / contadorBarbijo;

	// 	}else
	// 	{
	// 		mayorTipoUnidades = "jabon";
	// 		promedioCompra = acumuladorCantidadJabon / contadorJabon;
	// 	}

	// 	if (contadorAlcohol != 0) //otra condicion es con (flagAlcohol == 1)
	// 	{
	// 		mensajeAlcohol = " Fabricante alcohol barato " + fabricanteAlcoholBarato;
	// 		"\n cantidad : " + cantidadAlcoholBarato +
	// 		"\n precio : " + precioAlcoholBarato; //mensaje del punto A.
	// 	}

	// 	mensajeBarbijo = "El tipo con mas unidades " + mayorTipoUnidades + " promedio: " + promedioCompra;
	// 	mensajeJabon = "Las unidade de jabon " + acumuladorCantidadJabon + " unidades: " +acumuladorCantidadJabon;

	// 	alert(mensajeAlcohol + "\n" + mensajeBarbijo + "\n" +mensajeJabon);
	// //que tengo q generar un bucle pedir 5 veces tipo, precio, cantidad, marca y fabricante. Valido todo segun corresponda
	// //utilizo for xq conozco de antemano la cantidad de repeticiones


	// // A. tengo que reconocer si el producto es alcohol y recordar el precio la cantidad y el fabricante del mas barato
	// // B. tengo que acumular las cantidades de cada tipo y las cantidades de unidades de cada tipo y la cantidad de tipo de producto para sacr el promedio de compra del acumulador mayor
	// // C. tengo que acumular la cantidad de jabones






	/******************************************************************************

Enunciado:
Una empresa de mercaderia nos pide un sistema de almacenamiento para sus productos.
La empresa dispone de 3 bodegas para almacenar los productos: 
- Avellaneda (20.000KG)
- CABA (25.000KG) 
- Lanus (15.000 KG)

Para poder almacenar los productos correctamente se debera ingresar el deposito, siempre y cuando este disponible,
una descripcion del producto en cuestion, y el peso del nuevo ingreso a la bodega. Hasta que el usuario desee.

Se debera informar:
a) Cual fue el producto con mas peso entre las tres bodegas, e indicar el promedio
b) Cual fue la bodega con mas ingresos.
c) Cual es la bodega mas llena.
d) Porcentaje disponible de cada bodega.

*******************************************************************************/

// let deposito;
// let peso;
// let producto;
// let respuesta;
// let banderaMasPeso;
// let productoMasPeso;
// let nombreproductoMasPeso;
// let acumuladorMasPeso;
// let contadorMasIngresosAvellaneda;
// let contsdorMasIngresosCaba;
// let contadorMasIngresosLanus;
// let promedioMasPeso;
// let contadorIngresos;
// let banderaMasLlena;
// let bodegaMasLlena;
// let nombreBodegaMasLLena;
// let porcentajeBodega;
// let contadorPorBodega;
// let bodegaMasIngresos;
// let contadoBodegaGeneral;


// respuesta = true;
// banderaMasPeso = true;
// banderaMasLlena = true;

// acumuladorMasPeso = 0;
// contadorMasPeso = 0;
// contadorIngresos = 0;
// contadoBodegaGeneral = 0;

// while (respuesta == true) {
	
// 	producto = prompt("nombre del producto")
	
//     deposito = prompt("Ingrese deposito entre avellaneda, lanus o caba");
//     while(deposito != "avellaneda" && deposito != "caba" && deposito != "lanus"){
//       deposito = prompt("Error. Ingrese deposito entre avellaneda, lanus o caba");
//     }


// 	peso = parseInt(prompt("Ingrese peso"));
//     while(isNaN(peso) || peso < 15000 || peso > 25000){
//       peso = parseInt(prompt("Error. Ingrese peso "));
//     }


// 	if(banderaMasPeso == true || productoMasPeso < peso){
// 		productoMasPeso = peso;
// 		nombreproductoMasPeso = producto;
// 		banderaMasPeso = false;

// 	}
// 	if (banderaMasLlena == true || bodegaMasLlena < peso) {
// 		bodegaMasLlena = peso;
// 		banderaMasLlena = false;
// 		nombreBodegaMasLLena = deposito;
// 	}

// 	switch (deposito) {
// 		case "avellaneda":
// 			contadoBodegaGeneral = contadoBodegaGeneral + 1;
// 			contadorMasIngresosAvellaneda = contadorMasIngresosavellaneda + 1;
// 			break;
// 			case "caba":
// 				contadoBodegaGeneral = contadoBodegaGeneral + 1;
// 				contsdorMasIngresosCaba = contsdorMasIngresosCaba + 1;
// 			break
	
// 		default:
// 			contadoBodegaGeneral = contadoBodegaGeneral + 1;
// 			contadorMasIngresosLanus = contadorMasIngresosLanus + 1;
// 			break;
// 	}



// 	contadorPorBodega = contadorPorBodega + 1;


// 	respuesta = confirm("Desea ingresar otro valor")
// }

// promedioMasPeso = acumuladorMasPeso / promedioMasPeso;


// if (contadorMasIngresosAvellaneda > contadorMasIngresosLanus && contadorMasIngresosAvellaneda > contsdorMasIngresosCaba) {
// 	bodegaMasIngresos = "avellaneda"
// } else if(contadorMasIngresosLanus > contadorMasIngresosAvellaneda && contadorMasIngresosLanus > contsdorMasIngresosCaba){
// 	bodegaMasIngresos = "lanus"
// }else{
// 	bodegaMasIngresos = "caba"
// }

// porcentajeBodega = contadorPorBodega *contadoBodegaGeneral / 100

// console.log("Cual fue el producto con mas peso entre las tres bodegas" + productoMasPeso + " e indicar el promedio " + promedioMasPeso);
// console.log("Cual fue la bodega con mas ingresos." + bodegaMasIngresos);
// console.log("Cual es la bodega mas llena." + nombreBodegaMasLLena);
// console.log("Porcentaje de muebles de cada tipo de material" + porcentajeBodega);

/*
Una aerolinea nos contrata con el fin de crear una aplicacion para administrar la venta de pasajes.
Se sabe que por el momento solamente disponen de 3 vendedores de paquetes de viajes (Pepepeposo, Quinoto y Huesos). 
Cualquiera de los unicos 3 vendedores disponibles de la empresa es capaz de vender un paquete de viaje el cual
puede tener desde 1 pasaje hasta 5 pasajes para todo un grupo familiar. 
Para vender un paquete de viaje se necesitan los siguientes datos.

Nombre del vendedor (validar los nombres ya mencionados).
Nombre del comprador (validar que no sea un numero).
Cantidad de pasajes (validar teniendo en cuenta lo mencionado anteriormente).
Precio total del paquete de viaje (validar el rango posible de precio).
Tipo de asiento (validar clase economica, clase ejecutiva, primera clase).
Nota: los paquetes de viajes en clase economica no tienen ningun descuento ni aumento, los de clase ejecutiva tienen un 20% de aumento
y los de primera clase tienen un 35% de aumento sobre el precio base del paquete.
Tipo de viaje (validar si el viaje es directo o con escala).
Tipo de destino (validar si es nacional o internacional).

La empresa tambien nos pide realizar los algoritmos necesarios para poder saber:

A) El total de pesos recaudados de cada vendedor.
B) El vendedor que mas recaudo y la cantidad de pesos recaudados por ese vendedor.
C) El porcentaje de paquetes de vuelos nacionales e internacionales vendidos.
D) Cual es la cantidad de paquetes de viaje vendidos que sean directos e internacionales.
E) Calcular el precio final del paquete de viaje teniendo en cuenta el tipo de asiento e informarlo antes de la proxima venta con un alert
F) El promedio de ventas de los paquetes de viajes con respecto al tipo de asiento seleccionado por el cliente.
*/


let nombreVendedor;
let nombreComprador;
let cantidadPasajes;
let precioTotalPaquete;
let tipoAsiento;
let tipoViaje;
let tipoDestino;
let respuesta = true;
let acumuladorPesosPepe = 0;
let acumuladorPesosQuinoto = 0;
let acumuladorPesosHuesos = 0;
let acumuladorPaquetes = 0;
let contadorPaquetes = 0;
let porcentajePaqueteVendido;
let banderaMasRecaudo = true;
let masRecaudo;
let nombreMasVendedor;
let claseEjecutiva;
let precioTotalEjecutiva;
let clasePrimeraClase;
let precioTotalPrimeraClase;
let acumuladorAsiento = 0;
let contadorAsiento = 0;
let promedioVentas;


while(respuesta == true){

	nombreVendedor = prompt ( "ingrese nombre vendedor");
	nombreComprador = prompt ( "ingrese nombre COMPRADOR");

	tipoAsiento = prompt("Ingrese economica, clase ejecutiva, primera clase");
	    while(tipoAsiento != "economico" && tipoAsiento != "ejecutivo" && tipoAsiento != "primera clase"){
	      tipoAsiento = prompt("Error. Ingrese economica, clase ejecutiva, primera clase");
	    }
		tipoViaje = prompt("Ingrese viaje es directo o con escala");
	    while(tipoViaje != "directo" && tipoViaje != "escala"){
	      tipoViaje = prompt("Error. Ingrese viaje es directo o con escala");
	    }
		tipoDestino = prompt("Ingrese viaje es  es nacional o internacional");
	    while(tipoDestino != "nacional" && tipoDestino != "internacional"){
	      tipoDestino = prompt("Error. Ingrese viaje es  es nacional o internacional");
	    }
	
		cantidadPasajes = parseInt(prompt("Ingrese cantidad Pasajes"));
	    while(isNaN(cantidadPasajes) || cantidadPasajes < 1|| cantidadPasajes > 5){
	      cantidadPasajes = parseInt(prompt("Error. Ingrese cantidad Pasajes "));
	    }
		precioTotalPaquete = parseInt(prompt("Ingrese precio Pasajes"));
	    while(isNaN(precioTotalPaquete) || precioTotalPaquete < 1|| precioTotalPaquete > 1000){
	      precioTotalPaquete = parseInt(prompt("Error. Ingrese cprecio Pasajes "));
	    }

		claseEjecutiva = precioTotalPaquete * 20 /100;//aumento
		clasePrimeraClase = precioTotalPaquete * 35 / 100;

		switch (nombreVendedor) {
			case "pepepeposo"://Pepepeposo, Quinoto y Huesos)
				acumuladorPesosPorVendedor = acumuladorPesosPorVendedor + precioTotalPaquete;
				break;
				case "quinoto"://Pepepeposo, Quinoto y Huesos)
				acumuladorPesosQuinoto = acumuladorPesosQuinoto + precioTotalPaquete
				break;
			default:
				acumuladorPesosHuesos = acumuladorPesosHuesos + precioTotalPaquete
				break;
		}

		if(banderaMasRecaudo == true || masRecaudo < precioTotalPaquete){
			banderaMasRecaudo = false;
			masRecaudo = precioTotalPaquete;
			nombreMasVendedor = nombreMasVendedor;
		}
		acumuladorPaquetes = acumuladorPaquetes + precioTotalPaquete;
		contadorPaquetes = acumuladorPaquetes + 1;
			switch (tipoAsiento) {
				case "economico":
					acumuladorAsiento = acumuladorAsiento + cantidadPasajes;
					if (tipoDestino == "nacional" || tipoDestino == "internacional") {
						contadorAsiento = contadorAsiento + 1;
					}
				
					break;
				case "ejecutiva":
					acumuladorAsiento = acumuladorAsiento + cantidadPasajes;
					if (tipoDestino == "nacional" || tipoDestino == "internacional") {
						contadorAsiento = contadorAsiento + 1;
					};
					break;
				default:
					acumuladorAsiento = acumuladorAsiento + cantidadPasajes;
					if (tipoDestino == "nacional" || tipoDestino == "internacional") {
						contadorAsiento = contadorAsiento + 1;
					}
					break;
}





	respuesta = prompt("Desea ingresar otro dato")
}


porcentajePaqueteVendido = contadorAsiento / contadorPaquetes;

promedioVentas = acumuladorAsiento / contadorAsiento;

precioTotalEjecutiva = acumuladorPaquetes + claseEjecutiva;
precioTotalPrimeraClase = acumuladorPaquetes + clasePrimeraClase;
//E) Calcular el precio final del paquete de viaje teniendo en cuenta el tipo de asiento e informarlo antes de la proxima venta con un alert
alert("pagara por precio ejecutiva " + precioTotalEjecutiva);
alert("Pagara por primera clase " + precioTotalPrimeraClase);

console.log("El total de pesos recaudados de cada vendedor." + acumuladorPesosPepe + " fue pepe" + acumuladorPesosHuesos + " fue huesos " + acumuladorPesosQuinoto + " quinotos");
console.log(" El porcentaje de paquetes de vuelos nacionales e internacionales vendidos." + porcentajePaqueteVendido);//C) El porcentaje de paquetes de vuelos nacionales e internacionales vendidos.
console.log("El vendedor que mas recaudo" + nombreMasVendedor + "la cantidad de pesos recaudados por ese vendedor fue " + masRecaudo);//B) El vendedor que mas recaudo y la cantidad de pesos recaudados por ese vendedor.
console.log(" Cual es la cantidad de paquetes de viaje vendidos que sean directos e internacionales" + contadorAsiento);//D) Cual es la cantidad de paquetes de viaje vendidos que sean directos e internacionales.
console.log(" El promedio de ventas de los paquetes de viajes con respecto al tipo de asiento seleccionado por el cliente." + promedioVentas);

function mostrar()
{
	let TOTAL_AVELLANEDA = 20000;
	let TOTAL_CABA = 25000;
	let TOTAL_LANUS = 15000;

	let pesoAvellaneda;
	let pesoCABA;
	let pesoLanus;
	let pesoProducto;
	let descripcionProducto;
	let deposito;
	let banderaPrimerPesoIngresado;
	let pesoMaximo;
	let productoMaximo;
	let ingresosCABA;
	let ingresosAvellaneda;
	let ingresosLanus;
	let mensajeDeSalida;

	pesoAvellaneda = 0;
	pesoCABA = 0;
	pesoLanus = 0;
	ingresosCABA = 0;
	ingresosAvellaneda = 0;
	ingresosLanus = 0;
	banderaPrimerPesoIngresado = true;

	do{

		do {
            deposito = prompt("Ingrese el deposito").toLowerCase();
        }while(deposito != "avellaneda" && deposito != "caba" && deposito != "lanus");

		do{
			descripcionProducto = prompt("Ingrese la descripcion del producto");
		}while(!isNaN(descripcionProducto));

		do{
			pesoProducto = prompt("Ingrese el peso del producto");
			pesoProducto = parseFloat(pesoProducto);
		}while(isNaN(pesoProducto));

		if(banderaPrimerPesoIngresado || pesoProducto > pesoMaximo){
			pesoMaximo = pesoProducto;
			productoMaximo = descripcionProducto;
			banderaPrimerPesoIngresado = false;
		}

		if(deposito == "caba"){
			if((pesoCABA + pesoProducto) > TOTAL_CABA){
				alert("Deposito lleno");
				continue;
			}
			else{
				pesoCABA += pesoProducto;
				ingresosCABA++;
			}
		}
		else{
			if(deposito == "avellaneda"){
				if((pesoAvellaneda + pesoProducto) > TOTAL_AVELLANEDA){
					alert("Deposito lleno");
					continue;
				}
				else{
					pesoAvellaneda += pesoProducto;
					ingresosAvellaneda++;
				}
			}
			else{
				if((pesoLanus + pesoProducto) > TOTAL_LANUS){
					alert("Deposito lleno");
					continue;
				}
				else{
					pesoLanus += pesoProducto;
					ingresosLanus++;
				}
			}
		}

	}while(confirm("Desea realizar otro deposito?"));

	//A:
	mensajeDeSalida = "a) El producto con mas peso es: " + productoMaximo + " con " + pesoMaximo + " KG.\ Su promedio es: " + pesoMaximo / (pesoAvellaneda + pesoCABA +pesoLanus);

	//B:
	if(ingresosAvellaneda > ingresosCABA && ingresosAvellaneda > ingresosLanus){
		mensajeDeSalida += "\nb) La bodega con mas ingresos es: Avellaneda";
	}
	else{
		if(ingresosCABA > ingresosLanus){
			mensajeDeSalida += "\nb) La bodega con mas ingresos es: CABA";
		}
		else{
			mensajeDeSalida += "\nb) La bodega con mas ingresos es: Lanus";
		}
	}

	//C:
	if(pesoAvellaneda > pesoCABA && pesoAvellaneda > pesoLanus){
		mensajeDeSalida += "\nc) La bodega mas llena es: Avellaneda";
	}
	else{
		if(pesoCABA > pesoLanus){
			mensajeDeSalida += "\nc) La bodega mas llena es: CABA";
		}
		else{
			mensajeDeSalida += "\nc) La bodega mas llena es: Lanus";
		}
	}

	//D:
	mensajeDeSalida += "\nd) Avellaneda: %" + pesoAvellaneda * 100 / TOTAL_AVELLANEDA + "\nCABA: % " + pesoCABA * 100 / TOTAL_CABA + "\nLanus: % " + pesoLanus * 100 / TOTAL_LANUS;

	alert(mensajeDeSalida);
}






/*
Una aerolinea nos contrata con el fin de crear una aplicacion para administrar la venta de pasajes.
Se sabe que por el momento solamente disponen de 3 vendedores de paquetes de viajes (Pepepeposo, Quinoto y Huesos). 
Cualquiera de los unicos 3 vendedores disponibles de la empresa es capaz de vender un paquete de viaje el cual
puede tener desde 1 pasaje hasta 5 pasajes para todo un grupo familiar. 
Se sabe que el precio de cada pasaje vendido dentro del paquete de viaje es de 10000 pesos.
Para vender un paquete de viaje se necesitan los siguientes datos.

Nombre del vendedor (validar los nombres ya mencionados).
Nombre del comprador (validar que no sea un numero).
Cantidad de pasajes (validar teniendo en cuenta lo mencionado anteriormente).
Tipo de asiento (validar clase economica, clase ejecutiva, primera clase).
Nota: los paquetes de viajes en clase economica no tienen ningun descuento ni aumento, los de clase ejecutiva tienen un 20% de aumento
y los de primera clase tienen un 35% de aumento sobre el precio base del paquete.
Tipo de viaje (validar si el viaje es directo o con escala).
Tipo de destino (validar si es nacional o internacional).

La empresa tambien nos pide realizar los algoritmos necesarios para poder saber:

A) El total de pesos recaudados de cada vendedor. *
B) El vendedor que mas recaudo y la cantidad de pesos recaudados por ese vendedor. *
C) El porcentaje de paquetes de vuelos nacionales e internacionales vendidos. *
D) Cual es la cantidad de paquetes de viaje vendidos que sean directos e internacionales.
E) Calcular el precio final del paquete de viaje teniendo en cuenta el tipo de asiento e informarlo antes de la proxima venta con un alert*
F) El promedio de ventas de los paquetes de viajes con respecto al tipo de asiento seleccionado por el cliente.
*/
function mostrar()
{
	var nombreVendedor;
	var nombreComprador;
	var cantidadPasajes;
	var precioBase;
	var precioPorPasaje;
	var precioFinal;
	var tipoDeAsiento;
	var tipoDeViaje;
	var tipoDeDestino;
	var continua;
	var porcentaje;
	var recaudacionHuesos;
	var recaudacionPepepeposo;
	var recaudacionQuinoto;
	var vendedorConMayorRecaudacion;
	var contadorViajesNacionales;
	var contadorViajesInternacionales;
	var porcentajeInternacional;
	var porcentajeNacional;
	var cantidadTotalDePaquetesVendidos;
	var contadorPaqueteEconomico;
	var contadorPaqueteEjecutivo;
	var contadorPaquetePrimeraClase;
	var promedioEconomica;
	var promedioEjecutivo;
	var promedioPrimeraClase;
	var vendedorConMayorRecaudacionEnPesos;
	var mensaje;

	contadorPaqueteEconomico = 0;
	contadorPaqueteEjecutivo = 0;
	contadorPaquetePrimeraClase = 0;
	contadorViajesInternacionales = 0;
	contadorViajesNacionales = 0;
	recaudacionHuesos = 0;
	recaudacionPepepeposo = 0;
	recaudacionQuinoto = 0;
	precioPorPasaje = 10000;


	do{
		do{
			nombreVendedor = prompt("Identifiquese (Quinoto, Huesos o Pepepeposo)").toLowerCase();
		}while(!isNaN(nombreVendedor) || (nombreVendedor != "quinoto" && nombreVendedor != "pepepesoso" && nombreVendedor != "huesos"));
		do{
			nombreComprador = prompt("Ingrese el nombre del comprador").toLowerCase();
		}while(!isNaN(nombreComprador));
		do{
			cantidadPasajes = prompt("Ingrese la cantidad de pasajes a vender (minimo 1 - maximo 5)");
			cantidadPasajes = parseInt(cantidadPasajes);
		}while(isNaN(cantidadPasajes) || (cantidadPasajes< 1 || cantidadPasajes > 5));
		do{
			tipoDeAsiento = prompt("Ingrese el tipo de asiento (economica, ejecutiva o primera clase)").toLowerCase();
		}while(!isNaN(tipoDeAsiento) || (tipoDeAsiento != "economica" && tipoDeAsiento != "ejecutiva" && tipoDeAsiento != "primera clase"));
		do{
			tipoDeViaje = prompt("Ingrese el tipo de viaje (directo o con escala)");
		}while(!isNaN(tipoDeViaje) || (tipoDeViaje != "directo" && tipoDeViaje != "con escala"));
		do{
			tipoDeDestino = prompt("Ingrese el tipo de destino (nacional o internacional)");
		}while(!isNaN(tipoDeDestino) || (tipoDeDestino != "internacional" && tipoDeDestino != "nacional"));

		//Punto E
		precioBase = precioPorPasaje * cantidadPasajes;
		if(tipoDeAsiento == "ejecutiva"){
			porcentaje = 1.20;
		}
		else{
			if(tipoDeAsiento == "primera clase"){
				porcentaje = 1.35;
			}
			else{
				porcentaje = 1;
			}
		}
		precioFinal = precioBase * porcentaje;
		alert("El precio del paquete es de: " + precioFinal);
		//Punto A
		switch(nombreVendedor){
			case "huesos":
				recaudacionHuesos = recaudacionHuesos + precioFinal;
			break;
			case "pepepesoso":
				recaudacionPepepeposo = recaudacionPepepeposo + precioFinal;
			break;
			case "quinoto":
				recaudacionQuinoto = recaudacionQuinoto + precioFinal;
			break;
		}
		//Punto C y D
		if(tipoDeViaje == "Internacional"){
			contadorViajesInternacionales++;
		}
		else{
			contadorViajesNacionales++;
		}
		//Punto F
		switch(tipoDeAsiento){
			case "economica":
				contadorPaqueteEconomico++;
			break;
			case "ejecutiva":
				contadorPaqueteEjecutivo++;
			break;
			case "primera clase":
				contadorPaquetePrimeraClase++;
			break;
		}
		cantidadTotalDePaquetesVendidos++;
		continua = confirm("Vender otro pasaje");
	}while(continua);

	
	//Punto B
	if(recaudacionPepepeposo > recaudacionHuesos && recaudacionPepepeposo > recaudacionQuinoto)
	{
		vendedorConMayorRecaudacion = "Pepepeposo";
		vendedorConMayorRecaudacionEnPesos = recaudacionPepepeposo;
	}
	else{
		if(recaudacionHuesos > recaudacionQuinoto){
			vendedorConMayorRecaudacion = "Huesos";
			vendedorConMayorRecaudacionEnPesos = recaudacionHuesos;
		}
		else{
			vendedorConMayorRecaudacion = "Quinoto";
			vendedorConMayorRecaudacionEnPesos = recaudacionHuesos;
		}
	}

	//Punto C
	porcentajeInternacional = contadorViajesInternacionales / cantidadTotalDePaquetesVendidos * 100;
	porcentajeNacional = contadorViajesNacionales / cantidadTotalDePaquetesVendidos * 100;

	//Punto F
	promedioEconomica = cantidadTotalDePaquetesVendidos / contadorPaqueteEconomico;
	promedioEjecutivo = cantidadTotalDePaquetesVendidos / contadorPaqueteEjecutivo;
	promedioPrimeraClase = cantidadTotalDePaquetesVendidos / contadorPaquetePrimeraClase;

	mensaje = "\nEl total recaudado por cada vendedor";
	mensaje += "\nQuinoto vendio un total de: $"+recaudacionQuinoto;
	mensaje += "\nPepeposo vendio un total de: $"+recaudacionPepepeposo;
	mensaje += "\nHuesos vendio un total de: $"+recaudacionHuesos;
	mensaje += "\nEl vendedor que mas recaudo fue: "+vendedorConMayorRecaudacion+" con un total de: $"+vendedorConMayorRecaudacionEnPesos;
	mensaje += "\nEl porcentaje de paquetes de viajes internaciones es: %"+porcentajeInternacional;
	mensaje += "\nEl porcentaje de paquetes de viajes nacionales es: %"+porcentajeNacional;
	mensaje += "\nLos promedios de ventas segun el tipo de pasaje es:";
	mensaje += "\nPromedio de paquetes clase economica: "+promedioEconomica;
	mensaje += "\nPromedio de paquetes clase ejecutiva: "+promedioEjecutivo;
	mensaje += "\nPromedio de paquetes primera clase: "+promedioPrimeraClase;

	alert(mensaje);
}
}

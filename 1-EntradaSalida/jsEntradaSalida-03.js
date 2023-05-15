/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
// function mostrar()
// {
// 	 //declaro variable
// 	 let dato;
// 	 let mensaje;
// 	 //asigno valor          IMPORTANTE .value es para que me pueda leer txtIdNombre
// 	 dato = document.getElementById("txtIdNombre").value;
// 	 //muestro ventana emergente con devolucion de dato
// 	 mensaje = " Su nombre ES : " + dato;
// 	  alert(mensaje);

// 	// let nombreIngresado;
// 	// //HTML  traemos el elemento del ID el valor!!!
// 	// nombreIngresado = document.getElementById("txtIdNombre").value;

// 	// alert(nombreIngresado);

// }
/*Ejercicio 3.bis: Ingresar descripción (por prompt) y precio de un producto (por id).
El programa deberá mostrar por alert la descripción del producto 
junto al precio aumentado en un 30%. 
Pueden utilizar el html del ejercicio 3 para resolverlo.*/
// function mostrar()
// {
// 	//txtIdNombre
// 	let descripcion;
// 	let precioConAumento;
// 	let precio;
// 	let total;
// 	let mensaje;

// 	descripcion = prompt("precio");
// 	precio = document.getElementById("txtIdNombre").value;

// 	precio = parseInt(precio);

// 	precioConAumento = (precio * 30) / 100;
// 	total = precio + precioConAumento;

// 	mensaje = "El precio es : " +  precio + " con un aumento de : " +  precioConAumento + " total a pagar es: " + total;

// 	alert(mensaje);






// }
/* Ejercicio 5.bis: 
 se debe mostrar un mensaje :
 "Perez , usted se llama jose y tiene 66 años"
se debe optener el apellido , de la manera que puedan*/
// function mostrar()
// {
// 	let nombre;
// 	let apellido;
// 	let mensaje;

// 	nombre = "Jose";
// 	apellido = "Perez";

// 	document.getElementById("txtIdNombre").value = apellido;
// 	mensaje = "Perez , usted se llama jose y tiene 66 años";

// 	alert(mensaje)

// }
function mostrar()
{/*Se ingresará por id el valor de una compra de productos para el hogar. Se deberá agregar el iva (21%) y  
luego se deberá restar el 5% en concepto de compra mayorista.
 El programa deberá mostrar por alert importe bruto, el iva, el importe con iva, el valor del descuento y el total a pagar. */
	//txtIdNombre

// 	let compraProducto;
// 	let precioConIva;
// 	let totalConIva;
// 	let IVA;
// 	let compraPorMayor;
// 	let mensaje;
// 	let total;
	
// 	IVA = 21;

// 	compraProducto = document.getElementById("txtIdNombre").value;
// 	//se parsea para que los tome como numeros y NO texto
// 	compraProducto = parseInt(compraProducto);

// 	precioConIva = compraProducto * IVA / 100;
// 	totalConIva = compraProducto + precioConIva;

	
// 	compraPorMayor = totalConIva * 5 / 100;
// 	total = totalConIva - compraPorMayor;

	

// 	mensaje = "La compra en bruto es " + compraProducto + "\n" +
// 	" el IVA es " + IVA + "\n" +
// 	" el importe con IVA es " + totalConIva + "\n" +
// 	"el valor del descuento por comprar al mayor es de 5%, descontando : " + compraPorMayor + "\n" +
// 	" el precio total a pagar  con descuento " + total;


//   alert(mensaje);


/*
EJERCICIO 2
El dueño de una tienda dedicada a la compra/venta de cartas de Yu-Gi-Oh! desea ingresar en el
sistema las ventas realizadas en el dia de la fecha y conocer ciertos datos en base a las cartas
que se vendieron.
Se ingresara hasta que el usuario decida:
* Nombre de la carta.
* Tipo de carta: Validar "monstruo", "magica", "trampa".
* Rareza: Validar "rara", "super rara", "ultra rara".
* Precio: Validar que no sea 0 o negativo.
Se pide informar por document.write:
A) El nombre y rareza  de la carta tipo "trampa" con mayor precio.
B) Cuantas cartas de rareza "ultra rara" y de tipo "magica" o "monstruo" fueron vendidas.
C) El promedio de precio de las cartas de por tipo.
*/

// let nombreCarta;
// let tipoCarta;
// let rareza;
// let precio;
// let respuesta = true;
// let banderaMayorPrecio = true;
// let mayorPrecio;
// let nombreMayorPrecio;
// let contadorMagica = 0;
// let contadorUltra = 0;
// let contadorMonstruo = 0;
// let acumuladorMagica = 0;
// let acumuladorTrampa = 0;
// let acumuladorUltra = 0;
// let promedioMagica;
// let promedioUltra;
// let promedioTrampa;
// let rarezaMayor;
// let TotalVenta;


// while (respuesta == true) {

// 		nombreCarta = prompt("Ingrese nombre Carta ");

// 		tipoCarta = prompt("Ingrese tipoCarta entre monstruo, magica, trampa");
// 		while(!isNaN(tipoCarta) && tipoCarta != "monstruo" && tipoCarta != "magica" && tipoCarta != "trampa" ){
// 		tipoCarta = prompt("Error. Ingrese tipoCarta entre monstruo, magica, trampa");
// 		}

// 		rareza = prompt("Ingrese rareza entre  rara, super rara, ultra rara");
// 		while(rareza != "rara" && rareza != "super rara" && rareza != "ultra rara" ){
// 		rareza = prompt("Error. Ingrese rareza entre  rara, super rara, ultra rara");
// 		}

// 		precio = parseFloat(prompt("Ingrese precio"));
// 		while(isNaN(precio) || precio < 0 || precio > 10){
// 		precio = parseFloat(prompt("Error. Ingrese  precio "));
// 		}
// 		// A) El nombre y rareza  de la carta tipo "trampa" con mayor precio.
// 		// B) Cuantas cartas de rareza "ultra rara" y de tipo "magica" o "monstruo" fueron vendidas.
// 		// C) El promedio de precio de las cartas de por tipo.


// 		switch (tipoCarta) {
// 			case "trampa":
// 				if (banderaMayorPrecio == true || precio > mayorPrecio) {
// 					mayorPrecio = precio;
// 					nombreMayorPrecio = nombreCarta;
// 					rarezaMayor = rareza
// 					banderaMayorPrecio = false
// 				}
// 				acumuladorTrampa = acumuladorTrampa + precio;
				
// 				break;
// 			case "magica":
// 				if(rareza == "ultra rara"){
// 				contadorMagica = contadorMagica + 1;
// 				}
// 				acumuladorMagica = acumuladorMagica + precio;
// 				break;
// 				case "monstruo":
// 					if(rareza == "ultra rara"){
// 						contadorUltra = contadorUltra + 1;
// 					}
// 					acumuladorUltra = acumuladorUltra + precio;
// 					contadorMonstruo = contadorMonstruo + 1;
// 					break;
// 		}

	
// 		respuesta = confirm("desea ingresar otro dato")







// }//fin while

// TotalVenta = contadorMagica + contadorUltra;
// if (contadorMagica != 0) {
// 	promedioMagica = acumuladorMagica / contadorMagica;
// }else{
// 	promedioMagica = "No hubo vta de magica"
// }
// if (contadorMonstruo != 0) {
// 	promedioTrampa = acumuladorTrampa / contadorMonstruo;
// }else{
// 	promedioTrampa = "No hubo vta MONSTRUO"
// }
// if (contadorUltra != 0) {
// 	promedioUltra = acumuladorUltra / contadorUltra;
// }else{
// 	promedioUltra = "No hubo vta de ultra"
// }

// if (banderaMayorPrecio == false) {
// 	console.log("El nombre y rareza  de la carta tipo trampa con mayor precio." + nombreMayorPrecio + rarezaMayor);
// }else{
// 	console.log("NO hubo vta de tipo trampa");
// }

// console.log("El nombre y rareza  de la carta tipo trampa con mayor precio." + nombreMayorPrecio + rarezaMayor);
// console.log(" Cuantas cartas de rareza ultra rara y de tipo magica o monstruo fueron vendidas." + TotalVenta );
// console.log(promedioMagica);
// console.log(promedioTrampa);
// console.log(promedioUltra);


/*
debemos cargar 10 productos que acaban de llegar a la empresa 
"Galletitas Felices", para cada producto se debe registrar:
*marca del producto
* Tipo de galletita : "con sal", "sin sal", "dulces".
* cantidad de cajas: mas de 0
* cantidad de kilos por caja:mas de 0
* nombre proveedor
* origen: "nacional", "mercosur", "resto del mundo"

a) el tipo con la mayor cantidad de cajas.
b) de las galletitas de origen nacional, la que menos kilos tiene por caja.
c) que porcentaje de cajas hay sobre el total de cada origen 
[ej: 30% nacional ,30% mercosur, 40% resto del mundo ( debe sumar 100)]
*/
	let marca;
	let tipo;
	let cantidadCajas;
	let cantidadKilos;
	let nombreProveedor;
	let origen;
	let respuesta = true;
	let acumuladorSal = 0;
	let acumuladoSinSal = 0;
	let acumuladorDulve = 0;
	let menosKilos;
	let nombreMenos;
	let conatdorSal = 0;
	let contadorSinSal = 0;
	let contadorDulce = 0;
	let contadorGeneral = 0;
	let porcentajeSal;
	let porcentajeSin;
	let porcentajeDulce;
	let tipoMayor;
	let banderaMenosKilos = true;




	while (respuesta == true) {

		marca = prompt("Ingrese nombre marca ");
		nombreProveedor = prompt("Ingrese nombre proveedor ");

		tipo = prompt("Ingrese tipo entre con sal, sin sal, dulces");
		while (tipo != "sal" && tipo != "sin sal" && tipo != "dulces") {
			tipo = prompt("Error. Ingrese tipo entre con sal, sin sal, dulces");
		}
		cantidadCajas = parseInt(prompt("Ingrese cantidad Cajas"));
		while (isNaN(cantidadCajas) && cantidadCajas < 1 || cantidadCajas > 100) {
			cantidadCajas = parseInt(prompt("Error. Ingrese  cantidad Cajas "));
		}
		cantidadKilos = parseFloat(prompt("Ingrese cantidad Cajas"));
		while (isNaN(cantidadKilos) || cantidadKilos < 1 || cantidadKilos > 100) {
			cantidadKilos = parseFloat(prompt("Error. Ingrese  cantidad Cajas "));
		}

		origen = prompt('Ingrese origen entre  "nacional", "mercosur", "resto del mundo"');
		while (origen != "nacional" && origen != "mercosur" && origen != "resto del mundo") {
			origen = prompt('Error. Ingrese origen entre  "nacional", "mercosur", "resto del mundo"');
		}

		// a) el tipo con la mayor cantidad de cajas.
		// b) de las galletitas de origen nacional, la que menos kilos tiene por caja.
		// c) que porcentaje de cajas hay sobre el total de cada origen 
		// [ej: 30% nacional ,30% mercosur, 40% resto del mundo ( debe sumar 100)]

		switch (tipo) {
			case "sal":
				acumuladorSal = acumuladorSal + cantidadCajas;
				conatdorSal = conatdorSal + 1;
				break;

			case " sin sal":
				acumuladoSinSal = acumuladoSinSal + cantidadCajas;
				contadorSinSal = contadorSinSal + 1;
				break;
			case "dulces":
				acumuladorDulve = acumuladorDulve + cantidadCajas;
				contadorDulce = contadorDulce + 1;
				break;
		}
		if (origen == "nacional" && (banderaMenosKilos == true || cantidadKilos < menosKilos)) {// b) de las galletitas de origen nacional, la que menos kilos tiene por caja.
			menosKilos = cantidadKilos;
			nombreMenos = marca;
			banderaMenosKilos = false;
		}

		contadorGeneral = contadorGeneral + 1;
		respuesta = confirm("desea ingresar otro dato")







	}//fin while

	if (acumuladoSinSal > acumuladorDulve && acumuladoSinSal > acumuladorSal) {
		tipoMayor = "sin sal"
	} else if (acumuladorDulve > acumuladorSal) {
		tipoMayor = "dulce"
	} else {
		tipoMayor = "sal"
	}

	if (conatdorSal != 0) {
		porcentajeSal = conatdorSal * 100 / contadorGeneral;
	} else {
		porcentajeSal = "no hubo con sal"
	}

	if (contadorSinSal != 0) {
		porcentajeSin = contadorSinSal * 100 / contadorGeneral;
	} else {
		porcentajeSin = "no hubo con sin sal"
	}

	if (contadorDulce != 0) {
		porcentajeDulce = contadorDulce * 100 / contadorGeneral;
	} else {
		porcentajeDulce = "no hubo con dulce"
	}
	// a) el tipo con la mayor cantidad de cajas.
	// b) de las galletitas de origen nacional, la que menos kilos tiene por caja.
	// c) que porcentaje de cajas hay sobre el total de cada origen 
	// [ej: 30% nacional ,30% mercosur, 40% resto del mundo ( debe sumar 100)]

	console.log("el tipo con la mayor cantidad de cajas." + tipoMayor);
	console.log("de las galletitas de origen nacional, la que menos kilos tiene por caja." + menosKilos);
	console.log("que porcentaje de cajas hay sobre el total de cada origen" + porcentajeDulce + " hay dulce" + porcentajeSal + " hay con sal " + porcentajeSin + " hay sin sal");

}



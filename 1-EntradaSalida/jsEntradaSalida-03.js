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
function mostrar()
{
	//txtIdNombre
	let descripcion;
	let precioConAumento;
	let precio;
	let total;
	let mensaje;

	descripcion = prompt("precio");
	precio = document.getElementById("txtIdNombre").value;

	precio = parseInt(precio);

	precioConAumento = (precio * 30) / 100;
	total = precio + precioConAumento;

	mensaje = "El precio es : " +  precio + " con un aumento de : " +  precioConAumento + " total a pagar es: " + total;

	alert(mensaje);






}
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



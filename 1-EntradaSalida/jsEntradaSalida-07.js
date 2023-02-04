/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
// function sumar()
// {	
// 	//txtIdNumeroUno
// 	//txtIdNumeroDos
// 	// let numeroUno;
// 	// let numeroDos;
// 	// let suma;
// 	// let mensaje;

// 	// numeroUno = document.getElementById("txtIdNumeroUno").value;
// 	// numeroDos = document.getElementById("txtIdNumeroDos").value;

// 	// numeroUno = parseInt(numeroUno);
// 	// numeroDos = parseInt(numeroDos);
// 	// suma = numeroUno + numeroDos;
// 	// mensaje = " la suma totan de " + numeroUno + " + " + numeroDos + " es : " + suma;

	
// 	// alert(mensaje);	
// 	/*Ejercicio 8.bis: Ingresar dos numeros por id
// Se pide:
// mostrar por alert:
// a) La suma de los dos numeros
// b) El promedio de los numeros
// c) El modulo de los numeros (el primero en modulo del segundo) */
// }
function mostrar()
{
	//txtIdNumeroUno
   //txtIdNumeroDos

	let numeroUno;
	let numeroDos;
	let suma;
	let mensaje;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	
	suma = numeroUno + numeroDos;
	mensaje = " la suma es " + suma;

	alert(mensaje)







	
}


function restar()
{
	
		//txtIdNumeroUno
	//txtIdNumeroDos
	let numeroUno;
	let numeroDos;
	let resta;
	let mensaje;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	resta = numeroUno - numeroDos;
	mensaje = " la resta total de " + numeroUno + " - " + numeroDos + " es : " + resta;

	
	alert(mensaje);	
}

function multiplicar()
{ 
	
		//txtIdNumeroUno
	//txtIdNumeroDos
	let numeroUno;
	let numeroDos;
	let multiplicar;
	let mensaje;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	multiplicar = numeroUno * numeroDos;
	mensaje = " la multiplicación total de " + numeroUno + " * " + numeroDos + " es : " + multiplicar;

	
	alert(mensaje);	
}

function dividir()
{
		//txtIdNumeroUno
	//txtIdNumeroDos
	let numeroUno;
	let numeroDos;
	let dividir;
	let mensaje;

	numeroUno = document.getElementById("txtIdNumeroUno").value;
	numeroDos = document.getElementById("txtIdNumeroDos").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	dividir = numeroUno / numeroDos;
	mensaje = " la division total de " + numeroUno + " / " + numeroDos + " es : " + dividir;

	
	alert(mensaje);	
}


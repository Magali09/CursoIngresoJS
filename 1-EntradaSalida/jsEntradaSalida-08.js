/*Magali Cristofori div B
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
// function SacarResto()
// {
// 	//txtIdNumeroDividendo
// 	//txtIdNumeroDivisor
// 	let numeroDividendo;
// 	let numeroDivisor;
// 	let resto;
// 	let resultado;

// 	numeroDividendo = document.getElementById("txtIdNumeroDividendo").value;
// 	numeroDivisor = document.getElementById("txtIdNumeroDivisor").value;

// 	numeroDividendo = parseInt(numeroDividendo);
// 	numeroDivisor = parseInt(numeroDivisor);

// 	resto = numeroDividendo % numeroDivisor;
// 	resultado = "El resto es: " + resto;

// 	alert(resultado);
// }
// 	/*Ejercicio 8.bis: Ingresar dos numeros por id
// Se pide:
// mostrar por alert:
// a) La suma de los dos numeros
// b) El promedio de los numeros
// c) El modulo de los numeros (el primero en modulo del segundo) */
// }
function SacarResto()
{

	let numeroUno;
	let numeroDos;
	let suma;
	let modulo;
	let promedio;
	let mensaje;

	numeroUno = document.getElementById("txtIdNumeroDividendo").value;
	numeroDos = document.getElementById("txtIdNumeroDivisor").value;

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	
	suma = numeroUno + numeroDos;
	
	mensaje = " la suma es " + suma;

	// alert(mensaje);
	console.log(mensaje);

	promedio = suma / 2;

	mensaje = " El promedio es :" + promedio;
	// alert(mensaje);
	console.log(mensaje);
	modulo = numeroUno % numeroDos;

	mensaje = "El modulo es : " + modulo;

	// alert(mensaje);
	console.log(mensaje);











	
}

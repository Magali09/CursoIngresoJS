/* al presionar el botón pedir un número. Informar si el numero es PRIMO o no.
cristofori magalí*/
function mostrar()
{
	let numero;
	let numeroPrimo;
	let mensaje;

	numero = parseInt(prompt("ingrese un número"));
	numeroPrimo = true;

	for (let i = 2; i < numero ; i++) {
		
		if(numero % i == 0 )
		{
			numeroPrimo = false;

		}
		
	}

	if(numeroPrimo == true)
	{
		mensaje = "Es numero primo"
	}
	else
	{
		mensaje = "No es primo"
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN

//EJERCICIO 8 OTRA MANERA DE RESOLVERLO!!!!!!!!!!!!!
// function mostrar()
// {
// 	let numeroIngresado;
// 	let contadorDivisores;

// 	numeroIngresado = parseInt(prompt("Ingrese un número"));
// 	contadorDivisores = 0;

// 	for (let i = 1; i < numeroIngresado; i++)
// 	{
// 		if(numeroIngresado % i == 0)
// 		{
// 			contadorDivisores = contadorDivisores + 1;
// 			console.log(i);
// 		}
		
// 	}
// 	if (contadorDivisores == 0)
// 	{
// 		alert("es numero primo")
// 	}
// 	else
// 	{
// 		alert("NO es numero primo")
// 	}
	
// }
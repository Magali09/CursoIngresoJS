// /*
// Al presionar el botón pedir  números  hasta que el usuario quiera,
// mostrar el número máximo y el número mínimo ingresado.*/
// function mostrar()
// {	// declarar variables
// 	var banderaDelPrimero;
// 	var numeroIngresado;
// 	var numeroMaximo;
// 	var numeroMinimo;
// 	var respuesta;

// 	//iniciar variables
// 	banderaDelPrimero = true;
// 	respuesta='si';

// 	while(respuesta=="si")
// 	{
// 		numeroIngresado = prompt("Ingrese un numero");
// 		numeroIngresado = parseInt(numeroIngresado);
		
// 		while(isNaN(numeroIngresado)){

// 			numeroIngresado = prompt("Erros, Ingrese un numero!!!");
// 			numeroIngresado = parseInt(numeroIngresado);
// 		}

// 		if(banderaDelPrimero)
// 		{
// 			numeroMaximo = numeroIngresado;
// 			numeroMinimo = numeroIngresado;
// 			banderaDelPrimero = false;

// 		}else if (numeroIngresado > numeroMaximo) {

// 			numeroMaximo = numeroIngresado;

// 		}else if(numeroIngresado < numeroMinimo){

// 			numeroMinimo = numeroIngresado;
// 		}


// 		respuesta=prompt("desea continuar? si/no");
// 	}//Fin while

// 	 document.getElementById("txtIdMaximo").value=numeroMaximo;
// 	 document.getElementById("txtIdMinimo").value=numeroMinimo;
	
// }//FIN DE LA FUNCIÓN


/*While 9 bis: Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
El menor de los pares y el mayor de los negativos ...(solo si hay) */
function mostrar()
{
	//txtIdMaximo
	//txtIdMinimo

	let numero;
	let menorPar = 0;
	let numeroMayor = 0;
	let numeroMenor = 0;
	let mayorNegativos = 0;
	let banderaDelPrimero = true;
	let repuesta = true;
	


	
	while (repuesta == true) 
	{
		numero = parseInt(prompt("Ingrese un numero"));

		if (banderaDelPrimero) {
			
			numeroMayor = numero;
			numeroMenor = numero;
			banderaDelPrimero = false;

		
		}else if(numero > numeroMayor)
		{
			numeroMayor = numero;

		}else if(numero < numeroMenor)
		{
			numeroMenor = numero;
		}

		if (numero % 2 == 0)
		{
			if (numero < menorPar) 
			{
				menorPar = numero;
			}
		}
		if(numero < mayorNegativos)
		{
			mayorNegativos = numero;
		}

		repuesta = confirm("¿¿Quiere ingresar otro numero??")
		
	}//fin while

	alert(numeroMayor)
	alert(numeroMenor)
	alert(mayorNegativos)
	alert(menorPar)
	
}







	
 
/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos. *
2-Suma de los positivos. *
3-Cantidad de positivos. *
4-Cantidad de negativos. *
5-Cantidad de ceros.	 *
6-Cantidad de números pares. *
7-Promedio de positivos.     *
8-Promedios de negativos.    *
9-Diferencia entre positivos y negativos, (positvos-negativos).
Cristofori Magalí */
function mostrar()
{
	//declarar contadores y variables 
	let numeroIngresado;
	let sumaPositivos;
	let sumaNegativos;
	let contadorPositivos;
	let contadorNegativos;
	let contadorCeros;
	let contadorPares;
	let promedioPositivos;
	let promedioNegativos;
	let diferencia;
	let respuesta;


	respuesta="si";
	sumaPositivos = 0;
	sumaNegativos = 0;
	contadorNegativos = 0;
	contadorPositivos = 0;
	contadorPares = 0;
	contadorCeros = 0;

	//generar un bucle del tipo mientras el usuario quiera
	//codigo dentro del bucle
	//pido un numero dentro del bucle
	//que tengo que hacer con el numero??
	//analizar el signo del numero
	//analizar si la pariedad del nuemro

	//codigo despues del bucle
	//hacer calculos que necesitan los datos conseguidos durante el bucle


	


	while(respuesta =="si")
	{		
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		
		while(isNaN(numeroIngresado)){

			numeroIngresado = prompt("Erros, Ingrese un numero!!!");
			numeroIngresado = parseInt(numeroIngresado);
		}

		//1-Suma de los negativos. 
		//4-Cantidad de negativos.
		if(numeroIngresado < 0)
		{	
			sumaNegativos = sumaNegativos + numeroIngresado;
			contadorNegativos = contadorNegativos + 1;
		}
		else if(numeroIngresado > 0)
		{	//2-Suma de los positivos.
			//3-Cantidad de positivos.
			sumaPositivos = sumaPositivos + numeroIngresado;
			contadorPositivos = contadorPositivos + 1;
		}
		else
		{	//5-Cantidad de ceros.
			contadorCeros = contadorCeros + 1;
		}
		if (numeroIngresado % 2 == 0)
		{	//6-Cantidad de números pares.
			
			contadorPares = contadorPares + 1;
		}
		
		// acumuladorNegativos = acumuladorNegativos + numeroIngresado;
		// acumuladorPositivos = acumuladorPositivos + numeroIngresado;

		respuesta=prompt("desea continuar? si/no");

	}//fin del while


	//7-Promedio de positivos.
	//8-Promedios de negativos.
	promedioNegativos = sumaNegativos / contadorNegativos;
	promedioPositivos = sumaPositivos / contadorPositivos; 

	diferencia = sumaPositivos -sumaNegativos;

	document.write("la suma de contador negativos es :" + contadorNegativos + "<br>");
	document.write("la suma de contador positivos es :" + contadorPositivos + "<br>");
	document.write("la suma de contador negativos es :" + contadorNegativos + "<br>");
	document.write("la suma de negativos es :"+ sumaNegativos + "<br>");
	document.write("la suma de positivos es :"+ sumaPositivos + "<br>");
	document.write("la suma de contador de ceros es :"+ contadorCeros + "<br>");
	document.write("cantidad de pares es :"+ contadorPares + "<br>");
	document.write("el promedio de positivos es :"+ promedioPositivos + "<br>");
	document.write("el promedio de negativos es :"+ promedioNegativos + "<br>");
	document.write("la diferencia entre positivos y negativos es :"+ diferencia + "<br>");
	// document.write("el promedio de positivos es :"+ promedioPositivos + "<br>");
}//FIN DE LA FUNCIÓN
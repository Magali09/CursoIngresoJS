/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.
Cristofori Magalí*/
function mostrar()
{
	let numeroIngresado;
	let contador;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;

	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		contador = contador + 1;
		while(isNaN(numeroIngresado)){

			numeroIngresado = prompt("Erros, Ingrese un numero!!!");
			numeroIngresado = parseInt(numeroIngresado);
		}
		if (numeroIngresado > 0) 
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
		}
		else
		{
		 multiplicacionNegativos = numeroIngresado * multiplicacionNegativos;

		}
		respuesta = prompt("Desea ingresar otro numero: / si")
	}

	if(multiplicacionNegativos == 1)
	{
		multiplicacionNegativos = 0;
	}


	document.getElementById("txtIdSuma").value=sumaPositivos;
	document.getElementById("txtIdProducto").value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN
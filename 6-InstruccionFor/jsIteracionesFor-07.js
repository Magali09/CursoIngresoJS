/*al presionar el botón pedir un número. 
mostrar los numeros divisores desde el 1 al número ingresado,
 y mostrar la cantidad de numeros divisores encontrados.
 Cristofori Magalí */
function mostrar()
{
	let numeroIngresado;
	let contadorDivisores;

	numeroIngresado = parseInt(prompt("Ingrese un número"));
	contadorDivisores = 0;

	for (let i = 1; i < numeroIngresado; i++)
	{
		if(numeroIngresado % i == 0)
		{
			contadorDivisores = contadorDivisores + 1;
			
		}
		
	}
	console.log(contadorDivisores);


}//FIN DE LA FUNCIÓN
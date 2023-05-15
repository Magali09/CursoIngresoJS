/* al presionar el botón pedir un número.
 mostrar los numeros pares desde el 1 al número ingresado, 
 y mostrar la cantidad de numeros pares encontrados.
Cristofori Magalí*/

 
function mostrar()
{
	let numeroIngresado;
	let contadorPares = 0;
	

	//Pido el numero al usuario
	numeroIngresado= parseInt(prompt("Ingrese un número"));
					//DE ESTA MANERA LA VARIABLE I TOMAS LOS VALORES HASTA EL NUEMRO INGRESADO
	for (let i = 1; i < numeroIngresado; i++) 
	{
		if(i % 2 == 0)
		{
			contadorPares = contadorPares + 1;
			console.log(i);
		}
		
	}
	console.log("cantidad de pares es " + contadorPares);


}//FIN DE LA FUNCIÓN
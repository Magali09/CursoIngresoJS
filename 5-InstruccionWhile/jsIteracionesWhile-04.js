/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.
Cristofori Magalí*/
function mostrar()
{
	let numeroIngresado;
	

	numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	

	//validar que me ingresaron un numero
	while(isNaN(numeroIngresado)|| numeroIngresado < -1 || numeroIngresado > 10)
	{
		numeroIngresado = prompt("Error, ingrese un número entre 0 y 10.");
		numeroIngresado = parseInt(numeroIngresado);
		

		
	}

	
	document.getElementById("txtIdNumero").value = numeroIngresado;
	
}//FIN DE LA FUNCIÓN
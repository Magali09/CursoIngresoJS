/* Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
Cristofori Magalí*/

function mostrar()
{
	let contador;
	let sumaAcumulada;
	let numeroIngresado;
	let promedio;
	

	
	contador=0;
	sumaAcumulada=0;
	
		for (let i = 0; i < 2; i++) 
		{
			numeroIngresado = prompt("Ingrese un numero");
			numeroIngresado = parseInt(numeroIngresado);
	
			contador = contador + 1;
			sumaAcumulada = sumaAcumulada + numeroIngresado;
			
		
		}//fin del for

		
			promedio = sumaAcumulada / contador;
		
			document.getElementById("txtIdSuma").value = sumaAcumulada;
			document.getElementById("txtIdPromedio").value = promedio;

	

}//FIN DE LA FUNCIÓN
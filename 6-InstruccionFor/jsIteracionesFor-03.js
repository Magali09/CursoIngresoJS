/* presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA" 
Cristofori Magali*/
function mostrar()
{
	

	var repetciones =parseInt(prompt("ingrese el número de repeticiones"));

	for (let i = 0; i < repetciones; i++) {
		
					//poniendo al variable i te muestra la cantidad de veces que se pedio la repeticion en el consol.log
		console.log(i + "Hola UTN FRA");
	}
	


}//FIN DE LA FUNCIÓN
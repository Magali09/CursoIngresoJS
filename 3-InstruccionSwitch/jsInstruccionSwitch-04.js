/* al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
Cristofori Magalí*/
function mostrar()
{
	//txtIdMes
	let mesDelAño;
	let mensaje;


	mesDelAño = document.getElementById("txtIdMes").value;

	switch (mesDelAño) {
		case "Febrero":
			mensaje ="si tiene 28 días.";
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			mensaje = "si tiene 30 días.";
			break;
		default:
			mensaje = "si tiene 31 días.";
			break;

	}//fin de switch
	
	alert(mensaje);
	
	



}//FIN DE LA FUNCIÓN
/* Al seleccionar un destino informar si hace FRIO o CALOR en ese destino
Cristofori Magalí*/
function mostrar()
{
	let destinoIngresado;
	let mensaje;

	 destinoIngresado = document.getElementById("txtIdDestino").value;

	 switch (destinoIngresado) {
		case "Bariloche":
			mensaje = "Hace Frio";
			break;
		case "Cataratas":
			mensaje = "Hace Calor";
			break;
		case "Mar del plata":
			mensaje = "Hace Calor";
		break;
		case "Ushuaia":
			mensaje = "Hace Frio";
			break;
	 }
	alert(mensaje);

}//FIN DE LA FUNCIÓN
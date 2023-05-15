/* Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste
Cristofori Magalí*/
function mostrar()
{
	let destinoIngresado;
	let mensaje;

	 destinoIngresado = document.getElementById("txtIdDestino").value;

	 switch (destinoIngresado) {
		case "Bariloche":
			mensaje = "Punto Cardinal Oeste";
			break;
		case "Cataratas":
			mensaje = "Punto Cardinal Norte";
			break;
		case "Mar del plata":
			mensaje = "Punto Cardinal Este";
		break;
		default:
			mensaje = "Punto Cardinal Sur";
			break;
	 }
	alert(mensaje);

}//FIN DE LA FUNCIÓN
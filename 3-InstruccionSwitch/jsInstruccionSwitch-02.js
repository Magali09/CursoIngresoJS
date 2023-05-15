/* al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
Cristofori Magalí*/

function mostrar()
{
	//txtIdMes
	let mesDelAño;
	let mensaje;

	 mesDelAño = document.getElementById("txtIdMes").value;

	 switch (mesDelAño) {
		case "Junio":
		case "Julio":
		case "Agosto":
			
		mensaje =  "Abrigate que hace frio.";
			break;
		case "Abril":
		case "Mayo":
			
		mensaje = "Falta para el invierno."
		break;
		default:
			mensaje ="Ya pasamos el frio, ahora calor!!!."
			break;
	 }
	alert(mensaje);




}//FIN DE LA FUNCIÓN
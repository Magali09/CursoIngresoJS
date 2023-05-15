/*Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
Cristofori Magalí */
function mostrar()
{
	//tomo la hora
	let horaDelDia;
	let mensaje;


	 horaDelDia = document.getElementById("txtIdHora").value;
	 horaDelDia =  parseInt(horaDelDia);

	 switch (horaDelDia) {
		case 7:
		case 8:
		case 9:
		case 10:	
		case 11:	
			mensaje = "Es de mañana.";
			break;
		default:
			break;
	 
	 }//fin de switch

	alert(mensaje);
	
	



}//FIN DE LA FUNCIÓN
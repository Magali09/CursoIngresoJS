
/*al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "a clases!!!."
si es dici: "Felices fiestas" */
function mostrar()
{
	//txtIdMes
	let mesDelAño;
	let mensaje;


	 mesDelAño = document.getElementById("txtIdMes").value;

	 switch (mesDelAño) 
	 {
		case "Enero":
				mensaje ="que comiences bien el año!!!.";
			break;

		case "Marzo":
				mensaje="a clases!!!.";
			break;

		case "Julio":
				mensaje ="Llegaron las vacaciones.";
			break;

		default:
				mensaje =  "Felices fiestas";
			break;
	 }
	alert(mensaje);



}//FIN DE LA FUNCIÓN
/*Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
Magali Cristofori */
function mostrar()
{
	//txtIdEdad
	//estadoCivil
	let edadIngresada;
	let estadoCivil;
	let mensaje;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	estadoCivil = document.getElementById("estadoCivil").value;

	if(edadIngresada >= 18 && estadoCivil == "Soltero")
	{
		mensaje = "Es soltero y no es menor.";
		alert(mensaje);
	}
	
	


}//FIN DE LA FUNCIÓN
























/* Al ingresar una edad debemos informar solo si la persona es mayor de edad*/
function mostrar()
{
	//txtIdEdad
	
	
	let edad;
	let mensaje;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);

	if(edad >= 18){
		mensaje = "Usted es mayor de edad";
	}else{
		mensaje = "Es menor de edad"
	}
		alert(mensaje);

}//FIN DE LA FUNCIÓN
//operadores relacionales o condicionales < (menor que), > (mayor que), <= (menor o igual que), >= (mayor o igual que), == (igual) y !=(distinto)





































/*Al ingresar una edad solo debemos informar si la persona NO es adolescente. */
function mostrar()
{
	//txtIdEdad
	
	let edad;
	let mensaje;
	
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
	
	if(edad < 13 || edad >17){

		mensaje = "NO es un adolescente";
		
	}
	alert(mensaje);
	
}//FIN DE LA FUNCIÓN
//operadores relacionales o condicionales < (menor que), > (mayor que), <= (menor o igual que), >= (mayor o igual que), == (igual) y !=(distinto)






























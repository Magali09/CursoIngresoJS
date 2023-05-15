/*Al ingresar una edad debemos informar 
si la persona es mayor de edad (mas de 18 años) o 
adolescente (entre 13 y 17 años) o niño (menor a 13 años). 
Magalí Cristofori*/
function mostrar()
{
	//txtIdEdad
	
	let edad;
	let mensaje;

	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad);
		/*para usar && las dos condiciones tiene q ser verdaderas */
	if(edad >= 13 && edad <= 17){
		mensaje = "Usted es un adolescente";
	}
	else{
		if(edad >= 18){
			mensaje = "Usted es un adulto";
		}else{
			mensaje = "Us un niñ@"
		}
	}
	alert(mensaje);



}//FIN DE LA FUNCIÓN






























/*Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", 
mostrar el siguiente mensaje: 'Es muy pequeño para No ser soltero
Magalí Cristofori*/
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

	if(edadIngresada < 18 && estadoCivil != "Soltero")
	{//importante chequear como esta escrito Soltero en el html y escribirlo de igual forma

		mensaje = " Es muy pequeño para NO ser soltero"
		alert(mensaje);// si el alert lo hago afuera del if me lo muestra siempre y como la condicion pide que lo muestre solo cuando es verdadera debo ponerlo dentro del IF
	}
	
	

	


}//FIN DE LA FUNCIÓN


























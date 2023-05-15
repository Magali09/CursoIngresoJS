
//al presionar el botón pedir la CLAVE (ayuda: es utn750)
function mostrar()
{
 let clave;
 let mensaje;

 clave = prompt ("ingrese su clave");
 clave = parseInt(clave);

 	while(clave != "utn750")
 	{
		clave = prompt("clave incorrecta");
	
	}//fin while

	mensaje = "exitosa su clave"
	alert(mensaje);



}






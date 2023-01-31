/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	 //declaro variable
	 let dato;
	 let mensaje;
	 //asigno valor
	 dato = document.getElementById("txtIdNombre").value;
	 //muestro ventana emergente con devolucion de dato
	 mensaje = prompt("escriba su nombre","aqui");
	  alert(mensaje);

}



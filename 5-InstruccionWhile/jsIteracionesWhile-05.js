/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.
Cristofori Magalí*/
function mostrar()
{
	let sexoIngresado;

	sexoIngresado = prompt("ingrese f ó m");
	
	while (sexoIngresado!="f" && sexoIngresado!="m")
	 {
		sexoIngresado=prompt("ingrese f ó m");
		
	}


	document.getElementById("txtIdSexo").value=sexoIngresado;
}
/*
let sexoIngresado;

	sexoIngresado = prompt("ingrese f ó m");
	
	while (!isNaN(sexoIngresado) && sexoIngresado!="f" && sexoIngresado!="m")
	 {
		sexoIngresado=prompt("ingrese f ó m");
		
	}


	document.getElementById("txtIdSexo").value=sexoIngresado;
*/
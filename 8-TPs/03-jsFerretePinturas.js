/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
f (32 ºf - 32) x 5/9
C (0 ºc x 9/5) + 32*/
function FahrenheitCentigrados () 
{
	//txtIdTemperatura
	let fahrenheit;
	let centigrados;
	let mensaje;

	fahrenheit = document.getElementById("txtIdTemperatura").value;

	fahrenheit = parseFloat(fahrenheit);

	centigrados = (fahrenheit - 32) * 5/9;

	mensaje= fahrenheit + " Fahrenheit son: " + centigrados;
	alert(mensaje);
}

function CentigradosFahrenheit () 
{
	let fahrenheit;
	let centigrados;
	let mensaje;
	

	centigrados = document.getElementById("txtIdTemperatura").value;

	centigrados = parseFloat(centigrados);

	fahrenheit = (centigrados * 9/5) + 32;

	mensaje= centigrados + " Centigrados son: " + fahrenheit;
	alert(mensaje);
}

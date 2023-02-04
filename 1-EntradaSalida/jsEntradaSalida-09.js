/*Magali Cristofori div B
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
// function mostrarAumento()
// {
// 	//txtIdSueldo
// 	//txtIdResultado
// 	let sueldo;
// 	let aumento;
// 	let resultado;

// 	sueldo = document.getElementById("txtIdSueldo").value;
	
// 	sueldo = parseInt(sueldo);

// 	aumento = (sueldo *10) / 100;
// 	resultado = sueldo + aumento;

// 	document.getElementById("txtIdResultado").value = resultado;

	
// }
/* Ejercicio 10.bis: Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
pedirle al usuario un % de descuento y mostrar el importe en el cuadro de texto "RESULTADO"
*/
function mostrarAumento()
{
	let pago;
	let descuento;
	let resultado;

	pago = document.getElementById("txtIdSueldo").value;
	
	pago = parseInt(pago); 

	//100 * 25 = 250
	descuento = (pago *10) / 100;
	//100 - 250
	resultado = pago - descuento;

	document.getElementById("txtIdResultado").value = resultado;



}
/*Magali Cristofori div B
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{//clase SABADO	
	//Desde la consola entro sources para ver los errores que tengo en el codigo
	//txtIdImporte
	// txtIdResultado
   let importeIngreso;
   let porcentajeDescuentoIngresado;
   let importeDescuento;
   let importeTotal;

   importeIngreso = document.getElementById("txtIdImporte").value;//value traigo especificamente el valor del textbox!!!
   porcentajeDescuentoIngresado = prompt("Ingrese el porcentaje");
   importeIngreso = parseFloat(importeIngreso);
   
   //parseInt convierte a entero, se guarda edad, cantidades redondas, alturas de calle, ect
   //parseFloat toma importes con comas, se guarda sueldos, PI, ect

   importeDescuento = importeIngreso * 0.2;
   importeTotal =importeIngreso - importeDescuento;


   //GUARDO DE ESTA MANERA ME MUESTRA EL IMPORTE TOATL EN TXTBOX
   document.getElementById("txtIdResultado").value = importeTotal;






	
}

	// let importe;
	// let descuento;
	// let resultado;

	// importe = document.getElementById("txtIdImporte").value;

	// importe = parseInt(importe);

	// descuento = importe * 25 / 100;
	// resultado = importe - descuento;

	// document.getElementById("txtIdResultado").value = resultado;
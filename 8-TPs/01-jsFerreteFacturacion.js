/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).

*/
function Sumar () 
{
    //A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
    //txtIdPrecioUno
    //txtIdPrecioDos
    //txtIdPrecioTres
    let precioUno;
    let precioDos;
    let precioTres;
    let suma;
    let mensaje;

    //asinado a mis variables lo que ingreso el usuario por teclado
    precioUno = document.getElementById("txtIdPrecioUno").value;//"10"
    precioDos = document.getElementById("txtIdPrecioDos").value;//"100"
    precioTres = document.getElementById("txtIdPrecioTres").value;//"1000"

    //parseo de texto a numero
    precioUno = parseInt(precioUno);
    precioDos = parseInt(precioDos);
    precioTres = parseInt(precioTres);

    suma = precioUno + precioDos + precioTres;

    mensaje = "La suma total es : " + suma;

    alert(mensaje);
	
}
function Promedio () 
{
    //B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
	 //txtIdPrecioUno
    //txtIdPrecioDos
    //txtIdPrecioTres
    let numeroUno;
    let numeroDos;
    let numeroTres;
    let suma;
    let promedio;
    let mensaje;

    numeroUno = document.getElementById("txtIdPrecioUno").value;
    numeroDos = document.getElementById("txtIdPrecioDos").value;
    numeroTres = document.getElementById("txtIdPrecioTres").value;

    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);
    numeroTres = parseInt(numeroTres);

    suma = numeroUno + numeroDos + numeroTres;
    promedio = suma / 3

    mensaje = "La suma total es : " + promedio;

    alert(mensaje);
}
function PrecioFinal () 
{
    //C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
	//txtIdPrecioUno
    //txtIdPrecioDos
    //txtIdPrecioTres
    let numeroUno;
    let numeroDos;
    let numeroTres;
    let suma;
    let iva;
    let total;
    let mensaje;

    numeroUno = document.getElementById("txtIdPrecioUno").value;
    numeroDos = document.getElementById("txtIdPrecioDos").value;
    numeroTres = document.getElementById("txtIdPrecioTres").value;

    numeroUno = parseInt(numeroUno);
    numeroDos = parseInt(numeroDos);
    numeroTres = parseInt(numeroTres);

    suma = numeroUno + numeroDos + numeroTres;

    iva = (suma * 21) / 100;
    total = suma + iva;

    mensaje = "La suma total con IVA incluido es : " + total;

    alert(mensaje);
}
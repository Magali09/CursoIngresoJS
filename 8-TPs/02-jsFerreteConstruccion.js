/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    /* para sacar perimetro se hace largo * 2 + base * 2.
    para 3 hilos de alambre se tiene q hacer perimetro * 3*/

    /*A.mostrar la cantidad de alambre a comprar  si se ingresara el largo y 
    el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.*/

    //txtIdLargo
    //txtIdAncho
    //txtIdRadio
    let largo;
    let ancho;
    let alambre;
    let perimetro;
    let mensaje;
   

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;
   
    largo = parseFloat(largo);
    ancho = parseFloat(ancho);

    /*no lo parseo porque es la devolucion que me daria de los valores ingresados x el usuario
    alambre = parseInt(alambre);*/

   perimetro = (largo * 2) + (ancho * 2);
   alambre = perimetro * 3;

  document.getElementById("txtIdRadio").value = alambre;

  mensaje = " Se va a necesitar para alambrar el terreno : " + alambre + " mts de alambre!";

  alert(mensaje);




}
function Circulo () 
{
    /*B.mostrar la cantidad de alambre a comprar si se ingresara el radio  
    de un terreno circular
     y se debe alambra con tres hilos de alambre. 
     
     PERIMETRO DE UN CIRCULO ES: 2 * PI * R 
     */


     //txtIdLargo
    //txtIdAncho
    //txtIdRadio
    /* Debido a que PI es una propiedad estatica del modulo Math, siempre debes de utilizarla como Math.PI, 
    en lugar de una propiedad de un objeto Math que tu hayas creado ( Math no es un constructor ).*/

    let alambre;
    let circunferencia;
    let radio;
    let mensaje;

    radio = document.getElementById("txtIdRadio").value;
    radio= parseFloat(radio);
    //otra forma es =  2 * 3.14 * radio
    circunferencia = Math.PI * radio * 2;

    alambre = circunferencia * 3;

    mensaje = " Se va a necesitar para alambrar el terreno : " + alambre + " mts de alambre!";


    alert(mensaje);

	
}
function Materiales () 
{
    /* C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 
    3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
    
    area de un rectangulo: es el largo x el ancho
    para sacar las bolsas de cemento multiplico mt cuadrado por cemento y luego cal
    */
	 //txtIdLargo
    //txtIdAncho
    //txtIdRadio
  
    let cemento;
    let cal;
    let largo;
    let ancho;
    let metro;
    let mensaje;

    largo= parseInt(document.getElementById("txtIdLargo").value);
    ancho = parseInt(document.getElementById("txtIdAncho").value);

    largo = parseInt(largo);
    ancho = parseInt(ancho);
    
    metro = largo * ancho;

    cemento = metro * 2;
 
    cal = metro * 3;

    mensaje = " se necesita un total de " + cal + " bolsas de cal " + " y " +cemento + " bolsas de cemento ";

 
 

    alert(mensaje);



}
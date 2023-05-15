/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo
  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números impares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function ComenzarIngreso () 
{
    //txtIdNumero
    let numeroPositivo;
    let contadorPares;
    let contadorImpares;
    let numeroDivisible;
    let numeroPrimo;
    let mensaje;


    contadorImpares =0;
    contadorPares = 0;

    numeroPositivo = parseInt(numeroPositivo);
     document.getElementById("txtIdNumero").value = numeroPositivo;
     numeroPositivo = prompt("ingrese un numero");


    while(numeroPositivo < 0)
    {   //a.Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
        if(numeroPositivo % 2 == 0)
        {
            contadorPares = contadorPares + 1;
            numeroDivisible = numeroDivisible + 1;
            mensaje = "lA cANTIDAD DE NUMEROS PARES ES " + contadorPares;

        }else if(numeroPositivo % 2 != 0){
        //b.	Se pedirán un número positivo y se mostrará la cantidad de números impares desde el número ingresado hasta el cero.
            contadorImpares = contadorImpares +1;
            mensaje = "lA cANTIDAD DE NUMEROS PARES ES " + contadorImpares;

        }
    }

 	alert(mensaje)
}
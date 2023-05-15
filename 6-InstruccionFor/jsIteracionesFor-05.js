// /*al presionar el botón repetir el pedido de número hasta ingresar el 9
// Cristofori Magalí */
// function mostrar()
// {
	

// 	for (let i = 0; i != 9; i++)
// 	 {
// 		i = parseInt(prompt("ingrese un numero"))

// 		if(i == 9)
// 		{
// 			break;
// 		}
// 	}
	



// }//FIN DE LA FUNCIÓN

/* For 5 bis, Realizar el programa que permita el ingreso de sexo (validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m” o "b") de 7 alumnos, informar por console.log: 
a) El promedio de las notas totales. 
b) La nota más baja y el sexo de esa persona. 
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
d) La cantidad de alumnos desaprobados (nota < 4)*/
function mostrar()
{
	let notas;
  let notasMasBaja;
  let notasMasBajaSexo;
  let sexo;
  let acumuladorNotasTotales;
  let contadorNotas;
  let banderaNotaMasBaja;
  let cantidadVaronesAprobados; 
  let cantidadDesaprobados;
  
  

  acumuladorNotasTotales = 0;
  acumuladorNotaMasBaja = 0;
  cantidadVaronesAprobados = 0;
  cantidadDesaprobados = 0;
  contadorNotas = 0;
  banderaNotaMasBaja = true;

  for (let i = 0; i < 3; i++)
  {
    notas = prompt("Ingrese un numero");
		notas = parseInt(notas);
		
		while(isNaN(notas))
    {

			notas = prompt("Erros, Ingrese un numero!!!");
			notas = parseInt(notas);
		}

    sexo = prompt("Ingrese un numero");
    while(sexo != "m" && sexo != "b" && sexo != "f")
    {
			sexo = prompt("Erros, Ingrese m o b o f!!!");

    }
			
    acumuladorNotasTotales = acumuladorNotasTotales + notas;//sumo las notas en cada iteracion
   
    contadorNotas = contadorNotas + 1;
    
      //uso la bandera para inicializar el primer valor max / min
    if (banderaNotaMasBaja  == true ) 
    {
      
      notasMasBaja = notas;
      notasMasBajaSexo = sexo;
      banderaNotaMasBaja = false;

    }else if( notas < notasMasBaja)
    {
      notasMasBaja = notas;
      notasMasBajaSexo = sexo;
    }
    if(sexo == "m" && notas >= 6 )//pregunto cuantos varones aprobaron
    {
      cantidadVaronesAprobados = cantidadVaronesAprobados + 1;
      

    }else  if(notas < 4)
    {
      cantidadDesaprobados = cantidadDesaprobados + 1;
    }
    



  }
  //a) El promedio de las notas totales. 
  promedio = acumuladorNotasTotales / contadorNotas;

  alert("el promedio de las notas Totales es: " + promedio + "\n" +
  "La nota mas abaja es: " + notasMasBaja + "\n" + " y el sexo es: " + notasMasBajaSexo + "\n" +
  "La cantidad de varones con notas igual o mayor a 6 es :" + cantidadVaronesAprobados + "La cantidad de alumnos desarobados es : " 
  + cantidadDesaprobados);


  
  // a) El promedio de las notas totales. 
  // b) La nota más baja y el sexo de esa persona. 
  // c) La cantidad de varones que su nota haya sido mayor o igual a 6.
  // d) La cantidad de alumnos desaprobados (nota < 4)

}    
/*
Ejercicio 1

Se pide cargar la ficha médica para 11 jugadores de fútbol.
Se solicita Nombre, Edad, Peso(ej: 60.5kg) y Altura(ej: 1.65mt).
A) Nombre del jugador más joven.
B) El peso del jugador más alto.
C) Promedio de altura del equipo.
D) Promedio de peso del equipo.
E) Cantidad de jugadores que superen 1.7 mt y pesen mas de 85 kg.
f) La jugadora mas joven femenina.
*/


/* {
  let nombre;
  let genero;
  let nombreJugadorMasJoven;
  let edadJugadorMasJoven;
  let edad;
  let peso;
  let pesoMasAltoDelJugar;
  let altura;
  let alturaDeJugadorMasAlto;
  let contador;
  let promedioAlturaDelEquipo;
  let promedioPesoEquipo;
  let contadorJugadoresMasAltos70cm;
  let contadorJugadoresPesenMas85kg;
  let acumuladorAlturaEquipo;
  let acumuladorPesoEquipo;
  let jugadoraMasJovenFemenina;
  let banderaJovenFemenina;
  
  

  contador = 0;
  edadJugadorMasJoven = 0;
  acumuladorMasAlto = 0;
  acumuladorPesoEquipo = 0;
  acumuladorAlturaEquipo = 0;
  contadorJugadoresMasAltos70cm = 0;
  contadorJugadoresPesenMas85kg = 0;
  banderaJovenFemenina = false;
  
  




  do {

    nombre = prompt("Ingrese un nombre: ");
    while(isNaN(nombre) == false || nombre == "")
    {
      nombre = prompt("Ingrese un nombre: ");
    }

    genero = prompt("Ingrese un genero: (f)-(m) - (nb) ");
    while(genero!= "f" && genero!= "m" && genero!="nb")
    {
      genero = prompt("Ingrese un genero: ");
    }
    edad = parseFloat(prompt("Ingrese el edad: "));
    while (isNaN(edad) == true || edad < 1 || edad > 100) 
    {
       edad = parseFloat(prompt("Reingrese el edad nuevamente: "));
    }

    peso = parseFloat(prompt("Ingrese el peso: "));
    while (isNaN(peso) == true || peso < 60.5 || peso > 100) 
    {
       peso = parseFloat(prompt("Reingrese el peso nuevamente: "));
    }

    altura = parseFloat(prompt("Ingrese el altura: "));
    while (isNaN(altura) == true || altura < 1.65 || altura > 2.5) 
    {
       altura = parseFloat(prompt("Reingrese el altura nuevamente: "));
    }


    //A) Nombre del jugador más joven.
    if(edad < edadJugadorMasJoven || contador == 0)
    {
      edadJugadorMasJoven = edad;
      nombreJugadorMasJoven = nombre;
      
    }
    
    //B) El peso del jugador más alto.
    if(altura > alturaDeJugadorMasAlto || contador == 0)
    {
      pesoMasAltoDelJugar = peso;
      alturaDeJugadorMasAlto = altura;
      
      
    }

    //E) Cantidad de jugadores que superen 1.7 mt y pesen mas de 85 kg.
    if(altura > 1.7 && peso > 85)
    { 
      contadorJugadoresMasAltos70cm++;
      contadorJugadoresPesenMas85kg++;
      

    }

    //f) La jugadora mas joven femenina.
    if(genero == "f")
    {
      if(edad < jugadoraMasJovenFemenina || banderaJovenFemenina == false )
      {
         jugadoraMasJovenFemenina = edad;
         banderaJovenFemenina = true;
      }
      

    }

    
    acumuladorPesoEquipo+=peso;
    acumuladorAlturaEquipo+=altura;
    contador++;
  } while (contador < 3);//pertece al DOWHILE

    //C) Promedio de altura del equipo.

    promedioAlturaDelEquipo = (acumuladorAlturaEquipo / contador).toFixed(1);

    //D) Promedio de peso del equipo.
    promedioPesoEquipo = (acumuladorPesoEquipo / contador).toFixed(1);

    if( banderaJovenFemenina != false )
      {
         mensaje = "el ingreso de la mujer mas joven femenina es ";
         
      }
      else
      {
        mensaje = "no se ingreso ninguna mujer ";
        jugadoraMasJovenFemenina = "";
      }

  document.write("a) el nombre del jugador mas joven es " + nombreJugadorMasJoven + "<br>");
  document.write("b) el peso del jugador mas alto es " + pesoMasAltoDelJugar + "<br>");
  document.write("c) el promedio de altura del equipo es " + promedioAlturaDelEquipo + "<br>");
  document.write("d) el promedio de peso del equipo es " + promedioPesoEquipo + "<br>");
  document.write("e) la cantidad de jugadores que superan 1.7mt es " + contadorJugadoresMasAltos70cm + " y los que pesan mas de 85kg es " + contadorJugadoresPesenMas85kg + "<br>");
  document.write("f) "  + mensaje + jugadoraMasJovenFemenina + "<br>");*/

/*OTRO EJERCICIO
SE INGRESA 5 IMPOTER, MARCA DEL PRODUCTO Y PAIS DE ORIGEN(CHINA, URUGUAR, PARAGUAY)
CALCULAR Y MOSTRAR:
a. minimo importe con su pais
b. maximo importe con su marca
c. promedio importe
d. cantidad de productos de china
e. sobre maximo encontrado aplicar un decuento 10% a dicho importe
*/

  // let importe;
  // let marca;
  // let pais;

  // let minimoImporte;//
  // let maximoImporte;//
  // let paisMenorImporte;//
  // let marcaMaximoImporte;//
  // let acumuladorImporte;
  // let promedioImporte;
  // let cantidadProductosChina;
  // let descuento;

  // acumuladorImporte = 0;
  // cantidadProductosChina = 0;

  // for(let contador = 0; contador<5 ; contador++)
  // {

  //   do {

  //       importe = parseInt(prompt("Ingrese un importe"))
      
  //   } while (importe < 0);

  //   marca = prompt("ingrese marca")

  //   do {

  //     pais = prompt("Ingrese el pais")
  //     pais = pais.toLowerCase()//para q decrimini payusculas
  //   } while (pais != "uruguay" && pais != "china" && pais != "paraguay");

  //   // a. minimo importe con su pais
  //   if(contador == 0 || importe < minimoImporte)//usando el contador el cero ya se cual va ser el primero
  //   {
  //     minimoImporte = importe
  //   }

  //   //b . maximo importe con su marca
  //   if(contador == 0 || importe > maximoImporte)//usando el contador el cero ya se cual va ser el primero
  //   {
  //     maximoImporte = importe
  //     marcaMaximoImporte = marca
  //   }

  //    //c. promedio importe
  //    acumuladorImporte = acumuladorImporte + importe;//acumudalorImporte += importe


  //   //d. cantidad de productos de china
  //   if(pais == "china"){
  //     cantidadProductosChina = cantidadProductosChina + 1;
  //   }
    
    


  // }//fin for

  // //c. promedio importe
  // promedioImporte = acumuladorImporte / contador;

  // //e. sobre maximo encontrado aplicar un decuento 10% a dicho importe
  // descuento = maximoImporte * 0.9;//0.9 me cuenta el 10% sobre 100
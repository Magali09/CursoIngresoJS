/*While 2 bis bis: Ingresar numeros hasta que el usuario quiera. 
 la cantidad de números que son mayores que 10 y menores 20 (inclusive en ambos casos). 
También el promedio de los números que cumplen la condición anterior. 
Cristofori Magalí*/
function mostrar()
{
	let numero;
	let contadorMayor = 0;
	let contadorMenor = 0;
	let respuesta = true;
	let sumaMayor =0;
	let sumaMenor = 0;
	let promedioMayor = 0;
	let promedioMenor = 0;
	let mensaje;
	

	while(respuesta == true)
	{
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);

		while(isNaN(numero)){

			numero = prompt("Erros, Ingrese un numero!!!");
			numero = parseInt(numero);
		}

		if (numero <= 20) 
		{
			sumaMenor = sumaMenor + numero;
			contadorMenor = contadorMenor + 1;

		}else if(numero >= 10)
		{
			sumaMayor = sumaMayor + numero;
			contadorMayor = contadorMayor + 1;
			
		}
			
			
		respuesta=confirm("desea continuar? si/no");
			
	}//FIN WHILE
		
		promedioMayor = sumaMayor / contadorMayor;
		promedioMenor = sumaMenor / contadorMenor;

		mensaje = "la cantidad de numeros mayores a 10 son " + contadorMayor + " y los menores a 20 son " + contadorMenor + "/n"
		+ " y el promedio de los numeros mayores " + promedioMayor + " y el promedio de los numeros menor " + promedioMenor;

		alert(mensaje);
	


		
}














// /* OTRO EJERCICIO
// al presionar el botón "mostrar", mostrar 125 repeticiones 
// con números ASCENDENTE, desde el 1 al 125. 
// a) contar los numeros IMPARES 
// b)contar los numeros PARES,
// c)el total de la suma de los numeros impares
// d)el total de la suma de los numeros pares
// e)el mayor de los numeros impares; 
// f)el mayor de los numeros; 
// */
// function mostrar()
// {
// 	//declaro la varible
// 	let i;
// 	let contadorNumeroPares; 
// 	let contadorNumerosImpares; 
// 	let acumuladorNumeroImpares;
// 	let acumuladorNumeroPares;
// 	let mayorNumeroImpar; 
// 	let mayorNumero; 

// 	//inicializar la variable
// 	i = 1; 
// 	contadorNumeroPares = 0; 
// 	contadorNumerosImpares = 0; 
// 	acumuladorNumeroImpares = 0; 
// 	acumuladorNumeroPares = 0; 
// 	mayorNumeroImpar = 1; 
// 	mayorNumero = 0; 


// 	while(i < 125)
// 	{
// 		if(i%2 != 0) // esto es un impar 
// 		{       
// 			//a) contar los numeros IMPARES                    0      
// 			contadorNumerosImpares = contadorNumerosImpares + 1;

// 			//c)el total de la suma de los numeros impares
// 			acumuladorNumeroImpares = acumuladorNumeroImpares + i;

// 			//e)el mayor de los numeros impares; 
// 			if(i > mayorNumeroImpar)
// 			{
// 				mayorNumeroImpar = i; 
// 			}
// 		}
// 		else
// 		{	//d)el total de la suma de los numeros pares
// 			contadorNumeroPares = contadorNumeroPares + 1;
// 			acumuladorNumeroPares = acumuladorNumeroPares + i;	
// 		}
		// f)el mayor de los numeros; 
// 		if(i > mayorNumero)
// 		{
// 			mayorNumero = i; 
// 		}

// 		//modificar la condicion de uno en uno 
// 		i= i + 1; 

// 		//moestrar el contador
// 		console.log(i); 
// 	}//fin de while



// 	console.log("La cantidad de numeros impares es: " + contadorNumerosImpares); 
// 	console.log("La cantidad de numeros pares es: " + contadorNumeroPares); 
// 	console.log("el total de la suma de los numeros Impares "+acumuladorNumeroImpares); 
// 	console.log("el total de la suma de los numeros Pares "+acumuladorNumeroPares); 
// 	console.log("el mayor de los numeros impares "+ mayorNumeroImpar); 
// 	console.log("el mayor de los numeros es: "+ mayorNumero); 
	
// }


/* OTRO EJERCICIO
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
// let contador = 0;

	// while (contador< 10) {
	// 	contador = contador +1;
	// 	console.log(contador);
	// }
	//declaro variable
	// let contador;


	// contador = 1;

	// while(contador < 11){

	// //modificar la variable de uno en uno
	// contador = contador + 1;
	// console.log(contador);
	// }

//OTRO EJERCICIO
	/*Profe Orne — hoy a las 9:23
While 1 bis- edad y nombre , informar el nombre de la persona mas vieja y la mas joven 
Cristofori Magalí*/
// 
// {
// 	let edad;
// 	let nombre;
// 	let personaVieja;
// 	let personaJoven;
// 	let nombreMayor;
// 	let nombreMenor;
// 	let flag;
// 	let respuesta;
// 	let mensaje;

// 	flag = true
// 	respuesta = "si"

// 	while (respuesta == "si") 
// 	{	
// 		edad = parseInt(prompt("Ingrese su edad!!!"));
// 		nombre = prompt("ingrese su nombre");
		
// 		while(isNaN(edad) || edad < 0 || edad > 123)
// 		{
// 			edad = prompt("error, ingresar una edad valida!!!");
// 			edad = parseInt(edad);

// 		}
		
// 		if(flag == true)
// 		{
// 			personaJoven = edad;
// 			personaVieja = edad;
// 			flag = false
			
// 		}else if(edad > personaVieja)
// 		{
// 			personaVieja = edad;
// 			nombreMayor = nombre;

// 		}else if(edad < personaJoven)
// 		{

// 			personaJoven = edad;
// 			nombreMenor = nombre;
// 		}

// 		respuesta = prompt("desea ingresar otro dato!!! si / no");

// 	}

// 	mensaje =  "la persona mas joven " + personaJoven + "y se llama " + nombreMenor;

// 	alert (mensaje);

// 	mensaje =  "la persona mas mayor " + personaVieja + " y se llama " + nombreMayor;

// 	alert(mensaje);
	

	
// }//FIN DE LA FUNCIÓN





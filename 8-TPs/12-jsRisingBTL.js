/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y 
censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente 
(para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	let edadIngresada;//txtIdEdad
 	let sexoIngresado;//txtIdSexo
 	let estadoCivilIngresado;//txtIdEstadoCivil
	let sueldoBruto;//txtIdSueldo
	let legajoNumero;//txtIdLegajo
	let nacionalidad;//txtIdNacionalidad
	let respuesta;

	sueldoBruto = 8000;
	respuesta = "si";

	while (respuesta == "si") 
	{	
		
		//A.	Edad, entre 18 y 90 años inclusive.
		edadIngresada=prompt("Ingrese su edad")
		while(edadIngresada < 18 || edadIngresada > 90)
		{
			edadIngresada=prompt("Ingrese una edad valida entre 18 o 90 años")
			edadIngresada = parseInt(edadIngresada);
		}
		document.getElementById("txtIdEdad").value = edadIngresada;
		
		//B.	Sexo, “M” para masculino y “F” para femenino
		sexoIngresado = prompt("Por favor ingrese Sexo, “M” para masculino y “F” para femenino");
		while (sexoIngresado!="F" && sexoIngresado!="M") 
		{
			sexoIngresado = prompt("Ingrese un respuesta valida, “M” para masculino y “F” para femenino");
		}
		document.getElementById("txtIdSexo").value = sexoIngresado;

		//C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
		estadoCivilIngresado = prompt("ingrese Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
		while(estadoCivilIngresado != 1 && estadoCivilIngresado != 2 && estadoCivilIngresado != 3 && estadoCivilIngresado != 4)
		{
			estadoCivilIngresado = prompt("ingrese un numero valido segun corresponda, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos")
		}
		switch (estadoCivilIngresado) {
			case 1:
					estadoCivilValido="Soltero";
				
				break;
			case 2:
					estadoCivilValido="Casado";
					break;
	
	
				case 3:
					estadoCivilValido="Divorciado";
					break;
	
	
				case 4:
					estadoCivilValido="Viudo";
					break;
	
		
		
		}
		document.getElementById("txtIdEstadoCivil").value = estadoCivilIngresado;

		//D.	Sueldo bruto, no menor a 8000.
		sueldoBruto = prompt("Ingrese su sueldo bruto");
		if (sueldoBruto < 8000)
		{
			sueldoBruto = parseInt(sueldoBruto);
			sueldoBruto = prompt("ingrese su sueldo bruto que sea mayor a $8000");
		}
		document.getElementById("txtIdSueldo").value =sueldoBruto;

		
		//E.Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
		legajoNumero = prompt("Ingrese su numero de legajo");
		if(legajoNumero < 999 || legajoNumero > 9999)
		{
			legajoNumero = parseInt(legajoNumero);
			legajoNumero = prompt("ingrese un numero de 4 digitos, sin ceros a la izquierda")
		}
		document.getElementById("txtIdLegajo").value = legajoNumero;

		//F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
		nacionalidad = prompt("ingrese su nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados");
		while (nacionalidad != "A" && nacionalidad != "B" && nacionalidad != "E" && nacionalidad != "N")
		{
			nacionalidad = prompt("Ingrese una letra valida,“A” para argentinos, “E” para extranjeros, “N” para nacionalizados")
		}
		document.getElementById("txtIdNacionalidad").value = nacionalidad;


		respuesta = prompt("Desea ingresar otro dato, si/no");
	}
	
	
	

}

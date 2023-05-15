/*
Enunciado:

Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total 
        FUNCIONA OK*/
function mostrar() {
    // //declaro varibles
    // let tipo;
    // let precio;
    // let cantidadUnidades;
    // let marca;
    // let fabricante;
    // let fabricanteJabon;
    // let acumuladorCantidadBarbijo = 0;
    // let acumuladorCantidadAlcohol = 0;
    // let acumuladorCantidadJabon = 0;
    // let contadorBarbijo = 0;
    // let contadorAlcohol = 0;
    // let contadorJabon = 0;
    // let banderaMasCaro = true;

    // let promedioCompra;
    // let mayorTipoUnidades;
    // let jabonMasCaro;


    // for (let i = 0; i < 2; i++) {

    //     tipo = prompt("ingrese tipo: barbijo , jabón o alcohol");
    //     while (tipo != "barbijo" && tipo != "alcohol" && tipo != "jabon") {

    //         tipo = prompt("Error, ingrese tipo: barbijo , jabón o alcohol");
    //     }

    //     precio = parseFloat(prompt("Ingrese el precio  entre $100 y $300"));//uso float xq no es un numero entero, voy a trabajar con valores de decimales
    //     while (precio < 100 || precio > 300 || isNaN(precio))//otra alternativa (!(precio > 100 && precio < 300))
    //     {
    //         precio = parseFloat(prompt("Error: Ingrese el precio  entre $100 y $300"));
    //     }

    //     cantidadUnidades = parseInt(prompt("Ingrese el cantidad MAX 1000"));
    //     while (!(cantidadUnidades > 0 && cantidadUnidades < 1000)) {
    //         cantidadUnidades = parseInt(prompt("Error: Ingrese el cantidad MAX 1000"));
    //     }

    //     marca = prompt("ingrese marca");
    //     fabricante = prompt("ingrese fabricante");

    //     switch (tipo) {
    //         case "alcohol":

    //             acumuladorCantidadAlcohol = acumuladorCantidadAlcohol + cantidadUnidades;
    //             contadorAlcohol = contadorAlcohol + 1;
    //             break;
    //         case "barbijo": //c) Cuántas unidades de Barbijos se compraron en total 

    //             acumuladorCantidadBarbijo = acumuladorCantidadBarbijo + cantidadUnidades;
    //             contadorBarbijo = contadorBarbijo + 1;

    //             break;
    //         case "jabon"://a) Del más caro de los jabones, la cantidad de unidades y el fabricante
    //             if (banderaMasCaro == true || jabonMasCaro < precio) {

    //                 acumuladorCantidadJabon = acumuladorCantidadJabon + cantidadUnidades;
    //                 contadorJabon = contadorJabon + 1;
    //                 jabonMasCaro = precio;
    //                 fabricanteJabon = fabricante;
    //                 banderaMasCaro = false
    //             }
    //             break;

    //     }

    // }//fin DEL FOR

    // //b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
    // if (acumuladorCantidadAlcohol > acumuladorCantidadBarbijo && acumuladorCantidadAlcohol > acumuladorCantidadJabon) {// acumulador alcohol sea el mayor

    //     mayorTipoUnidades = "alcohol";
    //     promedioCompra = acumuladorCantidadAlcohol / contadorAlcohol;

    // } else if (acumuladorCantidadBarbijo > acumuladorCantidadAlcohol && acumuladorCantidadBarbijo >= acumuladorCantidadJabon)//acuumulador barbijo sea el mayor 
    // {																							//uso el >= puede ser q en caso de arriba me de un empate
    //     mayorTipoUnidades = "barbijo";
    //     promedioCompra = acumuladorCantidadBarbijo / contadorBarbijo;

    // } else {
    //     mayorTipoUnidades = "jabon";
    //     promedioCompra = acumuladorCantidadJabon / contadorJabon;
    // }
    // // a) Del más caro de los jabones, la cantidad de unidades y el fabricante
    // // b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
    // // c) Cuántas unidades de Barbijos se compraron en total
    // console.log("La cantidad de jabones que se compro fue: " + acumuladorCantidadJabon + "el mas caro fue: " + jabonMasCaro + " y el fabricante " + fabricanteJabon);
    // console.log("El tipo con mas unidades fue : " + mayorTipoUnidades + " Y su promedio fue: " + promedioCompra);
    // console.log("La cantidad de barbijo fue: " + acumuladorCantidadBarbijo);
    // que tengo q generar un bucle pedir 5 veces tipo, precio, cantidad, marca y fabricante. Valido todo segun corresponda
    // utilizo for xq conozco de antemano la cantidad de repeticiones













    //EJERCICIO DE DISCORD 23/2/23 PROBADO Y FUNCIONA BIEN!!
    // Parcial 1 2020 bis: /"Super chino" Se pide el ingreso de mercadería de un supermercado , 
    // hasta que el usuario quiera,se pide :
    // tipo(limpieza , comestible , otros)solo estos tres tipos
    // nombre del producto
    // importe del producto (no mayor a 1000 pesos)
    // procedencia(importado, nacional, elaborado)
    // Peso (no mayor a 30 kilos)

    // informar SOLO SI HAY
    // a) el NOMBRE del mas pesado de los comestibles
    // b) el NOMBRE del mas caro de todos los productos
    // c) el NOMBRE del mas barato de los elaborados
    // d)el tipo de mercadería que mas aparece
    // e)el porcentaje de productos elaborados por sobre el total
    // f) el promedio de pesos por cada tipo ingresado/

    // let tipo;
    // let nombreProducto;
    // let importeProducto;
    // let procedencia;
    // let pesoKilos;
    // let respuesta;
    // let banderaDelMasPesado = true;
    // let masPesado;
    // let nombreMasPesado;
    // let banderaDelMasCaro = true;
    // let nombreMasCaro;
    // let masCaro;
    // let banderaMasBarato = true;
    // let nombreMasBarato;
    // let masBarato;
    // let contadorLimpieza = 0;
    // let contadorOtros = 0;
    // let contadoComestible = 0;
    // let tipoMayor;
    // let acumuladorProductosElaborados = 0;
    // let contadorProductosElaborados = 0;
    // let contadorTipo = 0;
    // let acumuladorPeso = 0;
    // let contadorPeso = 0;
    // let promedioPeso;
    // let porcentajeProductos;





    // respuesta = true;



    // while (respuesta == true) {
    //     nombreProducto = prompt("Ingrese nombre del producto");

    //     procedencia = prompt("ingrese la procedencia");
    //     while (procedencia != "importado" && procedencia != "nacional" && procedencia != "elaborado") {
    //         procedencia = prompt("Error: ingrese la procedencia valida");
    //     }
    //     tipo = prompt("Ingrese que tipo")
    //     while (tipo != "limpieza" && tipo != "comestible" && tipo != "otros") {
    //         tipo = prompt("Error: Ingrese que tipo : limpieza o comestible o otros")
    //     }

    //     importeProducto = parseFloat(prompt("Ingrese que importeProducto"))
    //     while (importeProducto > 1000) {//NO mayor a 1000
    //         importeProducto = parseFloat(prompt("Error: Ingrese que importe Producto "))
    //     }

    //     pesoKilos = parseFloat(prompt("Ingrese que pesoKilos"))
    //     while (pesoKilos > 30) { //NO mayor a 30
    //         pesoKilos = parseFloat(prompt("Error: Ingrese que peso Kilos "))
    //     }

    //     contadorTipo = contadorTipo + 1;
    //     // f) el promedio de pesos por cada tipo ingresado/b
    //     acumuladorPeso = acumuladorPeso + pesoKilos;
    //     contadorPeso = contadorPeso + 1;
    //     // b) el NOMBRE del mas caro de todos los productos
    //     if (banderaDelMasCaro == true || masCaro < importeProducto) {
    //         masCaro = importeProducto;
    //         nombreMasCaro = nombreProducto;
    //         banderaDelMasCaro = false;
    //     }

    //     switch (tipo) {
    //         case "limpieza":
    //             contadorLimpieza = contadorLimpieza + 1;
    //             break;

    //         case "comestible":
    //             contadoComestible = contadoComestible + 1;
    //             if (banderaDelMasPesado == true || masPesado < pesoKilos) {
    //                 masPesado = pesoKilos;
    //                 nombreMasPesado = nombreProducto;
    //                 banderaDelMasPesado = false;
    //             }
    //             break;

    //         case "otros":
    //             contadorOtros = contadorOtros + 1;
    //             break;
    //     }
    //     // c) el NOMBRE del mas barato de los elaborados
    //     if (procedencia == "elaborado") {
    //         acumuladorProductosElaborados = acumuladorProductosElaborados + importeProducto;
    //         contadorProductosElaborados = contadorProductosElaborados + 1;
    //         if ((banderaMasBarato == true || masBarato > importeProducto)) {
    //             masBarato = importeProducto;
    //             nombreMasBarato = nombreProducto;
    //             banderaMasBarato = false;
    //         }
    //     }



    //     respuesta = confirm("Desea ingresar ptro dato");

    // }//FIN WHILE
    // // d)el tipo de mercadería que mas aparece
    // if (contadoComestible > contadorLimpieza && contadoComestible > contadorOtros) {

    //     tipoMayor = "comentible"

    // } else if (contadorOtros > contadoComestible && contadorOtros > contadorLimpieza) {

    //     tipoMayor = "otro"

    // } else {

    //     tipoMayor = "limpieza"
    // }

    // // f) el promedio de pesos por cada tipo ingresado/b
    // promedioPeso = acumuladorPeso / contadorPeso;
    // porcentajeProductos = contadorTipo / contadorProductosElaborados * 100;

    // console.log("el NOMBRE del mas pesado de los comestibles : " + nombreMasPesado);
    // console.log("el NOMBRE del mas caro de todos los productos : " + nombreMasCaro);
    // console.log("el NOMBRE del mas barato de los elaborados : " + nombreMasBarato);
    // console.log(" el tipo de mercadería que mas aparece : " + tipoMayor);
    // console.log("el porcentaje de productos elaborados por sobre el total: " + porcentajeProductos + " % ");
    // console.log("el promedio de pesos por cada tipo ingresado : " + promedioPeso);

    // FINParcial 1 2020 bis: /"Super chino"










    /* Parcial 2020 2 bis: DISCORD 23/2/23
     /"La veterinaria" pedir el ingreso de 10 mascotas
     validar
     tipo ( gato , perro , pájaro y otros)solo esos cuatro tipo
     raza: si es perro (pastor, toy, callejero) y 
     si gato (siamés, turco, Peterbald , generico) 
     y si es de tipo "otros" o pájaro , pedir solo un texto
     Edad entre 1 y 20 para gatos y perros , para "otros" entre 1 y 100 , para pájaro 1 de 50
     nombre (no se permite solo numero)
  // ESTA MAAAAL   mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo            // ESTA MAAAL
     mostrar que raza de gatos tiene mas animales y el promedio de edad de esta raza/*/
    // let nombreMascota;
    // let tipoMascota;
    // let tipoOtros;
    // let razaPerro;
    // let razaGato;
    // let edadGato;
    // let edadPerro;
    // let edadOtros;
    // let edadPajaro;
    // let banderaRazaGato;
    // let razaGatoTieneMas;
    // let promedioRazaGato;
    // let acumuladorRazaGato = 0;
    // let contadorRazaGato = 0;
    // let banderaDelMasViejo = true;
    // let edadMasViejo;
    // let nombreMascotaMasVieja;
    // let acumuladorEdadGato = 0;
    // let acumuladorEdadPerro = 0;
    // let acumuladorEdadOtros = 0;
    // let acumuladorEdadPajaro = 0;

    // banderaRazaGato = true;


    // for (let i = 0; i < 2; i++) {
    //     nombreMascota = prompt("Ingrese nombre de Mascota");

    //     tipoMascota = prompt("Ingrese una mascota : gato o perro o pajaro o  otro");
    //     while (tipoMascota != "gato" && tipoMascota != "perro" && tipoMascota != "pajaro" && tipoMascota != "otro") {
    //         tipoMascota = prompt("Error: ingrese la tipoMascota valida");
    //     }
    //     if (tipoMascota == "perro") {

    //         razaPerro = prompt("Ingrese que razaPerro")
    //         while (razaPerro != "pastor" && razaPerro != "toy" && razaPerro != "callejero") {
    //             razaPerro = prompt("Error: Ingrese que razaPerro : pastor o toy o callejero ")
    //         }
    //     }

    //     if (tipoMascota == "perro") {
    //         edadPerro = parseInt(prompt("Ingrese que edad Perro"))
    //         while (edadPerro < 1 || edadPerro > 20) {
    //             edadPerro = parseInt(prompt("Error: Ingrese entre 1 o 20 "))
    //         }
    //     }

    //     if (tipoMascota == "gato") {

    //         razaGato = prompt("Ingrese que razaGato")
    //         while (razaGato != "siames" && razaGato != "turco" && razaGato != "peterbald" && razaGato != "generico") {
    //             razaGato = prompt("Error: Ingrese que razaGato : siamés o turco o Peterbald o generico ")

    //         }
    //     }

    //     if (tipoMascota == "gato") {

    //         edadGato = parseInt(prompt("Ingrese que edad Gato"))
    //         while (edadGato < 1 || edadGato > 20) {
    //             edadGato = parseInt(prompt("Error: Ingrese entre 1 o 20 "))
    //         }
    //     }


    //     if (tipoMascota == "pajaro") {
    //         edadPajaro = parseInt(prompt("Ingrese que edad pajaro"))
    //         while (edadPajaro < 1 || edadPajaro > 50) {
    //             edadPajaro = parseInt(prompt("Error: Ingrese entre 1 o 50 "))
    //         }
    //     }



    //     if (tipoMascota == "otro") {
    //         edadOtros = parseInt(prompt("Ingrese que edad Otros"))
    //         while (edadOtros < 1 || edadOtros > 100) {
    //             edadOtros = parseInt(prompt("Error: Ingrese que edad entre 1 o 100 "))
    //         }
    //     }





    //     switch (tipoMascota) {
    //         case "gato":// c) mostrar que raza de gatos tiene mas animales y el promedio de edad de esta raza
    //         acumuladorEdadGato = acumuladorEdadGato + edadGato;
    //             if(banderaRazaGato == true || razaGatoTieneMas < razaGato)
    //             {
    //                 acumuladorRazaGato = acumuladorRazaGato + edadGato;
    //                 contadorRazaGato = contadorRazaGato + 1;
    //                 razaGatoTieneMas = razaGato;
    //                 banderaRazaGato = false
    //             }
    //             if(banderaDelMasViejo = true || edadMasViejo < edadOtros) //b) mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo
    //             {
    //                 edadMasViejo = edadGato;
    //                 nombreMascotaMasVieja = nombreMascota;
    //                 banderaDelMasViejo = false;
    //             }


    //         case "perro":
    //             acumuladorEdadPerro = acumuladorEdadPerro + edadPerro;
    //             if(banderaDelMasViejo = true || edadMasViejo < edadPerro) //b) mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo
    //             {
    //                 edadMasViejo = edadPerro;
    //                 nombreMascotaMasVieja = nombreMascota;
    //                 banderaDelMasViejo = false;
    //             }

    //         case "pajaro":
    //             acumuladorEdadPajaro = acumuladorEdadPajaro + edadPajaro;
    //             if(banderaDelMasViejo = true || edadMasViejo < edadPajaro) //b) mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo
    //             {
    //                 edadMasViejo = edadPajaro;
    //                 nombreMascotaMasVieja = nombreMascota;
    //                 banderaDelMasViejo = false;

    //             }
    //             break;
    //         case "otro":

    //                 acumuladorEdadOtros = acumuladorEdadOtros + edadOtros;
    //             if(banderaDelMasViejo = true || edadMasViejo < edadOtros) //b) mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo
    //             {
    //                 edadMasViejo = edadOtros;
    //                 nombreMascotaMasVieja = nombreMascota;

    //             } 


    //         }
    //         tipoOtros = confirm("¿Quiere ingresar otra especie distinta a gato o perro?");
    //     }//fin for

    //     //PARTE 2 DEL PUNTO c
    //     promedioRazaGato = acumuladorRazaGato / contadorRazaGato;

    //     console.log("gato " + acumuladorEdadGato + " otro " + acumuladorEdadOtros + " pajaro " + acumuladorEdadPajaro + " perro " + acumuladorEdadPerro);
    //     console.log("el promedio de raza de gatos es: " + promedioRazaGato);   
    //     console.log("el nombre del mas viejo es: " + nombreMascotaMasVieja + " y es un : " + tipoMascota);  
    //FIN JERCICIO 2 BIS








   



    /******************************************************************************
* Apellido:Cristofori
* Nombre:Magali
* Comisión: B
* Tutor:Ornela / Christian
* 
Ejercicio 1
La Premier League de Inglaterra necesita un sistema capaz de reunir las estadisticas de los 
jugadores que la integran.
Para ellos se pide realizar una app.

Se debe ingresar por cada jugador

-Nombre del jugador
-Nacionalidad
-Posición (Arquero, Defensor, Mediocampista o Delantero)
-Cantidad de Tarjetas Rojas recibidas
-Goles 

Se necesita saber

a)El goleador del torneo
b)El jugador Argentino con menos rojas recibidas.
c)El porcentaje de jugadores Ingleses de la liga

NOTA: Deben poder ingresarse todos números positivos, no se deben pueden ingresar números negativos.



*******************************************************************************/
    //   let nombre;
    //   let nacionalidad;
    //   let posicion;
    //   let cantidadTarjetasRojas;
    //   let goles;
    //   let respuesta = true;
    //   let acumuladorGoles = 0;
    //   let contadorGoles = 0;
    //   let banderaGoleador = true;
    //   let banderaMenosTarjetasRojas = true;
    //   let menosTarjetasRojas;
    //   let nombreJugadorMenosTrjetasRojas;
    //   let contadorJugadores = 0;
    //   let contadorJugadoresIngleses = 0;
    //   let porcentajeJugadoresInglese;
    //   let goleador;
    //   let nombreDelGoleador;





    //   while (respuesta == true) {

    //     nombre = prompt("ingrese noombre del jugador");
       
    //     nacionalidad = prompt("ingrese nacionalidad del jugador");
    //     while (nacionalidad != "argentino" && nacionalidad != "ingles" && nacionalidad != "otro") {
    //         nacionalidad = prompt("Error: ingrese nacionalidad del jugador");
    //     }



    //     posicion = prompt("ingrese posicion del jugador");
    //     while (posicion != "arquero" && posicion != "defensor" && posicion != "mediocampista" && posicion != "delantero") {
    //         nombre = prompt("Error: ingrese posicion del jugador");
    //     }

    //     cantidadTarjetasRojas = prompt("ingrese cantidad de tarjetas rojas del jugador");
    //        cantidadTarjetasRojas = parseInt("ingrese cantidad de tarjetas rojas del jugador");
    //     while (cantidadTarjetasRojas < 0) {
    //         cantidadTarjetasRojas = parseInt(prompt("Error: ingrese cantidad de tarjetas rojas del jugador"));
    //     }

    //     goles = parseInt(prompt("ingrese cantidad de goles del jugador"));
    //     while (goles < 0) {
    //         goles = prompt("ingrese cantidad de goles del jugador");
    //     }
    //     //a)El goleador del torneo

    //     if (banderaGoleador == true || goleador < goles) {
    //        nombreDelGoleador = nombre
          
    //     }

    //     //c)El porcentaje de jugadores Ingleses de la liga
    //     contadorJugadores = contadorJugadores + 1;

    //     //b)El jugador Argentino con menos rojas recibidas.
    //     switch (nacionalidad) {
    //         case "argentino":
    //             if(banderaMenosTarjetasRojas == true || menosTarjetasRojas > cantidadTarjetasRojas){
    //                 nombreJugadorMenosTrjetasRojas = nombre;
    //                 menosTarjetasRojas = cantidadTarjetasRojas;
                   
    //                 banderaMenosTarjetasRojas == false;
    //             }
    //             break;
    //             //c)El porcentaje de jugadores Ingleses de la liga
    //             case "ingles":
    //                 contadorJugadoresIngleses = contadorJugadoresIngleses + 1;
    //             break;
    //     }




    //     respuesta = confirm("Desea ingresar otro dato")

    //   }//fin while

    //   porcentajeJugadoresInglese = contadorJugadores * contadorJugadoresIngleses / 100

    // // a)El goleador del torneo
    // // b)El jugador Argentino con menos rojas recibidas.
    // // c)El porcentaje de jugadores Ingleses de la liga
    // console.log("El jugador Argentino con menos rojas recibidas: " + nombreJugadorMenosTrjetasRojas);
    // console.log("El porcentaje de jugadores Ingleses de la liga: " + porcentajeJugadoresInglese);
    // console.log("El goleador del torneo: " + nombreDelGoleador);

    /******************************************************************************
    //  * Apellido:Cristofori      
    //  * Nombre:Magali
    //  * Comisión:b
    //  * Tutor:Ornela /Christian
     
    // Ejercicio 2 PROBADO FUNCIONANDO
    
    // Dr. Gregory Cat (Diagnostico Veterinario)
    // Para el hospital de mascotas: Princeton-Plainsboro de Nueva Jersey.
    
    // Es necesario registrar el ingreso de las mascotas al hospital, para esto hay que considerar
    // los siguientes datos y encasillarlos en ciertos diagnósticos para poder derivarlos adecuadamente:
    
    // Nombre de la mascota
    // Edad (Validar 1 - 20)
    // Tipo: (Validar “gato”, “perro”, “hamster”)
    // Peso: (Más de 0)
    // Diagnostico: (Validar “problemas digestivos”, “otitis”, “alergias en la piel”, “parasitos”, 
    // “picazon de abeja”)
    // Vacuna antirrábica (validar “si”, ”no”)
    
    // Informes:
    
    // a) Nombre de la mascota más vieja con la vacuna antirrábica
    // b) Cantidad de mascotas sin vacuna antirrábica y con parásitos
    // c) El tipo de mascota con más ingresos por problemas digestivos.
    // d) Nombre, edad y diagnóstico de la mascota más joven ingresada.
    // e) Cantidad de perros ingresados por otitis.*/

    // let nombre;
    // let tipo;
    // let peso;
    // let diagnostico;
    // let vacunaAntirrabica;
    // let respuesta = true;
    // let banderaMascotaMasVieja = true;
    // let mascotaMasVieja;
    // let nombreMascotaMasVieja;
    // let contadorSinVacunaAntirrabica = 0;
    // let banderaMascotaMasJoven = true;
    // let nombreMasJoven;
    // let edadMasJoven;
    // let diagnosticoMasJoven;
    // let contadorperrosOtitis = 0;
    // let mayorTipo;
    // let contadorHamster = 0;
    // let contadorperro = 0;
    // let acumuladorGato = 0;
    // let contadorGato = 0;
   
    
    
    // l




    // while (respuesta == true) {

    //     nombre = prompt("ingrese nombre de su mascota")
    //     edad = parseInt(prompt("Ingrese edad de la mascota"))
    //     while (edad < 1 || edad > 20) {
    //         edad = parseInt(prompt("Error: Ingrese edad de la mascota valida entre 1 o 20"))
    //     }

    //     tipo = prompt("Ingrese tipo de la mascota")
    //     while (tipo != "perro" && tipo != "gato" && tipo != "hamster") {
    //         tipo = prompt("Error: Ingrese tipo de la mascota valida ")
    //     }

    //     peso = parseFloat(prompt("Ingrese peso de la mascota"))
    //     while (peso < 0) {
    //         peso = parseFloat(prompt("Error: Ingrese peso de la mascota valida "))
    //     }

    //     diagnostico = prompt("Ingrese diagnostico de la mascota")
    //     while (diagnostico != "problemas digestivos" && diagnostico != "otitis" && diagnostico != "alergias en la piel" && diagnostico != "parasitos" && diagnostico != "picazon abeja") {
    //         diagnostico = prompt("Error: Ingrese diagnostico de la mascota valida ")
    //     }

    //     vacunaAntirrabica = prompt("Ingrese vacunaAntirrabica de la mascota")
    //     while (vacunaAntirrabica != "si" && vacunaAntirrabica != "no") {
    //         vacunaAntirrabica = prompt("Error: Ingrese vacunaAntirrabica de la mascota, si/no ")
    //     }
    //     // a) Nombre de la mascota más vieja con la vacuna antirrábica
    //     if ((banderaMascotaMasVieja == true || mascotaMasVieja < edad) && vacunaAntirrabica == "si") {
    //         nombreMascotaMasVieja = nombre;
    //         mascotaMasVieja = edad;
    //         banderaMascotaMasVieja = false;
    //     }
    //     switch (diagnostico) {
    //         case "otitis":
    //             if (tipo == "perro") {
    //                 contadorperrosOtitis = contadorperrosOtitis + 1;
    //             }
    //             break;
    //         case "problemas digestivos": // c) El tipo de mascota con más ingresos por problemas digestivos.
    //             switch (tipo) {
    //                 case "gato":
    //                     contadorGato = contadorGato + 1;
    //                     break;
    //                 case "perro":
    //                     contadorperro = contadorperro + 1;
    //                     break;
    //                 default:
    //                     contadorHamster = contadorHamster + 1;
    //                     break;
    //             }
    //             break;
    //         case "parasitos":// b) Cantidad de mascotas sin vacuna antirrábica y con parásitos
    //             if (vacunaAntirrabica == "no") {
    //                 contadorSinVacunaAntirrabica = contadorSinVacunaAntirrabica + 1;
    //             }
    //             break;
    //     }
    //     //d) Nombre, edad y diagnóstico de la mascota más joven ingresada.
    //     if (banderaMascotaMasJoven == true || edadMasJoven > edad) {
    //         nombreMasJoven = nombre;
    //         edadMasJoven = edad;
    //         diagnosticoMasJoven = diagnostico
    //         banderaMascotaMasJoven = false;
    //     }
    //     respuesta = confirm("Desea ingresar otro dato")

    // }//fin WHILE

    // //c) El tipo de mascota con más ingresos por problemas digestivos.
    // if (contadorperro > contadorGato && contadorperro > contadorHamster) {

    //     mayorTipo = "perro"

    // } else if (contadorGato > contadorperro && acumuladorGato >= contadorHamster) {

    //     mayorTipo = "gato"

    // } else {

    //     mayorTipo = "hamster"
    // }

    // /*a) Nombre de la mascota más vieja con la vacuna antirrábica
    //     b) Cantidad de mascotas sin vacuna antirrábica y con parásitos
    //     c) El tipo de mascota con más ingresos por problemas digestivos.
    //     d) Nombre, edad y diagnóstico de la mascota más joven ingresada.
    //     e) Cantidad de perros ingresados por otitis. */


    // console.log("Nombre de la mascota más vieja con la vacuna antirrábica: " + nombreMascotaMasVieja)
    // console.log(" Cantidad de mascotas sin vacuna antirrábica y con parásitos: " + contadorSinVacunaAntirrabica)
    // console.log("El tipo de mascota con más ingresos por problemas digestivos: " + mayorTipo)
    // console.log(" Nombre, " + nombreMasJoven + " y diagnóstico " + diagnosticoMasJoven + " de la mascota más joven ingresada " + edadMasJoven + " años ")
    // console.log("Cantidad de perros ingresados por otitis : " + contadorperrosOtitis)




/******************************************************************************
 * Apellido:Cristofori  
 * Nombre:Magalí
 * Comisión:b
 * Tutor:Christian / Ornela
 
Ejercicio 3

Una fabrica de muebles nos pide realizar una app para gestionar sus productos. 
El programa pide dar de alta cada venta realizada (Cada venta representa un mueble 
en particular, con los atributos definidos mas abajo).

Se debe ingresar en cada venta.
-Nombre del mueble
-Material del mueble (Madera, Metal y Vidrio)
-Peso
-Altura
-Anchura 
-Precio

Debido a la tala excesiva de árboles el gobierno pone un impuesto del 15% ante la compra de 
muebles de madera.
Los muebles de vidrio o metal tienen un 10% de descuento.

Se pide

a)Precio promedio por mueble vendido
b)Cantidad total de muebles de madera
c)El mueble de metal más alto 
d)El mueble más liviano
e)Porcentaje de muebles de cada tipo de material
f)Monto total recaudado bruto de todos los muebles (sin descuentos ni impuestos)
g)Monto total recaudado, pero solo de los muebles de madera(incluido descuentos e impuestos)

NOTA: Los precios no podran ser cero ni negativo.


// *******************************************************************************/
// let nombreMueble// -Nombre del mueble
// let material// -Material del mueble (Madera, Metal y Vidrio)
// let peso// -Peso
// let altura// -Altura
// let anchura// -Anchura 
// let precio// -Precio
// let respuesta = true;
// let contadorPrecio = 0;
// let acumuladorPrecio = 0;
// let promedioPrecio;
// let contadorMadera = 0;
// let banderaMasAltoMetal = true;
// let masAltoMetal;
// let contadoMasLivianoMadera = 0;
// let contadoMasLivianoVidrio = 0;
// let contadoMasLivianoMetal = 0;
// let contadorMuebles = 0;
// let contadorMueblesTipo = 0;
// let impuestoTalaExcesiva;
// let precioTotalConImpuesto;
// let descuentoVidrioMetal;
// let precioTotalDescuento;
// let acumuladorMontoTotalMadera = 0;
// let banderaMasLiviano = true;
// let muebleMasLiviano;


// while (respuesta == true) {
    
//     nombreMueble = prompt("ingrese nombre del mueble");
//     material = prompt("Ingrese material madera o metal o vidrio");
//     while (material != "madera" && material != "metal" && material != "vidrio") {
//         material = prompt("ERROR : Ingrese material madera o metal o vidrio");
//     }

//     peso= parseFloat(prompt("Ingrese peso del mueble"));
//     while (isNaN(peso)|| peso < 0 || peso > 100) {
//         peso= parseFloat(prompt("Error: Ingrese peso del mueble"));
//     }

//     altura = parseFloat(prompt("Ingrese altura del mueble"));
//     while (altura < 0 || altura > 100) {
//         altura = parseFloat(prompt("Error: Ingrese altura del mueble"));
//     }

//     anchura = parseFloat(prompt("Ingrese anchura del mueble"));
//     while (anchura < 0 || anchura > 100) {
//         anchura = parseFloat(prompt("Error: Ingrese anchura del mueble"));
//     }

//     precio = parseFloat(prompt("Ingrese precio del mueble"));
//     while (precio < 1 || precio > 1000) {
//         precio = parseFloat(prompt("Error: Ingrese precio del mueble"));
//     }

//     acumuladorPrecio = acumuladorPrecio + precio;// punto a
//     contadorPrecio = contadorPrecio + 1;//a
//     contadorMuebles = contadorMuebles + 1;
  

//     switch (material) {
//         case "madera":                                                                                      
//             acumuladorMontoTotalMadera = acumuladorMontoTotalMadera + precio;
//             contadorMadera = contadorMadera + 1;//PUNTO B
       
//             contadorMueblesTipo = contadorMueblesTipo + 1;//para porcentaje
//             impuestoTalaExcesiva = precio * 15 /100;
//             break;
//             case "vidrio":
               
//                 contadorMueblesTipo = contadorMueblesTipo + 1;//para porcentaje
//                 descuentoVidrioMetal = precio * 10 / 100;
//             break;
//         default://c)El mueble de metal más alto 
//             if (banderaMasAltoMetal == true || masAltoMetal < altura) {
//                 banderaMasAltoMetal = false
//                 masAltoMetal = altura

//             }
//             descuentoVidrioMetal = precio * 10 / 100;
//             contadorMueblesTipo = contadorMueblesTipo + 1;//para porcentaje
//             break;
//     }

//     //d)El mueble más liviano
//     if (banderaMasLiviano == true || muebleMasLiviano > peso) {
//         muebleMasLiviano = peso;
//         banderaMasLiviano = false;
        
//     }


//     respuesta = confirm("desea ingresar otro mueble")

// }//fin while

// promedioPrecio = acumuladorPrecio / contadorPrecio;//punto A
// //d)El mueble más liviano
// if(contadoMasLivianoMadera > contadoMasLivianoMetal && contadoMasLivianoMadera > contadoMasLivianoVidrio) {

//     tipoMasLiviano = "madera"

// }else if(contadoMasLivianoMetal > contadoMasLivianoMadera && contadoMasLivianoMetal >= contadoMasLivianoVidrio){

//     tipoMasLiviano = "metal"

// }else{
//     tipoMasLiviano = "vidrio"
// }
// //e)Porcentaje de muebles de cada tipo de material
// porcentajeMuebles = contadorMueblesTipo * contadorMuebles / 100

// precioTotalConImpuesto = acumuladorMontoTotalMadera + impuestoTalaExcesiva;//se suma con acumulador de precio de madera
// precioTotalDescuento = acumuladorPrecio - descuentoVidrioMetal;// se suma con un acumulador DE PRECIO

// console.log("Precio promedio por mueble vendido" + promedioPrecio);
// console.log("Cantidad total de muebles de madera" + contadorMadera);
// console.log("El mueble de metal más alto " + masAltoMetal);
// console.log("El mueble más liviano pesa: " + muebleMasLiviano);
// console.log("Porcentaje de muebles de cada tipo de material" + porcentajeMuebles);
// console.log("Por compra en mueble de madera debera pagar un impuesto del 15% y el total es" + precioTotalConImpuesto);
// console.log("Precio con descuento del 10 % " + precioTotalDescuento);
// console.log("Monto total recaudado bruto de todos los muebles (sin descuentos ni impuestos): " + acumuladorPrecio);
// console.log("Monto total recaudado, pero solo de los muebles de madera(incluido descuentos e impuestos): " + precioTotalConImpuesto);





/*3. De los 10 empleados de una PYME se ingresan los siguientes datos:
Nombre y apellido
Genero del empleado ("Femenino", "Masculino", "No Binario")
Cantidad de hijos (no puede ser un numero negativo)
El programa debera mostrar:
a. Porcentaje de empleados por cada genero.
b. El nombre del empleado No Binario con mas cantidad de hijos.
c. Nombre y apellido del primer empleado que no tiene hijos.*/

let nombre;
let apellido;
let genero;
let cantidadHijos;
let contadorEmpleadosPorGenero;
let contadorEmpleados;
let porcentajeEmpleado;
let banderaMasHijos;
let empleadoNombreMasHijos;
let masHijos;
let banderaSinHijos;
let nombreSinHijos;
let apellidoSinHijos;
let sinHijos;
let mensaje;
let mensajeSin;

contadorEmpleadosPorGenero = 0;
contadorEmpleados = 0;
banderaMasHijos = true;
banderaSinHijos = true;

for (let i = 0; i < 2; i++) {

    nombre = prompt("Ingrese nombre");
    apellido = prompt("Ingrese apellido");

    genero = prompt("Ingrese genero entre 'Femenino', 'Masculino', 'No Binario'");
    while(genero != "femenino" && genero != "masculino" && genero != "no binario"){
      genero = prompt("Error. Ingrese genero entre 'Femenino', 'Masculino', 'No Binario'");
    }

    cantidadHijos = parseInt(prompt("Ingrese cantidad de hijos "));
    while(isNaN(cantidadHijos) || cantidadHijos < 0 ){
      cantidadHijos = parseInt(prompt("Error. Ingrese cantidad de hijos "));
    }

    contadorEmpleados = contadorEmpleados +1;
    switch (genero) {
        case "masculino":
            contadorEmpleadosPorGenero = contadorEmpleadosPorGenero + 1;
            break;
        case "femenino":
            contadorEmpleadosPorGenero = contadorEmpleadosPorGenero + 1;
            break;
        default:
            contadorEmpleadosPorGenero = contadorEmpleadosPorGenero + 1;
            if (banderaMasHijos == true || masHijos < cantidadHijos) {
                banderaMasHijos = false;
                masHijos = cantidadHijos;
                empleadoNombreMasHijos = nombre;
            }
            break;
    }
    
    if(banderaSinHijos == true || sinHijos > cantidadHijos){
        nombreSinHijos = nombre;
        apellidoSinHijos = apellido;
        sinHijos = cantidadHijos;
        banderaSinHijos = false;
    }

    
}//Fin for
porcentajeEmpleado = contadorEmpleados * contadorEmpleadosPorGenero / 100;
if (banderaMasHijos == false) {

    mensaje =empleadoNombreMasHijos;
}else{
    mensaje = "No tiene hijos"
    
}
if (banderaSinHijos == false) {
    
    mensajeSin ="El nombre;;
}else{
    mensajeSin = "tiene hijos"
    
}
console.log(" Porcentaje de empleados por cada genero." + porcentajeEmpleado);
console.log("El nombre del empleado No Binario con mas cantidad de hijos." + mensaje);
console.log(" Nombre " + nombreSinHijos + " y apellido " + apellidoSinHijos + "  del primer empleado que no tiene hijos");


}

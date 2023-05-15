

// Un maxikiosko solicita la creación de una aplicación simple para ir controlando la mercadería vendida durante el transcurso del día laboral.
// Se ingresarán un total de 10 ventas, incluyendo una serie de datos:

// Nombre del producto,
// Tipo de producto ("golosinas", "bebidas", "cigarrillos"),
// Precio unitario del producto (desde 1,00$ hasta 1000,00$),
// Cantidad de unidades por venta (entre 1 y 10).

// Se deberá calcular e informar:
// a) El total bruto recaudado con las 10 ventas.
// b) El promedio de unidades por compra de golosinas (en caso de no realizar ninguna venta de golosinas, informarlo).
// c) De los cigarrillos más caros, el nombre y su precio unitario.

function mostrar()
{
  let nombreProducto;
  let tipoProducto;
  let precio;
  let cantidadUnidades;
  let totalBruto;
  let acumuladorVenta = 0;
  let acumuladorGolosina = 0;
  let contadorGolosina = 0;
  let banderaCigarrillo = true;
  let nombreMasCaro;
  let precioMasCaro;
  let contadorBebidas = 0;
 
  let porcentajeBebidas;
  let contador = 0;
  let respuesta = 0;


  while (contador < 10) {
    nombreProducto = prompt("Ingrese nombre ");
    
    tipoProducto = prompt('Ingrese tipo Producto entre "golosinas", "bebidas", "cigarrillos"');
    while(tipoProducto != "golosina" && tipoProducto != "bebida" && tipoProducto != "cigarrillo"){
      tipoProducto = prompt('Error. Ingrese tipo Producto entre "golosinas", "bebidas", "cigarrillos"');
    }


    precio = parseFloat(prompt("Ingrese precio"));
    while(precio < 1 || precio > 10){
      precio = parseFloat(prompt("Error. Ingrese  precio entre 1/10 "));
    }

    cantidadUnidades = parseInt(prompt("Ingrese cantidad cantidad Unidades "));
    while (cantidadUnidades < 1 || cantidadUnidades > 10) {
        cantidadUnidades = parseInt(prompt("Error. Ingrese  cantidad Unidades "));
    }
    // a) El total bruto recaudado con las 10 ventas.
    totalBruto = cantidadUnidades * precio;
    acumuladorVenta = acumuladorVenta + totalBruto;
   
    // b) El promedio de unidades por compra de golosinas (en caso de no realizar ninguna venta de golosinas, informarlo).
    switch (tipoProducto) {
      case "golosina":
        acumuladorGolosina = acumuladorGolosina + cantidadUnidades;
        contadorGolosina = contadorGolosina + 1;
        break;
      case"cigarrillo":
      if (precio > precioMasCaro || banderaCigarrillo == true) {
        precioMasCaro = precio;
        nombreMasCaro = nombreProducto;
        banderaCigarrillo = false;
      }
      break;  
      case"bebida":
      contadorBebidas = contadorBebidas + 1;
      break;

    }
// c) De los cigarrillos más caros, el nombre y su precio unitario.







   contador = contador +1;
}//fin while

if (contadorGolosina != 0) {
  promedioGolosinas = acumuladorGolosina /contadorGolosina;
  console.log("El promedio de unidades por compra de golosinas " + promedioGolosinas);
} else {
  console.log("No se ingreso venta golosinas");
}

if (banderaCigarrillo == false) {
  console.log("El cigarrillo mas caro " + precioMasCaro + " y su nombre " + nombreMasCaro)
} else {
  console.log("No se encontro cigarrillo");
}

porcentajeBebidas = contadorBebidas * 100 / contador
console.log("El porcentaje bebidas es " +porcentajeBebidas);










}








// /* 
// Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
// while((isNaN))
// Tipo validad("arena";"cal";"cemento")
// Cantidad de bolsas,
//precioBolsas por bolsa (más de cero ), >0 || < 10000

// Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
// Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
// a) El importe total a pagar , bruto sin descuento y...
// b) el importe total a pagar con descuento(solo si corresponde)
// d) Informar el tipo con mas cantidad de bolsas.
// f) El tipo mas caro*/
//Cristofori Magalí

  // let respuesta;
  // let tipo;
  // let cantidadBolsas;
  // let precioBolsas;
  // let acumuladoBolsas;
  // let precioBruto;
  // let precioBrutoTotal;
  // let porcentaje;
  // let descuento;
  // let precioConDescuento;
  // let acumuladorCal;
  // let acumuladorCemento;
  // let acumuladorArena;
  // let tipoConMasUnidades;
  // let banderaDelPrimerProducto;
  // let tipoMasCaro;
  // let tipoMasCaroPrecio;



  // banderaDelPrimerProducto = true;
  // respuesta = true;
  // acumuladoBolsas = 0;
  // precioBrutoTotal = 0;
  // acumuladorCal = 0;
  // acumuladorCemento = 0;
  // acumuladorArena = 0;

  // while (respuesta == true) {
  //   tipo = parseInt(prompt("ingrese el tipo: arena o cal o cemento"))
  //   while (tipo != "arena" && tipo != "cemento" && tipo != "cal") {
  //     tipo = parseInt(prompt("Error: ingrese el tipo: arena o cal o cemento"))
  //   }

  //   cantidadBolsas = parseInt(prompt("ingrese el cantidad Bolsas"))
  //   while (cantidadBolsas < 1) {
  //     cantidadBolsas = parseInt(prompt("Error: ingrese el cantidad Bolsas"))
  //   }

  //   precioBolsas = parseInt(prompt("ingrese elprecioBolsas"))
  //   while (precio < 1) {
  //     precioBolsas = parseInt(prompt("Error: ingrese elprecioBolsas"))
  //   }
  //   // Cantidad de bolsas,
  //   acumuladoBolsas = acumuladoBolsas + cantidadBolsas;
  //   precioBruto = cantidadBolsas * precioBolsas;
  //   precioBrutoTotal = precioBrutoTotal + precioBruto;//funciona como acumulador x eso la inicializo

  //   // f) El tipo mas caro
  //   if (banderaDelPrimerProducto == true) {
  //     tipoMasCaro = tipo;
  //     tipoMasCaroPrecio = precioBolsas;
  //     banderaDelPrimerProducto = false
  //   } else if (precioBolsas > tipoMasCaroPrecio) {
  //     tipoMasCaro = tipo;
  //     tipoMasCaroPrecio = precioBolsas;
  //   }
  //   // d) Informar el tipo con mas cantidad de bolsas.
  //   switch (tipo) {
  //     case "arena":
  //       acumuladorArena = acumuladorArena + cantidadBolsas;
  //       break;
  //     case "cal":
  //       acumuladorCal = acumuladorCal + cantidadBolsas;
  //       break;
  //     case "cemento":
  //       acumuladorCemento = acumuladorCemento + cantidadBolsas;
  //       break;
  //   }






  //   respuesta = confirm("desea ingresar otro valor 'si' / 'no'")
  // }//FIN WHILE

  // if (acumuladorArena > acumuladorCal && acumuladorArena > acumuladorCemento) {
  //   tipoConMasUnidades = "arena"

  // } else if (acumuladorCal > acumuladorCemento) {
  //   tipoConMasUnidades = "cal"
  // } else {
  //   tipoConMasUnidades = "cemento"
  // }
  // // Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
  // // Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
  // if (acumuladoBolsas > 30) {
  //   porcentaje = 25;

  // } else if (acumuladoBolsas > 10) {
  //   porcentaje = 15;

  // } else {

  //   porcentaje = 0;

  // }
  // //a) El importe total a pagar , bruto sin descuento y...
  // if (porcentaje != 0) {
  //   descuento = precioBrutoTotal * porcentaje / 100;
  //   precioConDescuento = precioBrutoTotal - descuento;
  //   // b) el importe total a pagar con descuento(solo si corresponde)
  //   console.log("Con descuento:" + precioConDescuento);
  // }


  // //a) El importe total a pagar bruto sin descuento
  // console.log("Bruto sin descuento:" + precioBrutoTotal);
  // // d) Informar el tipo con mas cantidad de bolsas.
  // console.log("el tipo mas comprado:" + tipoConMasUnidades);
  // // f) El tipo mas caro
  // console.log("El tipo mas caro es:" + tipoMasCaro);







// let tipo;
// let tipoMasCaro;
// let banderatipoMasCaro = true;
// let cantidadBolsas = 0;
// letprecioBolsas = 0;
// let descuento = 0;
// let totalPagar;
// let mayorTipo = 0;
// let candidadBolsasArena = 0;
// let cantidadBolsasCal = 0;
// let cantidadBolsasCemento = 0;
// letprecioBolsasBruto;
// let acumuladorBolsas = 0;
// let respuesta = true;



// while (respuesta == true)
// { 
//   tipo = prompt('ingrese que tipo: "arena" o "cal" o "cemento"');
//   while(tipo != "cal" && tipo != "arena" && tipo !="cemento") 
//   {
//     tipo = prompt('Error: ingrese que tipo desea "arena";"cal";"cemento"');
//   }

//   cantidadBolsas = parseInt(prompt("ingrese la cantidad de bolsas"));
//   while(isNaN(cantidadBolsas) || cantidadBolsas < 0 || cantidadBolsas > 100000) 
//   {
//     cantidadBolsas = prompt('Error: ingrese un rango valido de 1 hasta 10000');
//   }

//  precioBolsas = parseFloat(prompt("Ingrese el valor de la bolsa"));
//   while(precio < 0)
//   {
//    precioBolsas = parseFloat(prompt("Error: Ingrese el valor de la bolsa"));

//   }


//   acumuladorBolsas = acumuladorBolsas + cantidadBolsas;
//   //d) Informar el tipo con mas cantidad de bolsas.
//   switch (tipo) {
//     case "cal":
//       cantidadBolsasCal = cantidadBolsasCal + cantidadBolsas;
//       break;
//     case "cemento":
//       cantidadBolsasCemento = cantidadBolsasCemento + cantidadBolsas;
//       break;
//     case "arena":
//       candidadBolsasArena = candidadBolsasArena + cantidadBolsas;
//       break;
   
//   }
//   if(banderatipoMasCaro == true || tipoMasCaro <precioBolsas)
//   {
//      tipoMasCaro = tipo;
//      banderatipoMasCaro = false;
//   }

//     respuesta = confirm("desea continuar");

// }//FIN while
  
// if (cantidadBolsas > 10)
// {
//   descuento = 15;

// } else if(cantidadBolsas > 30)
// {
//   descuento = 25;
// }else {

//   descuento = 0;

  
// }

// if (candidadBolsasArena > cantidadBolsasCal && candidadBolsasArena  > cantidadBolsasCemento)
// {
//   mayorTipo = "arena";
      
// } else if(cantidadBolsasCal > candidadBolsasArena && cantidadBolsasCal > cantidadBolsasCemento) 
// {
//   mayorTipo = "cal";

// }else{
//   mayorTipo = "cemento";
 
// }
 

//   descuento =precioBolsas * descuento /100;
//   totalPagar = (precio - descuento) * cantidadBolsas;
//  precioBolsasBruto = cantidadBolsas *precioBolsas;

//   alert("El total a pagar con descuento es " + totalPagar + "\n" +
//   " y el total a pagar sin descuento es: " +precioBolsasBruto + "\n" +
//   "El tipo con mas cantidad de bolsas es: " + mayorTipo + "\n" +
//   "El tipo mas caro es: " + tipoMasCaro);
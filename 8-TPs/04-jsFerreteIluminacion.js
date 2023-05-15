/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % 
    y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, 
    si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
Magalí Cristofori
 *///TP 4 Ferrete iluminancion Con switch(cantidad) y if (marca)
    //txtIdCantidad
    //Marca
    //txtIdprecioDescuento
function CalcularPrecio () 
{ //CLASE DEL SABADO 11/2
    
    /*CADA CAMISA CUESTA $5000. Si el cliente compra 10 camisas o mas, se le ofrece un descuento del 15%,
    pero si compra de cualquier otra marca el descuento sera del 5%*/

    let precioCamisas;
    let cantidadCamisas;
    let descuento;
    let marca;
    let precioBruto;
    let precioFinal;

    precioCamisas = 5000;
    descuento = 0;
    // cantidadCamisas = prompt("Ingresze cantidad de camisas");
    cantidadCamisas = document.getElementById("txtIdCantidad").value;
    marca = document.getElementById("Marca").value;
    cantidadCamisas = parseInt(cantidadCamisas);

    //CALCULO PRECIO BRUTO
    precioBruto = cantidadCamisas * precioCamisas;

    // if(cantidadCamisas > 9 && marca ==  "ArgentinaLuz"){

    //     descuento = 0.15;
    // }
    if (cantidadCamisas > 9) {
        
        if (marca == "ArgentinaLuz")
        {
            
            descuento = 0.15;
        }
        else
        {
            if (condition) 
            {
                descuento = 0.05;
            }
        }
    }

    //CALCULO DESCUENTO
    precioFinal = precioBruto - (precioBruto * descuento);
    alert("usted pagara " + precioFinal)
   















}








// let precioLamparitas;
// let cantidadLamparitas;
// let otraMarca;
// let marca;
// let descuento;
// let totalAPagar;

    
// //INICIALIZO VARIABLE FIJAS
// precioLamparitas = 35;
// descuento = 0;



// //TOMO DATOS DE LA CAJA
// cantidadLamparitas = document.getElementById("txtIdCantidad").value;
// otraMarca =document.getElementById("Marca").value;
// cantidadLamparitas = parseInt(cantidadLamparitas);

// marca = document.getElementById("Marca").value;
       
// switch (marca) {
//     case "ArgentinaLuz":
//        switch (cantidadLamparitas) {
//         case 5:
//             descuento = 40;
//             break;
//         case 4:
//             descuento = 25;
//             break;
//         case 3:
//             descuento = 15;
//             break;
            
//     }
//     break;
//     case "FelipeLamparas":
//         switch (cantidadLamparitas) {
//             case 4:
//                 descuento = 25;
//                 break;
//             case 3:
//                 descuento = 10;
//             break;
//         }
//         break;
//             default:
//                 switch(cantidadLamparitas){
//             case 6:
//                 descuento = 50;
//                 break;
//             case 5:
//                 descuento = 30;
//                 break;
//             case 4:
//                 descuento = 20;
//                 break;
//             case 3:
//                 descuento = 5;
//                 break;
//            case 2:
//                 descuento = 0;
//                 break;
//             case 1:
//                 descuento = 0;
//                 break;
        
     
//             }
//             break;
      
       
        
        
      
// }
      
          
// //CALCULO PRECIO FINAL SEGUN DESCUENTO
// descuento = precioLamparitas * descuento / 100;
// totalAPagar = (precioLamparitas - descuento) * cantidadLamparitas;

// //SUMO EL 10% SI SUPERO LOS $120 DE IMPORTE FINAL 
// if(totalAPagar > 120){

//     ingresoBruto = totalAPagar * 10 /100;
//     totalAPagar = totalAPagar +  ingresoBruto;
//     mensaje = "Usted pago " + ingresoBruto + " de IIBB $ " + totalAPagar;
//     alert(mensaje);
// }
// //MUESTRO LOS RESULTADOS EN LA CAJA DE PRECIO DESCUENTO
// document.getElementById("txtIdprecioDescuento").value = totalAPagar;
   
// switch (cantidadLamparitas) {
//     case 6:
//         if(marca > 6){
//             descuento = 50;
//         }
//         break;
//     case 5://B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%
//         if (marca == "ArgentinaLuz" ) {
//             descuento = 40;
//         }else{
//             descuento = 30;
//         }
//         break;
//     case 4://C.	Si compra 4 lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 %  y si es de otra marca el descuento es del 20%.
   
//         if(marca =="ArgentinaLuz" || marca =="FelipeLamparas" ){
//             descuento = 25;
//         }else {
//             descuento = 20;
//         }
//         break;
//     case 3://D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%,   si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
  
//         if(marca == "ArgentinaLuz"){
//             descuento = 15;
//         }else if(marca =="FelipeLamparas"){
//             descuento = 10;
//         }else{
//             descuento = 5;
//         }
        
//         break;
//     default:
//        if(marca <= 3){
//         descuento = 0
//        }
//         break;

// }
   
   
// let precioLamparitas;
//     let cantidadLamparitas;
//     let marca;
//     let descuento;
//     let totalAPagar;

        
//     //INICIALIZO VARIABLE FIJAS
//     precioLamparitas = 35;
//     descuento = 0;
    

    
//     //TOMO DATOS DE LA CAJA
//     cantidadLamparitas = document.getElementById("txtIdCantidad").value;
//     cantidadLamparitas = parseInt(cantidadLamparitas);

//     marca = document.getElementById("Marca").value;
           

          

//     switch (marca) {
//         case "ArgentinaLuz":
//             if(cantidadLamparitas > 6){
//                 descuento = 50;
//             }else if (cantidadLamparitas == 5){
//                 descuento = 40;
//             }else if(cantidadLamparitas == 4){
//                 descuento = 25;
//             }else if (cantidadLamparitas == 3){
//                 descuento = 15;
//             }
//             break;
//         case "FelipeLamparas":
//             if(cantidadLamparitas == 4){
//                 descuento = 30;
//             }else if (cantidadLamparitas == 3){
//                 descuento = 10;
//             }
//             break;
            
    
//         default:
//              if (cantidadLamparitas == 5){
//                 descuento = 30;
//             }else if(cantidadLamparitas == 4){
//                 descuento = 20;
//             }else if (cantidadLamparitas == 3){
//                 descuento = 5;
//             }
//             break;

//     }
                     
//     //CALCULO PRECIO FINAL SEGUN DESCUENTO
//     descuento = precioLamparitas * descuento / 100;
//     totalAPagar = (precioLamparitas - descuento) * cantidadLamparitas;

//     //SUMO EL 10% SI SUPERO LOS $120 DE IMPORTE FINAL 
//     if(totalAPagar > 120){

//         ingresoBruto = totalAPagar * 10 /100;
//         totalAPagar = totalAPagar +  ingresoBruto;
//         mensaje = "Usted pago " + ingresoBruto + " de IIBB $ " + totalAPagar;
//         alert(mensaje);
//     }
//     //MUESTRO LOS RESULTADOS EN LA CAJA DE PRECIO DESCUENTO
//     document.getElementById("txtIdprecioDescuento").value = totalAPagar;

 











//  //DECLARO VARIABLE
//  let precioLamparitas;
//  let cantidadLamparitas;
//  let marca;
//  let descuento;
//  let totalAPagar;
 


//  //INICIALIZO VARIABLE FIJAS
//  precioLamparitas = 35;
//  descuento = 0;
 

 
//  //TOMO DATOS DE LA CAJA
//  cantidadLamparitas = document.getElementById("txtIdCantidad").value;
//  cantidadLamparitas = parseInt(cantidadLamparitas);

//  marca = document.getElementById("Marca").value;

 

 
//  //AGREGO EL DESCUENTO SEGUN CONDICION
//  if(cantidadLamparitas > 5){
//      descuento = 50;

//  }else if(cantidadLamparitas == 5){

//      if(marca == "ArgentinaLuz"){

//          descuento = 40;
//      }else{

//          descuento = 30;
//      }
//  }else if(cantidadLamparitas == 4){

//      if(marca == "ArgentinaLuz" || marca == "FelipeLamparas"){

//          descuento == 25;
//      }else{

//          descuento = 20;
//      }
//  }else if(cantidadLamparitas == 3){

//      if (marca == "ArgentinaLuz") {

//          descuento = 15;

//      }else if(marca == "FelipeLamparas"){

//          descuento= 10;
//      }else{

//          descuento = 5;
//      }
//  }else{
//      descuento = 0;
//  }

// //CALCULO PRECIO FINAL SEGUN DESCUENTO
//  descuento = precioLamparitas * descuento / 100;
//  totalAPagar = (precioLamparitas - descuento) * cantidadLamparitas;

//  //SUMO EL 10% SI SUPERO LOS $120 DE IMPORTE FINAL 
//  if(totalAPagar > 120){

//      ingresoBruto = totalAPagar * 10 /100;
//      totalAPagar = totalAPagar +  ingresoBruto;
//      mensaje = "Usted pago " + ingresoBruto + " de IIBB $ " + totalAPagar;
//      alert(mensaje);
//  }
//  //MUESTRO LOS RESULTADOS EN LA CAJA DE PRECIO DESCUENTO
//  document.getElementById("txtIdprecioDescuento").value = totalAPagar;

















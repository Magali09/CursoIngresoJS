/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
 //prompt es una funcion,las funciones hacen cosas por nosotros

	//1 pido dato
   let dato;
  
   //pido el dato
   dato = prompt("escriba su nombre");

   //al poner la variable al final , esto hace que lo ingresado por el usuario se muestre en el cuadro de texto, lo convierto en dato de salida
   document.getElementById("txtIdNombre").value = dato;

}


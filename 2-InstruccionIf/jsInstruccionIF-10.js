/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
Cristofori Magalí */
function mostrar()
{
	
let nota;
	let mensaje;

	nota = (Math.floor(Math.random() * 10 )+ 1); // el + 1 es para que me contemple el 10 en los numero aleatorios
	if(nota >= 9 && nota <= 10){
		mensaje = nota + " EXCELENTE"
	}
	else{
		if (nota >= 4) {
			mensaje = nota + " APROBÓ";
		} else {
			mensaje = nota + " Vamos, la proxima se puede" ;
		}
	}
	alert(mensaje);
	// console.log(mensaje);

}//FIN DE LA FUNCIÓN
//operadores relacionales o condicionales < (menor que), > (mayor que), <= (menor o igual que), >= (mayor o igual que), == (igual) y !=(distinto)






































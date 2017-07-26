/* querySelector y addEventListener

	El objeto document es el que tiene el contenido de toda la pagina que se esta visualizando 

*/

// 1 Primer paso encontrar el elemento disparador que va a ejecutar la funcion y cargarlo en una variable

let btn = document.querySelector("#boton");

// 2  Segundo paso subscribirle a un escuchador de un evento (click, blur, keyup, keydown, mouseover)

btn.addEventListener("click", cambiarColor);


// 3 funciones
function cambiarColor(){

	document.getElementById("cuadrado2").style.backgroundColor = "black";
}

//--------------------------------------------------------------------------------------------------------------------

/* Peticiones Ajax
		
		ATENCION!! para relaizar esta prueba debemos tener instalado el paquete wamp o xamp y ejecutar este archivo
		desde la carpeta www del wamp por ejemplo
		
		Son peticiones que refrescan solo el elemento a modificar sin nesecidad de tener que hacer un refreesh de toda la pagina

		El ejemplo mas claro es cuando elegimos en un formulario la provincia en la que vivimos y de inmediato 
		se actualizan los datos con todas las ciudades de esa prov.

		pasos 1 instanciamos el objeto ajax
			  2 preparamos la respuesta
			  3 se realiza la peticion
			  4 se ejecuta la func de callback	

*/
//buscamos el elemento disparador y lo asignamos a una variable
let btnajax = document.querySelector("#botonajax");

//subscribimos al escuchador

btnajax.addEventListener("click", traerDato);



function traerDato(){
	// Cargamos en la variable url la direccion de donde vamos a obtener el dato en este caso es otro archivo js
	let url = "parrafo.js";
	//el objeto XMLHttpRequest, que es el objeto clave que permite realizar comunicaciones con el servidor en segundo plano, sin necesidad de recargar las páginas
	let ajax = new XMLHttpRequest(); 

	//subscribimos al objeto si se carga nos devuelve la respuesta y si da err el error
	ajax.addEventListener('load',respuesta); //Callback respuesta server
	ajax.addEventListener('error',ajaxError); //Callback respuesta Error

	//setemoas la peticion x get a la url ya especificada mas arriba con el metodo .open y se envian los datos con el metodo.send
	ajax.open('GET',url); //Preparo la conexion
	ajax.send(); //Envio datos al servidor!

	/*
	* Ambos callbacks quedan protegidos dentro de la funcion "traerDato".
	* No se pueden ver desde el contexto global
	*/

	//a esta funcion se la llama callback por que esta como parametro de otra func
	function respuesta(){
		//buscamos el elemento donde insertar el texto que trajimos del archivo parrafo.js
		document.getElementById("parrafin2").innerHTML= ajax.responseText; 
	}

	function ajaxError(e){
		console.error('Error',e);
	}
}
// Funciones
//Tradicional


//se declara la funcion con la palabra reservada function
function saludar(){
	console.log("Hola Locooo!!")
}
//se la ejecuta llamando
saludar();


//----------------------------------------------------------------------------------

//Se pueden declarar variables de tipo objeto como funcion ej

var habla = function(palabra){
	console.log(palabra);
}

// esta func llama a la func habla y le pasa el string com parametro
var hola = function(nombre){
	habla("Como va " + nombre);
}

hola("Berny");
hola("Eli");

//----------------------------------------------------------------------------------------------------

/*FUNCIONES ANONIMAS   

entenderlas es fundamental para dominar el concepto de callbacks 

las funciones anonimas no pueden volver a ser invocadas, simplemente se ejecutan 
 salvo que se almacenen en nun array por ejemplo

 en java script todo lo que va entre () se ejecuta
*/


//se crea un array vacio
var saludos = [];



var agregar = function(func){//func para pushear al array las funciones
	saludos.push(func);
}



var recorrer = function(){//funcion para recorrer el array saludos
	for(var i=0; i<saludos.length; i++){
		saludos[i]();//se van ejecutando las funciones
	}
}

agregar(function(){
	console.log("Hola Berny");
})
agregar(function(){
	console.log("Que Haces Eli");
});
agregar(function(){
	console.log("Como Va Mauri");
});


recorrer();


/* CLOUSURES
		Se pueden anidar N funciones dentro de funciones, ahora solo s epueden acceder a la variables de las funciones padres
		y no desde la padres a las hijas.
*/


var abuelo = "soy la variable abuelo cuelgo de window"
console.log(abuelo);
console.log(padre +" esta dentro de func1 no la veo");
console.log(hijo + " esta dentro de la fun que esta dentro d ela func1 tampoco la veo");
function func1(){
	var padre =	"Soy la variable padre mi ambito es dentro de la func"
	console.log(abuelo);
	console.log(padre);
	console.log(hijo + "esta no la puedo ver");
	
	function func2(){
		var hijo = "Soy la variable hijo mi ambito es la func anidada"

		console.log(abuelo);
		console.log(padre);
		console.log(hijo);
	}
}

/* este codigo asi como esta no puede ser ejecutado ya que desde el vamos no va a encontrar la variable padre */ 

//------------------------------------------------------------------------------------------------------------------------------

/* FUNCIONES FLECHA =>
	Con las func de tipo felcha vamos ahorra mucho tiempo a la hora de escribir el codigo
	las func flecha son siempre anonimas
	 veamos algunos ejemplos

*/
var num1 = 4;
var num2= 7;
 
 //func normal con su nombre sus parametros y dentro del scope el retorno
function sumar (a,b){
	return a+b;
}

//func felcha nombre parametros accion

var resta = (a,b) => a-b;


console.log(sumar(num1,num2));

console.log(resta(num1,num2));

// Ahora surgen algunas preguntas que pasa si no tengo parametros, o si solo tengo uno, o si tengo muchos

//con solo 1 parametro obviamos los parentesis

var num3= 22;

var multiplicar = num => num*2;

console.log(multiplicar(num3)); 

// si no se necesita parametro van los parentesis vacios

var saludar = ()=> "Hola Gente!!";

console.log(saludar());


//En el caso de necesitar mas parametros se usa la opcion (foo, bar, ...theArgs) y si necesitamos varias lineas de
//codigo en el scope simplemente agregamos las laves

var muchos = (foo, bar, ...args) =>{
	console.log(foo);
	console.log(bar);
	console.log(args);
}  

console.log(muchos("bar1", "bar2", "bar3", "bar4", "bar5", "bar6"));


//-------------------------------------------------------------------------------------------------------------------------

//CALLBACKS se llama callback a la funcion que se pasa como parametro que nos devuelve una respuesta


//creamos una func y le pasamos como parametro otra func
function saludar(callback) {
    callback();
}

//cuando llamamos a saludar tiene una func anonima que imprime por consola Que Ta l!!
saludar(function(){
    console.log('Que Tal !!');
});

// Veamos algo mas complejo
let num1= 23;
let num2= 19;

//creo una func sumar que recibe de parametro a,b para que los use la func callback
function sumar(a, b, callback){
    return callback(a+b);
}


//  le pasamos los parametros num1 y num2 y a su ves la respuesta del callback con el resultado
// recordemos q function(r) es = a callback(a+b)
Sumar(num1, num2, function(r){
    console.log('El resultado es ' + r);
})








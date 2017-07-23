/*TODO LO QUE SE VALLA ESCRIBIENDO ACA PUEDE SER PROBADO EN LA CONSOLA DEL NAVEGADOR CHROME O
FIREFOX apretando f12 solapa console*/

/*Hay dos tipos de variables en JavasScrip. las primitivas y los objetos
 	
 	Las primitivas son: Cadenas(string)
 						Booleanos(true/false)
 						Numeros
 						Null
 						Undefined 
*/

/*
En Js no hace falta declarar el tipo de la variable 
ni si quiera poner la palabra reservada var (que por buena practica si lo vamos a  hacer)

Ej
*/

var a = "Hola Mundo" // estamos declarando la variable como un string
var b = 1 // entero
var c = true // boolean
var d = null // null
var e = undefined // undefined

console.log (a,b,c,d,e);


/*-----------------------------------------------------------------------------------------------------------*/

// Ejemeplo con variables

var a = 2;

var b = 3;

var c = (a+b);

console.log("El resultado de la suma entre "+a+" y "+b+" es: "+c );


/*-------------------------------------------------------------------------------------------------------------*/

//Objetos

//Strings --> manejo de cadena de caracteres que tiene Propiedades y Metodos

var string = ""// string vacio

string = " Este es un  ejemplo de string";

console.log(string.indexOf("ejemplo"));// imprime en que posicion del array se encuentra la palabra ejemplo de no encontrarla devuelve -1
console.log(string.toLowerCase());// pasa todo el string a minusculas

//-----------------------------------------------

//Arrays son objetos con propiedades y metodos al igual que en java o c#
// 1 ejemplo
var alumnos = ["Nahuel", "Bernardo", "Elias"];

for (var i = 0; i < 3; i++) {
	console.log(alumnos[i])
}


// 2 ejemplo propiedad push
var numeros = [];// delcaramos un array vacio

for (var e=0;  e<10; e++){ // con la propiedad push insertamos elementos al array y devuelve la longitud
	numeros.push(e);
}

console.log(numeros);// no hace falta hacer un for para imprimir todo le array
	
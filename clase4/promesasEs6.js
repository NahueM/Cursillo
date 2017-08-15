'use strict'
let fs = require('fs');

const nombres = './assets/nombres.txt'
const nombresES6 = './assets/nombresES6.txt'

// se crea una primer promesa y se busca el archivo
let promise = new Promise(function(resolve, reject){
    fs.access(nombres, fs.F_OK, (err)=>{
      //retorna. si hay (err) entonces(?) el error si no(:) la promesa fue resuelta
      return (err) ? reject ( new Error('El archivo no existe')) : resolve(true)
    })
});


promise
    //entonces como fue resuelta, que hacemos?
    .then(function(resolved,  rejected){
        //imprimo que el archivo existe
        console.log('El archivo existe')
          //y creo una nueva promesa para leer el archivo
          return new Promise (function (resolve, reject){
              //leemos el archivo
              fs.readFile(nombres, function (err, data){
                //si hay err imprimimos el mismo si no le pasamos a la siguiente promesa el archivo(data)
                return (err) ? reject (new Error ('El archivo no se pudo leer')) : resolve (data)
              })
          })
    })
    //recordemos resolved tiene el archivo que nos envio la promesa anterior
    .then(function(resolved,  rejected){
        //entonces(then) creamos una nueva promesa para copiar el archivo al nuevo
        return new Promise(function (resolve, reject){
            /*esta func nos pide como parametros el archivo destino y el dato q va a ser escrito
            este estaba en el resolve que nos envio la promesa anterior entonces esta resuelto(resolved)
            por eso va resolved y no resolve*/
            fs.writeFile(nombresES6, resolved, function(err){
              return (err) ? reject (new Error('El archivo no se pudo copiar')) : resolve ('El archivo se ha copiado con exito')
            })
        })
    })
    //si llegamos a esta altura significa que no hubo errores e imprimimos el resolve que nos envia la promesa anterior
    .then(function(resolved, rejected){
        console.log(resolved);
    })
    //si en algun momento surge un error se detiene todo y se imprime el mismo
    .catch(function(err){
        console.log(err.message);
    })

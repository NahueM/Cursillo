'use strict';
const nombres = './assets/nombres.txt'
const nombresCB= './assets/nombres callbacks.txt'
let fs = require('fs');

//permite el acceso al archivo con las constantes de escritura y lectura
fs.access(nombres, fs.R_OK | fs.W_OK, function (err){
    if(err){
        console.log('El archivo existe o no tienes permiso para leerlo');
    }else{
        console.log('puedes leer/escribir el archivo');
        //se lee el archivo
        fs.readFile(nombres, (err, data)=>{
          if(err){
              throw err;
          }else{
            console.log('el archivo se pudo leer exitosamente');
            //se crea el archivo con la copia del primero en la ubicacion
            fs.writeFile(nombresCB, data, (err)=>{
              return (err) ? console.log('no se pudo escribir el archivo') : console.log('el archivo se copio con exito')

          });
        }
      });
    }
});

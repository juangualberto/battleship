/**
 * Este objeto genera aleatorios entre 
 * un mínimo y un máximo
 */


 /**
  * devuelve un número entero entre un mínimo
  * y un máximo
  */

 function azar (min,max) {
    return  Math.floor(Math.random() * Math.floor(max) + min);
 }
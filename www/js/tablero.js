// import 'matriz'
// import 'barcos'

/*
 para más información sobre los import consulta estas Web:

 https://developers.google.com/web/fundamentals/primers/modules
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

*/

/**
 * Lo hacemos como clase porque necesitamos un tablero para el
 * humano y otro para la máquina.
 */

class tablero{

    constructor(filas, columnas,barcos){
        this.matriz=new Matriz(filas,columnas);
        this.matriz.fill('a'); // a=agua A=agua tras hacer clic en esa casilla
        for(let i=0; i<barcos; i++){
            colocaBarco($.barcos[i%5]);
        }
    }

    colocaBarco(barco){
        
    }

}
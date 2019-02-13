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
 * 
 * Direcciones: 0=NORTE, 1=ESTE, 2=SUR, 3=OESTE
 * 
 */

class Tablero{

    constructor(filas, columnas){
        this.matriz=new Matriz(filas,columnas);
        this.reset();
    }

    inicializa(barcos){
        this.barcos=[];
        this.tocado=0;
        for(let i=0; i<barcos; i++){
            this.colocaBarco($.barcos[i%5]);
            this.barcos.push($.barcos[i%5]);
            this.tocado+=$.barcos[i%5].tam;
        }
    }

    reset(){
        this.matriz.fill('a'); // a=agua A=agua tras hacer clic en esa casilla
    }

    colocaBarco(barco){
        var libre=false;
        do{
            let posFil, posCol;
            let direccion=azar(0,3);
            switch (direccion) {
                case 0: //norte
                    posFil=azar(barco.tam-1,this.matriz.getFilas()-1);
                    posCol=azar(0,this.matriz.getColumnas()-1);
                    libre=this.mirarNorte(posFil, posCol, barco.tam);
                    if(libre){
                        this.colocarNorte(posFil,posCol,barco);
                    }
                    break;
                case 2: // sur
                    posFil=azar(0,this.matriz.getFilas-barco.tam);
                    posCol=azar(0,this.matriz.getColumnas()-1);
                    libre=this.mirarSur(posFil, posCol, barco.tam);
                    if(libre){
                        this.colocarSur(posFil,posCol,barco);
                    }
                    break;
                case 1: // este
                    posFil=azar(0,this.matriz.getFilas()-1);
                    posCol=azar(0,this.matriz.getColumnas()-barco.tam);
                    libre=this.mirarEste(posFil, posCol, barco.tam);
                    if(libre){
                        this.colocarEste(posFil,posCol,barco);
                    }
                    break;
                case 3: // oeste
                    posFil=azar(0,this.matriz.getFilas()-1);
                    posCol=azar(barco.tam-1,this.getColumnas()-1);
                    libre=this.mirarOeste(posFil, posCol, barco.tam);
                    if(libre){
                        this.colocarOeste(posFil,posCol,barco);
                    }
                    break;
                default:
                    break;
            }
            console.log("Intentando colocar... "+barco.nombre+" en direccion="+direccion+" libre="+libre);
        }while(!libre);

    }

    mirarEste(fil,col,tamano){
        for(let i=col;i<col+tamano;i++){
            if(this.matriz.get(fil,i) != 'a'){
                return false;
            }
        }
        return true;
    }

    mirarNorte(fil,col,tamano){
        for (let i=0; i<tamano; i++) {
            if (this.matriz.get(fil-i,col) != 'a')
                return false;
        }
        return true;
    }

    mirarOeste(fil,col,tamano){
        for(let i=col;i>col-tamano;i--){
            if(this.matriz.get(fil,i) != 'a'){
                return false;
            }
        }
        return true;
    }

    mirarSur(fil,col,tamano){
        for(let i=fil;i<fil+tamano;i++){
            if(this.matriz.get(i,col) != 'a'){
                return false;
            }
        }
        return true;
    }

    colocarEste(fil,col,barco){
        for(let i=col;i<col+barco.tam;i++)
            this.matriz.set( fil, i, barco.cod );
    }

    colocarNorte(fil,col,barco){
        for (let i=0; i<barco.tam; i++) 
            this.matriz.set( fil-i, col, barco.cod );
    }

    colocarOeste(fil,col,barco){
        for(let i=col;i>col-barco.tam;i--) 
            this.matriz.set( fil, i, barco.cod );
    }

    colocarSur(fil,col,barco){
        for(let i=fil;i<fil+barco.tam;i++) 
            this.matriz.set( i, col, barco.cod );
    }

    aTexto(){
        let salida=JSON.stringify(this.barcos,null,2);
        salida+="\n"+this.matriz.toString();
        return salida;
    }

}
/**
 * Estructura de datos para almacenar tableros de partidas
 * CODIFICACIÓN:
 * ANTES DE DISPARAR ENCIMA:
 * a = agua
 * f = fragata (tamaño 2)
 * s = submarino (tamaño 3)
 * d = destructor (tamaño 4) 
 * p = portaaviones (tamaño 5)
 * CUANDO HEMOS DISPARADO YA ENCIMA:
 * A = agua
 * F = fragata (tamaño 2)
 * S = submarino (tamaño 3)
 * D = destructor (tamaño 4) 
 * P = portaaviones (tamaño 5)
 */

// En Java: 
        /*
        Class Matriz{
            int filas;
            int columnas;
            int [][]data;
            Matriz(){

            }
            Matriz(fil,col){

            }
            int get(i,j) {}
            boolean set(i,j.dato) {}
        }
        */
       class Matriz{    
            constructor(fil, col){
                this.columnas=col;
                this.filas=fil;
                this.data=new Array(this.filas);

                for (var i=0; i<fil; i++) {
                    this.data[i] = new Array(this.columnas);    
                    this.data[i].fill('a');  
                }
            }
    
            /**
             * Devuelve el número de filas de la matriz
             * @returns el número de columnas
             */
            getFilas(){
                return this.filas;
            }

            /**
             * Nos da el número de columnas de la matriz
             * @returns el número de columnas
             */
            getColumnas(){
                return this.columnas;
            }

            /**
             * Devuelve el contenido de la posición indicada en la matriz.
             * Si nos salimos de la matriz, devuelve NULL.
             * @param {number} i fila
             * @param {number} j columna
             */
            get(i,j) {
                if (i>=0 && i<this.filas && j>=0 && j<this.columnas )
                    return this.data[i][j];
                else 
                    return null;
            }

            /**
             * Guarda un dato en una posición dada de la matriz.
             * @param {number} i fila en la matriz
             * @param {number} j columna en la matriz
             * @param {number} dato dato (objeto, letra, cadena...) a almacenar
             */
            set(i,j,dato){
                if (i>=0 && i<this.filas && j>=0 && j<this.columnas ) {
                    this.data[i][j]=dato;
                    return true;
                } else {
                    return false;
                }
            }

            /**
             * Rellena con "dato" la matriz
             * @param {*} dato 
             */
            fill(dato){
                for(let i=0;i<this.filas;i++){
                    this.data[i].fill(dato);                
                }
            }

            /**
             * Nos convierte a cadena los datos almacenados
             */
            toString(){
                var salida ="";
                for(let i=0; i<this.filas; i++){                
                    for(let j=0;j<this.columnas;j++){
                        salida+=this.data[i][j]+" ";
                    }
                    salida+="\n";
                }
                return salida;
            }
    }
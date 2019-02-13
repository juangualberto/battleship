/**
 * La función $(document).ready() de jQuery 
 * ejecuta este código cuando se carga totalmente
 * la página (index.html).
 */

$(document).ready(function() {
    let tablero_jugador=new Tablero(10,10);
    tablero_jugador.inicializa(9);
    // let tablero_maquina=new Tablero(10,10);
    // tablero_maquina.inicializa(6);


    for (let i=0; i<10;i++){
        console.log(azar(0,4));
    }

    console.log('Humano: \n'+tablero_jugador.aTexto());
    // console.log('Máquina: \n'+tablero_maquina.aTexto());
    $.controlador.init("panel_inicio");
});

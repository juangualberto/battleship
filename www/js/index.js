/**
 * La función $(document).ready() de jQuery 
 * ejecuta este código cuando se carga totalmente
 * la página (index.html).
 */

$(document).ready(function() {
    let tablero_jugador=new Matriz(8,8);
    let tablero_maquina=new Matriz(8,8);
    tablero_jugador.fill('J');
    tablero_maquina.fill('M');
    console.log('Humano: \n'+tablero_jugador.toString());
    console.log('Máquina: \n'+tablero_maquina.toString());
    $.controlador.init("panel_inicio");
});

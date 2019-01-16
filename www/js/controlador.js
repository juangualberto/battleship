
$.controlador = {};

$.controlador.panel_activo="";

/**
 * Método para alternar entre paneles.
 */

$.controlador.activarPanel = function (panel_nuevo) {
    $($.controlador.panel_activo).hide();
    $(panel_nuevo).show();
    $.controlador.panel_activo=panel_nuevo;
}



/**
 * Método para inicializar la aplicación
 */
$.controlador.init = function (panel_inicial) {
    /* 
     +  $('[id^="menu_"]'): me devuelve la lista de todas las etiquetas
        que tienen un atributo ID que comienza por "menu_".

     +  $('[id^="menu_"]').each(mi_funcion): para cada elemento de la
        lista seleccionada, llama a "mi_funcion".
 
    */
    $('[id^="menu_"]').each(function (){
            // concateno con "#" porque en jQuery ponemos delante "#" para
            // que se sepa que es un ID lo que queremos seleccionar.
            let id_menu = "#"+$(this).attr('id');
            // sustituye en el string id_menu el texto "menu_" por "panel_"
            let id_panel = id_menu.replace('menu_','panel_');
            // conecta el evento "on click" del id #menu_XXXX con
            // mostrar el panel #panel_XXXX
            $(id_menu).click($.controlador.activarPanel(id_panel));
        });
    /*
        $(".panel"): selecciona todos los elementos de la página de clase
        class="panel"
        $(".panel").hide(): Para todo elemento de la lista, lo oculta
    */    
    $(".panel").hide();
    // pone activa el panel por defecto
    $.controlador.activarPanel(panel_inicial);
}
    

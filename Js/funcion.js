$(document).ready(function(){
    $('#Piedra, #Papel, #Tijera').click(function() {

        //1. Seleccionar y mostrar lo que el usuario eligio
      
        var eleccion = $(this).attr("id");
        $('#eleccion').html(eleccion);

        //2. Crear posibles elecciones de la maquina

        var maq = Math.floor(Math.random()*3);

        if (maq== 0)
        {
            maq ="Piedra";

        } 
        else if (maq == 1)
        {
           maq = "Papel";

        }
        else if (maq == 2)
        {
            maq = "Tijera";
        }
        $('#maq_eleccion').html(maq);

        //3. Comparamos lo que eligio la maquina y lo que eligio el usuario y decimos que pasará..

        if (eleccion == 'Piedra')
        {
            if (maq == 'Papel')
            {
                res = "Perdiste"
            }
            else if (maq == 'Tijera')
            {
                res == "¡Ganaste!"
            }
            else if (maq == 'Piedra')
            {
                res == "Empate";
            }
        }
        if (eleccion == 'Papel')
        {
            if (maq == 'Tijera')
            {
                res = "Perdiste"
            }
            else if (maq == 'Piedra')
            {
                res == "¡Ganaste!"
            }
            else if (maq == 'Papel')
            {
                res == "Empate";
            }
        }
        if (eleccion == 'Tijera')
        {
            if (maq == 'Piedra')
            {
                res = "Perdiste"
            }
            else if (maq == 'Papel')
            {
                res == "¡Ganaste!"
            }
            else if (maq == 'Tijera')
            {
                res == "Empate";
            }
        }

        $('#res').html (res);
    })

})
<?php

    $nombre = $_POST['nombre'];
    $apelido = $_POST['apellido'];

    if (!empty($nombre) || !empty($apelido)) {
        echo "vacio papu";
    }
    else {
        //echo "Hola ".$nombre." ".$apelido."!";
    }

?>
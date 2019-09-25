<?php

    $nombre = $_GET['Nombre'];
    $apelido = $_GET['apellido'];

    if (empty($nombre) || empty($apelido)) {
        echo "vacio papu";
    }
    else {
        echo "Hola ".$nombre." ".$apelido."!";
    }

?>
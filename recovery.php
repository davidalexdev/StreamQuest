<?php
require_once 'entity/conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $email = $_POST['email'];

    $query = "SELECT * FROM usuarios WHERE correo_electronico ='$email'";
    $resultado = pg_query($conexion, $query);


    if (pg_num_rows($resultado) > 0) {
        echo "El correo electrónico se encuentra registrado";
    } else {
        echo "El correo electrónico no se encuentra registrado";
    }
}
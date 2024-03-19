<?php
require_once 'entity/conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $user = $_POST['user'];
    $pass = $_POST['pass'];

    $query = "SELECT contraseña FROM usuarios WHERE correo_electronico ='$user'";
    $resultado = pg_query($conexion, $query);


    if (pg_num_rows($resultado) > 0 && pg_fetch_row($resultado)[0] == md5($pass)) {
        echo "Usuario si está registrado";
    } else {
        echo "Usuario no está registrado";
    }
}
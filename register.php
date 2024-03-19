<?php
require_once 'entity/conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $email = $_POST['email'];
    $password = md5($_POST['password']);



    $query = 'INSERT INTO usuarios' . " (nombres, apellidos, correo_electronico, contraseña) VALUES ('$nombre', '$apellido', '$email', '$password')";
    $resultado = pg_query($conexion, $query);

    if ($resultado) {
        echo "Nuevo usuario registrado correctamente";
    } else {
        echo "Error al registrar usuario nuevo";
    }
}
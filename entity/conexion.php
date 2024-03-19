<?php
$host = "localhost"; // Host de la base de datos
$port = "5454"; // Puerto de PostgreSQL por defecto
$dbname = "streamquest"; // Nombre de tu base de datos
$user = "postgres"; // Usuario de PostgreSQL
$password = "dani0928"; // Contraseña de PostgreSQL

try {
    $conexion = pg_connect("host=$host port=$port dbname=$dbname user=$user password=$password");

    if (!$conexion) {
        die("Error en la conexión a la base de datos");
    }
} catch (PDOException $e) {
    echo "Error de conexión: " . $e->getMessage();
}
?>

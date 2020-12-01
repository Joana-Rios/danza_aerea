<?php
    $servidor = 'localhost';
    $usuario = 'root';
    $clave = '';
    $baseDeDatos = 'prueba';
    $enlace = mysqli_connect($servidor, $usuario, $clave, $baseDeDatos);
    
    if(!$enlace) {
        echo "Error de conexion".'<br>';
    } else {
        echo "Conexion Exitosa ".'<br>';
    }
    
    $nombre = $_POST['name'];
    $phone = $_POST['phone'];
    $adress = $_POST['adress'];
    $producto = $_POST['product'];

    $insertarDatos = "INSERT INTO form (`nombre`, `phone`, `adress`, `product`) VALUES('$nombre',
                                               '$phone',
                                               '$adress',
                                               '$producto')";
    
    $ejecutarInsertar = mysqli_query($enlace,$insertarDatos);

    if (!$ejecutarInsertar) {
        echo "Hay un pinche error";
    } else {
        echo "POST exitoso".'<br>';
    }

    mysqli_close($enlace);
    echo 'El nombre es: '.$_POST['name'].'<br>';
    echo 'El telefono es: '.$_POST['phone'].'<br>';
    echo 'La direccion es: '.$_POST['adress'].'<br>';
    echo 'El producto es: '.$_POST['product'].'<br>';
?>

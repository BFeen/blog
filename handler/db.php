<?php 

    $db = mysqli_connect('localhost', 'root', '', 'blog');
    if (!$db) {
        echo 'Не удалось подключиться к базе данных';
        die();
    } else {
        mysqli_set_charset($db, 'utf8');
    }

?>
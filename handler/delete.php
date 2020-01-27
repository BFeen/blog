<?php 

    include($_SERVER['DOCUMENT_ROOT'] . '/handler/db.php');
    $sql = "UPDATE `blog` 
            SET `visibility` = 0 
            WHERE `id` = '{$_GET['id']}'";
    if ($result = mysqli_query($db, $sql)) {
        echo 'done';
    }

?>
<?php session_start();
    include('db.php');  
    $sql = "SELECT `pass` FROM `user` WHERE `name` = '{$_GET['name']}'";
    $result = mysqli_query($db, $sql);

    $data = mysqli_fetch_assoc($result);

    if (password_verify($_GET['pass'], $data['pass'])) {
        $_SESSION['name'] = $_GET['name'];
        echo true;
    } else {
        echo false;
    }
?>
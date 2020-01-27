<?php
// открытие поп-ап окна поста
// формируется массив $data[], который в формате JSON передается на main.js
    include($_SERVER['DOCUMENT_ROOT'] . '/handler/db.php');
    $sql = "SELECT `title`, `post`, `date` FROM `blog` WHERE `id` = '{$_GET['post_id']}'";
    $result = mysqli_query($db, $sql);
    $data = mysqli_fetch_assoc($result);
    echo json_encode($data);
?>
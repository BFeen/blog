<?php 
    include($_SERVER['DOCUMENT_ROOT'] . '/handler/db.php');
    date_default_timezone_set('Europe/Moscow');

    $date = date('j.m.y \a\t H:i');
    $title = $_POST['title'];
    $text = $_POST['text'];
    $description = $_POST['text'];
// Создание краткого описа...
    if (strlen($_POST['text']) > 200) {
        $description = substr($description, 0, 200);
        $description .= '...';
    }
// Отправка данных в БД
    $sql = "INSERT INTO `blog` (`title`, `description`, `post`, `date`, `visibility`) VALUES ('{$title}', '{$description}', '{$text}', '{$date}', 1)";
    if ($result = mysqli_query($db, $sql)) {
        echo 'Запощщено';
    }
?>
<?php 
    include('db.php');
// Выгрузка постов из БД
    $sql = "SELECT * FROM `blog` WHERE `visibility` = 1";
    $result = mysqli_query($db, $sql);
    if (mysqli_num_rows($result) == 0) {
        echo "записей не найдено";
    } else {
        while($data = mysqli_fetch_assoc($result)) {
            echo "
                <div class='post__item clickable' data-post-id='{$data['id']}'>
                    <h3 class='post__title'>{$data['title']}</h3>
                    <p class='post__date'>{$data['date']}</p>
                    <p class='post__desc'>{$data['description']}</p>
                    <div class='post__delete'>&#10006;</div>
                </div>";
        }
    }
?>

<!-- <button class="exit">Выйти</button> -->
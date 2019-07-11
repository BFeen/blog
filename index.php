<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="styles/style.css">
    <title>MyPosts</title>
</head>
<body>
    <div class="wrapper">
    <header></header>
        <main class="main"> 
            <div class="write">
                <span class="write__roll">написать</span>
                <form class="write__form" action="" method="post">
                    <input name="title" type="text" class="write__title" placeholder="Заголовок">
                    <textarea class="write__text" name="text" id=""></textarea>
                    <button class="write__btn">Запостить</button>
                </form>
            </div>
        <div class="post">
        <?php session_start();
            include('handler/db.php');
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
// Аутентификация пользователя *ЗАМОРОЖЕНО*
            // if (isset($_SESSION['name'])) {
            //     if ($_SESSION['name'] == 'Feen') {
            //         include('handler\blog.php');
            //     } 
            // } else {
            //     echo '
            //         <h1>Ну..?</h1>
            //         <form class="auth" action="" method="POST">
            //             <input type="text" name="name" class="auth__input" placeholder="имя">
            //             <input type="password" name="pass" class="auth__input" placeholder="пароль">
            //             <button class="auth__btn" type="submit">Отправить</button>
            //         </form>';
            // }
        ?>
        </div>
        </main>
    <footer></footer>
    </div>
    <script src="js/main.js"></script>
</body>
</html>
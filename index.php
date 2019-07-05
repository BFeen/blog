<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="styles/style.css">
    <title>Document</title>
</head>
<body>
    <div class="wrapper">
    <header></header>
        <main class="main_center">
        <?php session_start();
            
            if (isset($_SESSION['name'])) {
                if ($_SESSION['name'] == 'Feen') {
                    include('handler\blog.php');
                } 
            } else {
                echo '
                    <h1>Ну..?</h1>
                    <form class="form" action="" method="POST">
                        <input type="text" name="name" class="form__input" placeholder="имя">
                        <input type="password" name="pass" class="form__input" placeholder="пароль">
                        <button class="form__btn" type="submit">Отправить</button>
                    </form>';
            }
        ?>
        </main>
    <footer></footer>
    </div>
    <script src="js/main.js"></script>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="styles/style.css">
    <title>Document</title>
</head>
<body>
    <header></header>
    <div class="wrapper">
        <main>
            <h1>Добро пожаловать</h1>
            <form class="form" action="handler/auth.php" method="POST">
                <input type="text" name="name" class="form__input" placeholder="имя">
                <input type="password" name="pass" class="form__input" placeholder="пароль">
                <button class="form__btn" type="submit">Отправить</button>
            </form>
        </main>
    </div>
    <footer></footer>
    <script src="js/main.js"></script>
</body>
</html>
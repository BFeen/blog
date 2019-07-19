<?php 
    $title = 'MyPosts';
    include('modules/head.php')
?>
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
        <?php
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
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
            <div class='popup' style='display: none;'>
                <div class="popup__item">
                    <div class='popup__post'>
                        <h2 class='popup__title'></h2>
                        <p class='popup__text'></p>
                        <p class='popup__date'></p>
                    </div>
                    <div class="popup__comments"></div>
                    <div class='popup__close'>&#10006;</div>
                </div>
            </div>
        </main>
    <footer></footer>
    </div>
    <script src="jquery/jquery-3.4.1.min.js"></script>
    <script src="js/main.js"></script>
</body>
</html>
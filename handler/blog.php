<?php 
    include('db.php');
    echo 'Блог';
// Выгрузка постов из БД
    $sql = "SELECT * FROM `blog`";
    $result = mysqli_query($db, $sql);
    while($data = mysqli_fetch_assoc($result)) {
        echo "
            <div class='post'>
                <div class='post__item'>
                    <h3 class='post__title'>{$data['title']}</h3>
                    <p class='post__date'>{$data['date']}</p>
                    <p class='post__desc'>{$data['description']}</p>
                </div>
            </div>";
    }
?>
<script>
let header = document.querySelector('header');
let exitBtn = document.createElement('button');
exitBtn.classList.add('exit');
exitBtn.innerText = 'Выйти';
header.appendChild(exitBtn);
// exitBtn.style.opacity = '100';
exitBtn.style.top = '10px';
if (exitBtn != null) {
    exitBtn.addEventListener('click', function() {
        let xhr = new XMLHttpRequest;
        xhr.open('GET', 'handler/exit.php');
        xhr.send();
        xhr.addEventListener('load', function() {
            if(xhr.responseText) {
                location.reload();
            }
        })
    });
}
</script>
<!-- <button class="exit">Выйти</button> -->
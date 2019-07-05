var form = document.querySelector('form');

if (form != null) {
    form.addEventListener('submit', function(event){
        event.preventDefault(); // отменяет перезагрузку страницы при отправке формы
        let name = this.getElementsByTagName('input')[0].value;
        let pass = this.getElementsByTagName('input')[1].value;
        let xhr = new XMLHttpRequest();
// Проверка пользователя
        xhr.open('GET', `/blog/handler/handler.php?name=${name}&pass=${pass}`);
        xhr.send();
        xhr.addEventListener('load', function() {
            if (this.responseText) {
                form.remove();
                animationEnter();
// вместо следующей хуйни должно быть что-то другое. Именно она вводит в заблуждение. 
// Нам достаточно получить имя сессии (что происходит в файле blog.php, если пароль правильный), 
// остальное всё должно открываться автоматически. Возможно, AJAX тут даже лишний, можно сделать и на php онли. 
// А из за того, что это AJAX, у тебя нет повторной проверки $_SESSION['name'] в index.php, поэтому только при перезагрузке
// начинают отрисовываться все детали, что прописаны в blog.php и не входят в ответ xhr.responseText, бля. 

                openBlog();
            } else {
                alert('go fuck yourself, ' + name + '!');
            }
        });
    });
}
// Выход из Сессии
// Получение и отрисовка Блога
function openBlog() {
    let body = document.querySelector('main');

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'handler/blog.php');
    xhr.send();
    xhr.addEventListener('load', function() {
        body.innerHTML = xhr.responseText;
    });
}
// Добавление кнопки выхода
// function exitBtn() {
//     let exitBtn = document.createElement('button');
//     exitBtn.classList.add('exit');
//     exitBtn.innerText = 'Выйти';
//     header.appendChild(exitBtn);
// }

function animationEnter() {
    let header = document.querySelector('header'),
        footer = document.querySelector('footer');
    header.style.height = '50px';
    footer.style.height = '50px';
}
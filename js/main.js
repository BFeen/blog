var form = document.querySelector('.auth');
var write = document.querySelector('.write');
var writeForm = write.querySelector('.write__form');
var writeRoll = write.querySelector('.write__roll');
var postDelete = document.querySelectorAll('.post__delete');

writeRoll.addEventListener('click', function() {
    if (writeForm.style.display == '' || writeForm.style.display == 'none' ) {
        writeForm.style.display = 'flex';
        writeRoll.innerText = 'свернуть';
        console.log('хуле ты кликаешь');
    } else {
        writeForm.style.display = 'none';
        writeRoll.innerText = 'написать';
        console.log('раскликался нахуй');
    }
});

if (form != null) {
    form.addEventListener('submit', function(event){
        event.preventDefault(); // отменяет перезагрузку страницы при отправке формы
        let name = this.getElementsByTagName('input')[0].value;
        let pass = this.getElementsByTagName('input')[1].value;
        let xhr = new XMLHttpRequest();
// Проверка пользователя
        // xhr.open('GET', `/blog/handler/handler.php?name=${name}&pass=${pass}`); // GET change to POST
        xhr.open('POST', '/blog/handler/handler.php'); // POST
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        let str = 'name='+name+'&pass='+pass;
        xhr.send(str);
        xhr.addEventListener('load', function() {
            if (this.responseText) {
                form.remove();
                animationEnter();
                createExitBtn();
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

// Отправление нового поста в базу данных
if (writeForm != null) {
    writeForm.addEventListener('submit', function(event) {
        event.preventDefault();
        let title = document.querySelector('.write__title').value;
        let text = document.querySelector('.write__text').value;
        if (title === '' || text === '') {
            alert('заполни поля, бля');
        } else {
            let xhr = new XMLHttpRequest();
            xhr.open('POST', 'handler/post.php');
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            let str = 'title='+title+'&text='+text;
            xhr.send(str);
            xhr.addEventListener('load', function() {
                console.log(this.responseText);
            });
        }
    });
}
// Удаление поста из области видимости на сайте
postDelete.forEach(function(elem) {
    elem.addEventListener('click', function() {
        let data = this.parentNode.dataset.postId;
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'handler/delete.php?id=' + data);
        xhr.send();
        xhr.addEventListener('load', function() {
            console.log(xhr.responseText);
        });
    });
});

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
// Кнопка завершения сессии
function createExitBtn() {
    let header = document.querySelector('header');
    let exitBtn = document.createElement('button');
    exitBtn.classList.add('exit');
    exitBtn.innerText = 'Выйти';
    header.appendChild(exitBtn);
}
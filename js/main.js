var form = document.querySelector('.auth');
var write = document.querySelector('.write');
var writeForm = write.querySelector('.write__form');
var writeRoll = write.querySelector('.write__roll');
var post = document.querySelector('.post');
var postDelete = document.querySelectorAll('.post__delete');
var popup = document.querySelector('.popup');
var popupClose = document.querySelector('.popup__close');

openBlog();

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
// Отправление нового поста в базу данных
if (writeForm != null) {
    writeForm.addEventListener('submit', function(event) {
        event.preventDefault();
        let title = document.querySelector('.write__title');
        let text = document.querySelector('.write__text');
        if (title.value === '' || text.value === '') {
            alert('заполни поля, бля');
        } else {
            let xhr = new XMLHttpRequest();
            xhr.open('POST', 'handler/posting.php');
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            let str = 'title='+title.value+'&text='+text.value;
            xhr.send(str);
            xhr.addEventListener('load', function() {
                console.log(this.responseText);
// Удаление символов из инпутов после отправки поста в БД
                title.value = '';
                text.value = '';
// Автоматическое обновление блока постов повторным вызовом openBlog();
                openBlog();
            });
        }
    });
}
// Закрытие окна поста
popupClose.addEventListener('click', function() {
    popup.style.display = 'none';
});
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
// Получение и отрисовка Блога
function openBlog() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'handler/blog.php');
    xhr.send();
    xhr.addEventListener('load', function() {
        post.innerHTML = xhr.responseText;
// Обработка клика на каждый пост и вызов поп-ап меню
// Работает, но пиздец как тучно получилось...
        var postItem = document.querySelectorAll('.post__item');
        let popTitle = popup.querySelector('.popup__title'),
            popText = popup.querySelector('.popup__text'),
            popDate = popup.querySelector('.popup__date');
        postItem.forEach(function(elem) {
            elem.addEventListener('click', function() {
                popup.style.display = 'flex';
                let data = this.dataset.postId;
                let xhr = new XMLHttpRequest();
                xhr.open('GET', 'pages/post.php?post_id='+data);
                xhr.send();
                xhr.addEventListener('load', function() {
                    let response = JSON.parse(xhr.responseText);
                    popTitle.innerText = response['title'];
                    popText.innerText = response['post'];
                    popDate.innerText = response['date'];
                });
            });
        }); 
    });
}
// Надвигаются хедер и футер при успешной аутентификации
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
// // Аутентификация
// if (form != null) {
//     form.addEventListener('submit', function(event){
//         event.preventDefault(); // отменяет перезагрузку страницы при отправке формы
//         let name = this.getElementsByTagName('input')[0].value;
//         let pass = this.getElementsByTagName('input')[1].value;
//         let xhr = new XMLHttpRequest();
// // Проверка пользователя
//         // xhr.open('GET', `/blog/handler/handler.php?name=${name}&pass=${pass}`); // GET change to POST
//         xhr.open('POST', '/blog/handler/handler.php'); // POST
//         xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
//         let str = 'name='+name+'&pass='+pass;
//         xhr.send(str);
//         xhr.addEventListener('load', function() {
//             if (this.responseText) {
//                 form.remove();
//                 animationEnter();
//                 createExitBtn();
// // вместо следующей хуйни должно быть что-то другое. Именно она вводит в заблуждение. 
// // Нам достаточно получить имя сессии (что происходит в файле blog.php, если пароль правильный), 
// // остальное всё должно открываться автоматически. Возможно, AJAX тут даже лишний, можно сделать и на php онли. 
// // А из за того, что это AJAX, у тебя нет повторной проверки $_SESSION['name'] в index.php, поэтому только при перезагрузке
// // начинают отрисовываться все детали, что прописаны в blog.php и не входят в ответ xhr.responseText, бля. 
// // Нужно изучать Cookies
//                 openBlog();
//             } else {
//                 alert('go fuck yourself, ' + name + '!');
//             }
//         });
//     });
// }
// Добавление кнопки выхода
// function exitBtn() {
//     let exitBtn = document.createElement('button');
//     exitBtn.classList.add('exit');
//     exitBtn.innerText = 'Выйти';
//     header.appendChild(exitBtn);
// }
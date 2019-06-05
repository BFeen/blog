var form = document.querySelector('form');
console.log(form);

form.addEventListener('submit', function(event){
    event.preventDefault();
    let name = this.getElementsByTagName('input')[0].value;
    let pass = this.getElementsByTagName('input')[1].value;
    let xhr = new XMLHttpRequest();

    xhr.open('GET', `/blog/handler/handler.php?name=${name}&pass=${pass}`);
    xhr.send();

    xhr.addEventListener('load', function() {
        var answer = xhr.responseText;
        console.log(answer);
        if (answer) {
            form.remove();
        } else {
            alert('go fuck yourself, ' + name + '!');
        }
        
    });
});

function openBlog() {
    let body = document.querySelector('main');

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'handler/blog.php');
}
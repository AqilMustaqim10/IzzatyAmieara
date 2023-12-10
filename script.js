
const heart = document.querySelector('.heart');
const message = document.querySelector('.message');
const close = document.querySelector('.btn_close');

heart.addEventListener('click', toggleMessage);
close.addEventListener('click', toggleCloseMessage);

function toggleMessage(){
    message.classList.toggle('show');
}

function toggleCloseMessage(){
    message.classList.remove('show');
}

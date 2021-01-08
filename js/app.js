
document.addEventListener("keypress", (event) => {
    if (event.keyCode === 13) {
        add();
    }
});
add = () => {
    const todo = document.querySelector('input').value;
    if (todo.length > 0) {
        if (document.querySelector('.content').childNodes.length < 7)
            document.querySelector('.content').insertAdjacentHTML('afterbegin', `<div class="item">${todo}<span><i  onclick=check(this) class="fa fa-check"></i><i  onclick=trash(this) class="fa fa-trash"></i></span></div>`);
    }
    document.querySelector('input').value = "";
}

check = (action) => {
    const event = action.parentElement.parentElement;
    event.querySelector('.fa-check').remove();
    event.classList.remove('item');
    event.classList.add('lu');
}

trash = (action) => action.parentElement.parentElement.remove();
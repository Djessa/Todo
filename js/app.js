let content = document.querySelector('.content');
let i = 0;
document.querySelector('#add').addEventListener('click', () => {
    const todo = document.querySelector('input').value;
    if (todo.length > 0) {
        content.insertAdjacentHTML('afterbegin', `<div class="item">${todo}<span><i  onclick=check(this) class="fa fa-check"></i><i  onclick=trash(this) class="fa fa-trash"></i></span></div>`);
    }
    document.querySelector('input').value = "";
});
check = (action) => {
    const event = action.parentElement.parentElement;
    event.querySelector('.fa-check').remove();
    event.classList.remove('item');
    event.classList.add('lu');
}
trash = (action) => {
    const event = action.parentElement.parentElement;
    event.remove();
}
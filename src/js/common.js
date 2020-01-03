let checkButton = document.querySelectorAll('.task-list-item-header-nav .fa-stack');
let clearButton = document.querySelectorAll('.task-list-item-header-nav .fa-minus-square');

function greenSelect() {
    let textItem = this.parentElement.parentElement.nextElementSibling.firstElementChild;
        wrapItem = this.parentElement.parentElement.parentElement;
    textItem.style.color = '#32cd32';
    wrapItem.style.boxShadow = 'inset 20px 0 #32cd32';
}

function redSelect() {
    let textItem = this.parentElement.parentElement.nextElementSibling.firstElementChild;
        wrapItem = this.parentElement.parentElement.parentElement;
    textItem.style.color = '#ff0000';
    wrapItem.style.boxShadow = 'inset 20px 0 #ff0000';
}

function clearSelect() {
    let textItem = this.parentElement.parentElement.nextElementSibling.firstElementChild,
        wrapItem = this.parentElement.parentElement.parentElement;
    textItem.style.color = '#fff';
    wrapItem.style.boxShadow = 'inset 10px 0 #0000CD';
}

for (let i = 0; i < checkButton.length; i++) {
    checkButton[i].addEventListener('mouseover', greenSelect);
    checkButton[i].addEventListener('mouseout', clearSelect);
}

for (let i = 0; i < clearButton.length; i++) {
    clearButton[i].addEventListener('mouseover', redSelect);
    clearButton[i].addEventListener('mouseout', clearSelect);
}


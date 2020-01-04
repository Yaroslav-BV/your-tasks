// import { icon } from '@fortawesome/fontawesome-svg-core';
// import { faCheck, faMinus } from '@fortawesome/free-solid-svg-icons';

// const faCheckIcon = icon(faCheck,{ styles: {'color': '#c9c9c9'} });
// const faMinusIcon = icon(faMinus,{ styles: {'color': '#c9c9c9'} });

// document.body.append(faCheckIcon.node[0]);
// document.body.append(faMinusIcon.node[0]);

// let iconTest = document.createElement('i');
// iconTest.className = 'fas fa-user-circle fa-3x';
// document.body.append(iconTest);

// Константы
const MAIN_CLASS = 'task-list-item',
      TAG_ITEM_WRAP = 'div',
      TAG_ITEM_HEAD = {
          head: 'div',
          number: 'span',
          date: 'span',
          nav: 'span'
      },
      TAG_ITEM_CONTENT = 'div';

// Класс обёртки элемента задач
class ItemWrap {
    constructor(tag, className) {
        this.elem = document.createElement(tag);
        this.class = className;
    }
    addClass () {
        this.elem.classList.add(this.class);
    }
    compileElem(elem) {
        this.elem.append(elem);
    }
}

// Класс для вложеннего элемента number в head
class ItemHeadNumber extends ItemWrap {
    constructor(tag, className, count) {
        super(tag.number, `${className}-number`);
        this.inner = '#' + count;
    }
}

// Класс для вложеннего элемента date в head
class ItemHeadDate extends ItemWrap {
    constructor(tag, className) {
        super(tag.date, `${className}-date`);
        this.currDate = new Date();
    }
}

// Класс для вложеннего элемента nav в head
class ItemHeadNav extends ItemWrap {
    constructor(tag, className) {
        super(tag.nav, `${className}-nav`);
        this.checkIcon = new NavButton(TAG_ITEM_HEAD, 'check-border', 'fas fa-check');
        this.clearIcon = new NavButton(TAG_ITEM_HEAD, 'minus-border', 'fas fa-minus');;
    }
}

// Класс для создания элемента кнопки в nav
class NavButton extends ItemWrap {
    constructor(tag, className, classIcon) {
        super(tag.nav, className);
        this.icon = `<i class="${classIcon}"></i>`;
    }
    addIcon() {
        this.elem.innerHTML = this.icon;
    }
}

// Класс шапки задачи
class ItemHead extends ItemWrap {
    constructor(tag, className) {
        super(tag.head, `${className}-header`);
        this.child = {
            number: new ItemHeadNumber(TAG_ITEM_HEAD, `${this.class}`, 1),
            date: new ItemHeadDate(TAG_ITEM_HEAD, `${this.class}`),
            nav: new ItemHeadNav (TAG_ITEM_HEAD, `${this.class}`),
        }
    }
}

class ItemContent extends ItemWrap {
    constructor(tag, className, inputText) {
        super(tag, `${className}-content`);
        this.text = inputText;
        this.p = document.createElement('p');
    }
    
    addText() {
        this.p.innerHTML = this.text;
    }

}

function addItem() {
    const item = {
        wrap: new ItemWrap(TAG_ITEM_WRAP, MAIN_CLASS),
        head: new ItemHead(TAG_ITEM_HEAD, MAIN_CLASS),
        content: new ItemContent(TAG_ITEM_CONTENT, MAIN_CLASS, 'Я люблю Катюнечьку и Кронечку!')
    }

    // Добавляем классы
    item.wrap.addClass();
    item.head.addClass();
    item.head.child.number.addClass();
    item.head.child.date.addClass();
    item.head.child.nav.addClass();
    item.head.child.nav.checkIcon.addClass();
    item.head.child.nav.clearIcon.addClass();
    item.content.addClass();

    // Вставляем иконки
    item.head.child.nav.checkIcon.addIcon();
    item.head.child.nav.clearIcon.addIcon();

    // Добавляем текс
    item.content.addText();

    // Собираем
    item.head.child.nav.compileElem(item.head.child.nav.checkIcon.elem);
    item.head.child.nav.compileElem(item.head.child.nav.clearIcon.elem);
    item.head.child.date.compileElem(item.head.child.date.currDate);
    item.head.child.number.compileElem(item.head.child.number.inner);

    item.head.compileElem(item.head.child.number.elem);
    item.head.compileElem(item.head.child.date.elem);
    item.head.compileElem(item.head.child.nav.elem);

    item.content.compileElem(item.content.p);

    item.wrap.compileElem(item.head.elem);
    item.wrap.compileElem(item.content.elem);

    return item.wrap.elem;
}

const list = document.getElementById('task-list');
const addBut = document.getElementById('form-task-add');

addBut.addEventListener('click', function() {
    const item = addItem();
    list.append(item);
});
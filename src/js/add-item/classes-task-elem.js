import Const from './const-task-elem';

// Общий класс
export class TaskElem {
    constructor(tag, className) {
        this.elem = document.createElement(tag);
        this.elem.className = className;
    }
    makeElem() {
        return this.elem;
    }
}

// Класс номера задачи по порядку
export class NumberTask extends TaskElem {
    constructor(tag, className, numTask) {
        super(tag, className);
        this.elem.innerHTML = `#${numTask}`;
    }
}

// Класс даты
export class DateTask extends TaskElem {
    constructor(tag, className) {
        super(tag, className);

        const now = new Date();
        let date = now.toDateString().split(' ').slice(1);
        let time = now.toTimeString().slice(0,5);
        this.elem.innerHTML = `${date[1]} ${date[0]} ${date[2]} - ${time}`;
    }
}

// Класс блока кнопок
export class NavTask extends TaskElem {
    constructor(tag, className, classIconCheck, classIconClear) {
        super(tag, className);
        this.elem.innerHTML = `
            <span class="check-border unchecked"><i class="${classIconCheck}"></i></span>
            <span class="minus-border unchecked"><i class="${classIconClear}"></i></span>
        `;
        // Привязываем обработчик для кнопки задача выполнена
        this.elem.firstElementChild.addEventListener('click', function() {
            if (this.className.indexOf('un') > -1) {
                this.classList.remove('unchecked');
                this.classList.add('checked');
                this.closest('.task-list-item').style.boxShadow = 'inset 20px 0 #32cd32';                
            } else {
                this.classList.remove('checked');
                this.classList.add('unchecked');
                this.closest('.task-list-item').removeAttribute('style');
            }
        });
        // Привязываем обработчик для кнопки удалить задачу
        this.elem.lastElementChild.addEventListener('click', function() {
            const parentItem = this.closest('.task-list-item');
            let delNum = +this.closest('.task-list-item-header').querySelector('.task-list-item-header-number').innerHTML.slice(1);

            this.style.backgroundColor = Const.color.bad;
            this.style.border = "2px solid #ff0000";
            this.style.borderRadius = '50%';
            this.firstElementChild.style.color = Const.color.main;
            parentItem.style.boxShadow = 'inset 20px 0 #ff0000';
            
            if (parentItem.nextElementSibling) {
                let nextNumber = parentItem.nextElementSibling.querySelector('.task-list-item-header-number');
                nextNumber.innerHTML = '#'+delNum;

                let nextElem = parentItem.nextElementSibling;
    
                while (nextElem.nextElementSibling) {
                    let nextNumber = nextElem.nextElementSibling.querySelector('.task-list-item-header-number');
                    nextNumber.innerHTML = '#' + (++delNum);
                    nextElem = nextElem.nextElementSibling
                }
            }

            this.addEventListener('transitionend', function () {
                parentItem.remove();
            });
        });
    }
}

// Класс текста
export class TextTask extends TaskElem {
    constructor(tag, className, textTask) {
        super(tag, className);
        this.elem.innerHTML = textTask;
    }
}
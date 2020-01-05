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
            <span class="check-border"><i class="${classIconCheck}"></i></span>
            <span class="minus-border"><i class="${classIconClear}"></i></span>
        `
    }
}

// Класс текста
export class TextTask extends TaskElem {
    constructor(tag, className, textTask) {
        super(tag, className);
        this.elem.innerHTML = textTask;
    }
}
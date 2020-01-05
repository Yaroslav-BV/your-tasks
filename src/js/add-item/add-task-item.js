import Consts from './const-task-elem';
import { TaskElem, NumberTask, DateTask, NavTask, TextTask } from './classes-task-elem';

const list = document.getElementById('task-list'); // Блок для вставки задач

// Функция вставки задачи
function addTask() {
    const wrap = new TaskElem(Consts.wrap.tag, Consts.wrap.class).makeElem();
      
    const head = new TaskElem(Consts.head.tag, Consts.head.class).makeElem(),
          number = new NumberTask(Consts.number.tag, Consts.number.class, 1).makeElem(),
          date = new DateTask(Consts.date.tag, Consts.date.class).makeElem(),
          nav = new NavTask(Consts.nav.tag, Consts.nav.class, 'fas fa-check', 'fas fa-minus').makeElem();
    
    const content = new TaskElem(Consts.content.tag, Consts.content.class).makeElem(),
          textTask = new TextTask(Consts.textTask.tag, Consts.textTask.class, 'Тестовый текст Тестовый текст Тестовый текст Тестовый текст Тестовый текст Тестовый текст Тестовый текст Тестовый текст Тестовый текст Тестовый текст ').makeElem();

    head.append(number);
    head.append(date);
    head.append(nav);

    content.append(textTask);

    wrap.append(head);
    wrap.append(content);

    list.append(wrap);
}

const addButton = document.getElementById('form-task-add');
addButton.addEventListener('click', addTask);




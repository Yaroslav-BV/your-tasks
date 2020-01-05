import Consts from './const-task-elem';
import { TaskElem, NumberTask, DateTask, NavTask, TextTask } from './classes-task-elem';

// Полифил метода append() для IE
(function (arr) {
      arr.forEach(function (item) {
        if (item.hasOwnProperty('append')) {
          return;
        }
        Object.defineProperty(item, 'append', {
          configurable: true,
          enumerable: true,
          writable: true,
          value: function append() {
            var argArr = Array.prototype.slice.call(arguments),
              docFrag = document.createDocumentFragment();
            
            argArr.forEach(function (argItem) {
              var isNode = argItem instanceof Node;
              docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
            });
            
            this.appendChild(docFrag);
          }
        });
      });
    })([Element.prototype, Document.prototype, DocumentFragment.prototype]);


// Объёвляем основные элементы
const list = document.getElementById('task-list'); // Блок для вставки задач
const inputTask = document.getElementById('form-task-input');
const addButton = document.getElementById('form-task-add');
const clearAllButton = document.getElementById('form-task-clearAll');

// Переменные для элмента задачи
let textInput = '';
let nummTask = 1;

// Функция вставки задачи
function addTask() {
      
      if (!textInput) {
            inputTask.value = 'Do not leave the field blank, pls...';
            inputTask.style.color = "#ff0000";
            inputTask.setAttribute('disabled', 'disabled');
            setTimeout(() => {
                  inputTask.value = '';
                  inputTask.removeAttribute('style');
                  inputTask.removeAttribute('disabled');
            }, 2000);
            return;
      }

    const wrap = new TaskElem(Consts.wrap.tag, Consts.wrap.class).makeElem();
      
    const head = new TaskElem(Consts.head.tag, Consts.head.class).makeElem(),
          number = new NumberTask(Consts.number.tag, Consts.number.class, nummTask).makeElem(),
          date = new DateTask(Consts.date.tag, Consts.date.class).makeElem(),
          nav = new NavTask(Consts.nav.tag, Consts.nav.class, 'fas fa-check', 'fas fa-minus').makeElem();
    
    const content = new TaskElem(Consts.content.tag, Consts.content.class).makeElem(),
          textTask = new TextTask(Consts.textTask.tag, Consts.textTask.class, textInput).makeElem();

    head.append(number);
    head.append(date);
    head.append(nav);

    content.append(textTask);

    wrap.append(head);
    wrap.append(content);

    list.append(wrap);

    inputTask.value = '';
    nummTask++;
    textInput = '';

}

// Сохраняем значение из инпута
inputTask.oninput = () => {
      textInput = inputTask.value;
}
// Присваиваем обработчик для добавления задачи
addButton.addEventListener('click', addTask);

// Очищаем все задачи
clearAllButton.onclick = () => {
      list.innerHTML = '';
      nummTask = 1;
}



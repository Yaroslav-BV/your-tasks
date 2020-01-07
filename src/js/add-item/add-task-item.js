import Consts from './const-task-elem';
import { TaskElem, NumberTask, DateTask, NavTask, TextTask } from './classes-task-elem';

// Объевляем основные элементы
const list = document.getElementById('task-list'); // Блок для вставки задач
const inputTask = document.getElementById('form-task-input'); // Поле для ввода
const addButton = document.getElementById('form-task-add'); // Кнопка добавить
const clearAllButton = document.getElementById('form-task-clearAll'); // Кнопка очистить всё

// Переменные для элемента задачи
let textInput = '';
let nummTask = 1;

// Функция вставки задачи
function addTask() {

  (list.hasChildNodes()) ? nummTask++ : nummTask = 1;

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
}



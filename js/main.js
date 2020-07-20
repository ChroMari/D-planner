//---------------------------------------------Вывод даты и времени на экран---------------------------------------------------------

var h_m_s = document.querySelector(".location__time");
var d_m = document.querySelector(".location__date");

var month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
var day = ['Пон', 'Вто', 'Сре', 'Чет', 'Пят', 'Суб', 'Вос'];

var todoItems = document.querySelector('.todo-item');
var mastItem = document.querySelector('.time-task');
var btnItems = [];

function clock () {
  const date = new Date();
  h_m_s.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

  //вывод дня недели даты и месяца
  d_m.innerHTML = day[date.getDay()] + " " + date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear();

}

setInterval(clock, 1000); //вызываем функцию, каждую секунду


//----------------------------------------Формирование To-do листа--------------------------------------------------------------------
/*
const addItems = document.querySelector('.todo-check');
const itemsList = document.querySelector('.todo-task');
const items = [];

//функция, которая добавляет новые данные в объект, который потом сохраняется на сервере
function addItem(e){
  e.preventDefault(); //Метод preventDefault () интерфейса Event сообщает User agent, что если событие не обрабатывается явно, его действие по умолчанию не должно выполняться так, как обычно.
  const text = (this.querySelector('[name=item]')).value; // помещаем данные из вводного поля и преобразуем в строку
  //объект который содержит сведения и состояние флажка
  const item = {
    text,
    done: false
  };

  items.push(item); 
  populateList(items, itemsList); // вызываем функцию, которая будет собирать строку в парсер, который потом будет выводится
  this.reset(); // очищаем поле ввода
}

// функция, которая будет создавать данные, которые будут добавляться на html страницу
//plates = [] если данных не было, будет использован пустой массив
function populateList(plates = [], platesList){
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li class="todo-item">
        <p class="task-btn"> Start </p>
        <label for="item${i}">${plate.text}</label>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
        <p class="task-time">00-00</p>
      </li>
    `
  }).join('');
  //взависмисоти от done выставляем или нет флажок, также связка делается на i

}

addItems.addEventListener('submit', addItem);

*/

const addItem = document.querySelector('.todo-check'); // Форма, которая добавляет задачу в список.
const taskUl = document.querySelector('.todo-task'); // Список ul, в который будут добавляться новые задачи.

addItem.addEventListener('submit', function (e) {

  e.preventDefault(); // Отмена стандартного поведения. Нужно чтобы после отправки формы страница не перезагружалась.

  const text = document.querySelector('.text').value; // Берём значение (текст), который записан в текстовом поле формы.

  const taskHTML = `
    <li class="todo-item">
        <p class="task-btn"> Start </p>
        <label>${text}</label>
        <input type="checkbox"/>
        <p class="task-time">00-00</p>
      </li>
  `; // Переменная, которая содержит базовую разметку для добавления задачи.

  taskUl.insertAdjacentHTML('beforebegin', taskHTML); // insertAdjacentHTML(куда доабвлять, что добавлять) 

}); // Отслеживаем событие отправки формы. addEventListener(событие которое остслеживаем, вызыв функции на это событие);
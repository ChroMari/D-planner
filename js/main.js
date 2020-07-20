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

const addItem = document.querySelector('.todo-check'); // Форма, которая добавляет задачу в список.
const taskUl = document.querySelector('.todo-task'); // Список ul, в который будут добавляться новые задачи.

addItem.addEventListener('submit', function (e) {

  e.preventDefault(); // Отмена стандартного поведения. Нужно чтобы после отправки формы страница не перезагружалась.

  const textInput = document.querySelector('.text'); // Находим текстовое поле, которое используется в форме.

  const text = textInput.value; // Берём значение (текст), который записан в текстовом поле формы.

  const taskHTML = `
    <li class="todo-item">
        <p class="task-btn"> Start </p>
        <p class="todo-text">${text}</p>
        <input type="checkbox"/>
        <p class="task-time">00-00</p>
      </li>
  `; // Переменная, которая содержит базовую разметку для добавления задачи.

  taskUl.insertAdjacentHTML('afterbegin', taskHTML); // insertAdjacentHTML(куда доабвлять, что добавлять) //'afterbegin': сразу после открывающего тега  element (перед первым потомком).

  textInput.value = ''; // Очищаем текстовое поле, после добавления задачи.

}); // Отслеживаем событие отправки формы. addEventListener(событие которое остслеживаем, вызыв функции на это событие);

//---------------------------------------Делаем выборку задачи из всего списка, чтобы поставить её на таймер ------------------------
let newTask = document.querySelector('.time-task');

taskUl.addEventListener('click', function (e) {
  console.log(e.target); // e.target - показывает на каком элементе произошло нажатие

  if (e.target.className == 'task-btn') { // Проверяем, что нажали на кнопку Start
    console.log(e.target.parentElement); // обращаемся к родителю
    let taskLi = e.target.parentElement;

    newTask.innerHTML = taskLi.querySelector('.todo-text').textContent; // Показываем задачу, которая выполняется в данный момент.
    
  }
});


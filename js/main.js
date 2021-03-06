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

  <label class="login-checkbox">
    <input type="checkbox" class="visually-hidden"/>
    <span class="checkbox-indicator"></span>
  </label>

  <p class="task-time">00 : 00</p>
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

    const taskLi = e.target.parentElement;

    newTask.innerHTML = taskLi.querySelector('.todo-text').textContent; // Показываем задачу, которая выполняется в данный момент.
    
  }
});

//----------------------------------Проверка на то, какую задачу отметили выполненной----------------------------------------------
taskUl.addEventListener('click', function (e) { 
  if (e.target.checked) { // смотрим на то, где нажали галочку
    const taskLi = e.target.parentElement.parentElement;
    
    taskLi.querySelector('.task-btn').style.opacity = "0";
    taskLi.querySelector('.task-btn').style.cursor = "default";

    taskLi.style.background = "linear-gradient(-90deg, rgba(78,87,107,0) 0%, rgba(169,126,206,1) 100%)";
  }
});

//-------------------------------------------------Таймер----------------------------
let countdown;
const timerDisplay = document.querySelector('.tik-tak');
const buttons = document.querySelectorAll('[data-time]');



function timer(seconds, flag) {
  // clear any existing timers
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check if we should stop it!
    if(secondsLeft < 0) {
      clearInterval(countdown);

      if (flag == 10) { //счётчик, который выводит количество помидор
        let sumPom = document.querySelector('.pomodor');
        sumPom.textContent = 1 + +sumPom.textContent;

        const timPom = document.querySelector('.tik-time');
        let Itogtime = Math.floor((+sumPom.textContent * 25) / 60);
        timPom.textContent = `${Math.floor((+sumPom.textContent * 25) / 60)} : ${(+sumPom.textContent * 25) % 60 < 10 ? '0' : '' }${(+sumPom.textContent * 25) % 60}`;

        //-------------------Ищем задачу и добавляем время-----------------
        const task = document.querySelector('.time-task');
        const spisok = taskUl.querySelectorAll('.todo-item');
        
        for (let i = 0; i < spisok.length; i++) {
          console.log(spisok[i]);
          if (spisok[i].querySelector('.todo-text').textContent == task.textContent) {
            const newTim = document.querySelector('.task-time');
            const newTim2 = newTim.textContent.split(' : ');
            const timeIt = +newTim2[0] * 60 + +newTim2[1] + 25;
            newTim.textContent = `${Math.floor(timeIt / 60)} : ${timeIt % 60 < 10 ? '0' : '' }${timeIt % 60}`;

          }
        }
      }
      return;
    }
    // display it
    displayTimeLeft(secondsLeft);
  }, 1000);

}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds, seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));

//----------------------------------------------
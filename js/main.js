var h_m_s = document.querySelector(".location__time");
var d_m = document.querySelector(".location__date");

var month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
var day = ['Пон', 'Вто', 'Сре', 'Чет', 'Пят', 'Суб', 'Вос'];

function clock () {
  const date = new Date();
  h_m_s.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

  //вывод дня недели даты и месяца
  d_m.innerHTML = day[date.getDay()] + " " + date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear();
}

setInterval(clock, 1000); //вызываем функцию, каждую секунду


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
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
        <label for="item${i}">${plate.text}</label>
      </li>
    `
  }).join('');
  //взависмисоти от done выставляем или нет флажок, также связка делается на i
}


addItems.addEventListener('submit', addItem);

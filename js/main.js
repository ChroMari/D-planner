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

var yourName = prompt("Adınız nedir?").toString();
var text = `Merhaba ${yourName}`;

var title = document.querySelector("#welcome");
title.innerHTML = text;

function getDateAndClock() {
  var date = new Date();
  var dayNumber = (
    date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
  ).toString();
  var day = date.getDay();
  switch (day) {
    case 1:
      day = "Pazartesi";
      break;
    case 2:
      day = "Salı";
      break;
    case 3:
      day = "Çarşamba";
      break;
    case 4:
      day = "Perşembe";
      break;
    case 5:
      day = "Cuma";
      break;
    case 6:
      day = "Cumartesi";
      break;
    case 7:
      day = "Pazar";
      break;
  }
  var year = date.getFullYear().toString();
  var hour = (
    date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
  ).toString();
  var minute = (
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
  ).toString();
  var second = (
    date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()
  ).toString();
  var month = (
    date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()
  ).toString();

  var text = `${dayNumber}.${month}.${year} ${day} ${hour}:${minute}:${second}`;
  document.querySelector("#date").innerHTML = text;
}
getDateAndClock();
setInterval(() => {
  getDateAndClock();
}, 1000);

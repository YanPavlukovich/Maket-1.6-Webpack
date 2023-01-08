const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

// Выносим в переменные иконки.
const statusIconOut = document.querySelector(".title__status--out");
const repairIconOut = document.querySelector(".title__repair--out");
const searchIconIn = document.querySelector(".title__search--in");
const deviderMobile = document.querySelector(".title__divider");
const deviderMobile2 = document.querySelector(".title__divider--2");
const callIconOut = document.querySelector(".title__call--out");
const chatIconOut = document.querySelector(".title__chat--out");
const profileIconOut = document.querySelector(".title__profile--out");

// Выносим в переменную шапку меню для сжатия при клике.
const menuWidthTablet = document.querySelector(".title");
// Выносим в переменную весь контент сайта, чтобы его заблюрить при открытии.
const siteContent = document.querySelector(".services__site-content");

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector("#menu").cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler.
hamb.addEventListener("click", hambHandler);

// При клике на зону вне меню вызываем ф-ию hambHandler.
siteContent.addEventListener("click", contentHandler);

// Выполняем действия при клике на гамбургер в обе стороны.
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  statusIconOut.classList.toggle("burger-pressed");
  repairIconOut.classList.toggle("burger-pressed");
  searchIconIn.classList.toggle("burger-not-pressed");
  deviderMobile.classList.toggle("burger-pressed");
  deviderMobile2.classList.toggle("burger-pressed");
  callIconOut.classList.toggle("burger-pressed");
  chatIconOut.classList.toggle("burger-pressed");
  profileIconOut.classList.toggle("burger-pressed");
  menuWidthTablet.classList.toggle("tablet-width");
  siteContent.classList.toggle("blur-effect");
  renderPopup();
}

// Выполняем действия при клике на область вне меню только на удаление.
function contentHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
  statusIconOut.classList.remove("burger-pressed");
  repairIconOut.classList.remove("burger-pressed");
  searchIconIn.classList.remove("burger-not-pressed");
  deviderMobile.classList.remove("burger-pressed");
  deviderMobile2.classList.remove("burger-pressed");
  callIconOut.classList.remove("burger-pressed");
  chatIconOut.classList.remove("burger-pressed");
  profileIconOut.classList.remove("burger-pressed");
  menuWidthTablet.classList.remove("tablet-width");
  siteContent.classList.remove("blur-effect");
  renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// // Для каждого элемента меню при клике вызываем ф-ию
// links.forEach((link) => {
//   link.addEventListener("click", closeOnClick);
// });

// //Закрытие попапа при клике на меню
// function closeOnClick() {
//   popup.classList.remove("open");
//   hamb.classList.remove("active");
//   body.classList.remove("noscroll");
// }

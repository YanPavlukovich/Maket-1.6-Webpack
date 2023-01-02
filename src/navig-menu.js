const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

const statusIconOut = document.querySelector(".mob-menu__status--out");
const repairIconOut = document.querySelector(".mob-menu__repair--out");
const searchIconIn = document.querySelector(".title__search--in");
const deviderMobile = document.querySelector(".mob-menu__divider");

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector("#menu").cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  statusIconOut.classList.toggle("burger-pressed");
  repairIconOut.classList.toggle("burger-pressed");
  searchIconIn.classList.toggle("burger-not-pressed");
  deviderMobile.classList.toggle("burger-pressed");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
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

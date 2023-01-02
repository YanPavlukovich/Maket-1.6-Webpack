// Button Read more.
let buttonRead = document.querySelector(".read-more");
let servicesList = document.querySelector(".item-content__text");
let buttonText = document.querySelector(".read-more__text");
let buttonIcon = document.querySelector(".read-more__icon");

function handleClickServices() {
  if (window.innerWidth < 768) {
    servicesList.classList.toggle("text-open--mobile");
  }
  if (window.innerWidth < 1366) {
    servicesList.classList.toggle("text-open--tablet");
  }
  buttonIcon.classList.toggle("animation--up");
  if (
    !servicesList.classList.contains("text-open--mobile") &&
    !servicesList.classList.contains("text-open--tablet")
  ) {
    buttonText.textContent = "Читать далее";
  } else {
    buttonText.textContent = "Скрыть";
  }
}

buttonRead.addEventListener("click", handleClickServices);

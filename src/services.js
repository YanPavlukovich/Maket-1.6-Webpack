// Button Read more.
let buttonRead = document.querySelector(".read-more");
let servicesText = document.querySelector(".item-content__text");
let buttonText = document.querySelector(".read-more__text");
let buttonIcon = document.querySelector(".read-more__icon");

function handleClickServices() {
  if (document.documentElement.clientWidth < 768) {
    servicesText.classList.toggle("text-open--mobile");
  }
  if (
    document.documentElement.clientWidth >= 768 &&
    document.documentElement.clientWidth < 1366
  ) {
    servicesText.classList.toggle("text-open--tablet");
  }
  buttonIcon.classList.toggle("animation--up");
  if (
    !servicesText.classList.contains("text-open--mobile") &&
    !servicesText.classList.contains("text-open--tablet")
  ) {
    buttonText.textContent = "Читать далее";
  } else {
    buttonText.textContent = "Скрыть";
  }
}

buttonRead.addEventListener("click", handleClickServices);

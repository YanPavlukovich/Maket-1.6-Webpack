// Slider Swiper
const slider = document.querySelector(".brands-swiper");

let mobileSlider = () => {
  if (window.innerWidth < 768 && slider.dataset.mobile == "false") {
    mySwiper = new Swiper(slider, {
      slidesPerView: "auto",
      spaceBetween: 16,
      loop: false,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        // dynamicBullets: true,
      },
    });
    slider.dataset.mobile = "true";
  }
  if (window.innerWidth > 768) {
    slider.dataset.mobile = "false";
    if (slider.classList.contains("brands-swiper-initialized")) {
      mySwiper.destroy();
    }
  }
};

mobileSlider();

window.addEventListener("resize", () => {
  mobileSlider();
});

// Button Show more.
let buttonShow = document.querySelector(".b-show-more");
let brandsList = document.querySelector(".brands-list");
let buttonText = document.querySelector(".b-show-more__text");
let buttonIcon = document.querySelector(".b-show-more__icon");

function handleClickBrands() {
  if (window.innerWidth < 1120) {
    brandsList.classList.toggle("b-list-open--tablet");
  }
  if (window.innerWidth >= 1120) {
    brandsList.classList.toggle("b-list-open--desktop");
  }
  buttonIcon.classList.toggle("b-animation--up");
  if (
    !brandsList.classList.contains("b-list-open--desktop") &&
    !brandsList.classList.contains("b-list-open--tablet")
  ) {
    buttonText.textContent = "Показать все";
  } else {
    buttonText.textContent = "Скрыть";
  }
}

buttonShow.addEventListener("click", handleClickBrands);

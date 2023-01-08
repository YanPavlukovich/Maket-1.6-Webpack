//Slider Swiper Technics.
const sliderTechnics = document.querySelector(".technics-swiper");

let mobileSliderTechnics = () => {
  if (
    document.documentElement.clientWidth < 768 &&
    sliderTechnics.dataset.mobile == "false"
  ) {
    mySwiper2 = new Swiper(sliderTechnics, {
      slidesPerView: "auto",
      spaceBetween: 16,
      loop: false,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
    });
    sliderTechnics.dataset.mobile = "true";
  }
  if (document.documentElement.clientWidth > 768) {
    sliderTechnics.dataset.mobile = "false";
    if (sliderTechnics.classList.contains("technics-swiper-initialized")) {
      mySwiper2.destroy();
    }
  }
};

mobileSliderTechnics();

window.addEventListener("resize", () => {
  mobileSliderTechnics();
});

// Button Show more.
let buttonShowTechnics = document.querySelector(".t-show-more");
let technicsList = document.querySelector(".technics-list");
let buttonTextTechnics = document.querySelector(".t-show-more__text");
let buttonIconTechnics = document.querySelector(".t-show-more__icon");

function handleClickTechnics() {
  if (document.documentElement.clientWidth < 1120) {
    technicsList.classList.toggle("t-list-open--tablet");
  }
  if (document.documentElement.clientWidth >= 1120) {
    technicsList.classList.toggle("t-list-open--desktop");
  }
  buttonIconTechnics.classList.toggle("t-animation--up");
  if (
    !technicsList.classList.contains("t-list-open--desktop") &&
    !technicsList.classList.contains("t-list-open--tablet")
  ) {
    buttonTextTechnics.textContent = "Показать все";
  } else {
    buttonTextTechnics.textContent = "Скрыть";
  }
}

buttonShowTechnics.addEventListener("click", handleClickTechnics);

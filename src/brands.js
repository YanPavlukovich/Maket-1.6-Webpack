// Slider Swiper Brands.
const sliderBrands = document.querySelector(".brands-swiper");

let mobileSliderBrands = () => {
  if (
    document.documentElement.clientWidth < 768 &&
    sliderBrands.dataset.mobile == "false"
  ) {
    mySwiper = new Swiper(sliderBrands, {
      slidesPerView: "auto",
      spaceBetween: 16,
      loop: false,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
    });
    sliderBrands.dataset.mobile = "true";
  }
  if (document.documentElement.clientWidth > 768) {
    sliderBrands.dataset.mobile = "false";
    if (sliderBrands.classList.contains("brands-swiper-initialized")) {
      mySwiper.destroy();
    }
  }
};

mobileSliderBrands();

window.addEventListener("resize", () => {
  mobileSliderBrands();
});

// Button Show more.
let buttonShow = document.querySelector(".b-show-more");
let brandsList = document.querySelector(".brands-list");
let buttonText = document.querySelector(".b-show-more__text");
let buttonIcon = document.querySelector(".b-show-more__icon");

function handleClickBrands() {
  if (document.documentElement.clientWidth < 1120) {
    brandsList.classList.toggle("b-list-open--tablet");
  }
  if (document.documentElement.clientWidth >= 1120) {
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

//Slider Swiper Prices.
const sliderPrices = document.querySelector(".prices-swiper");

let mobileSliderPrices = () => {
  if (
    document.documentElement.clientWidth < 768 &&
    sliderPrices.dataset.mobile == "false"
  ) {
    mySwiper3 = new Swiper(sliderPrices, {
      slidesPerView: "auto",
      spaceBetween: 16,
      loop: false,
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
    });
    sliderPrices.dataset.mobile = "true";
  }
  if (document.documentElement.clientWidth > 768) {
    sliderPrices.dataset.mobile = "false";
    if (sliderPrices.classList.contains("prices-swiper-initialized")) {
      mySwiper3.destroy();
    }
  }
};

mobileSliderPrices();

window.addEventListener("resize", () => {
  mobileSliderPrices();
});

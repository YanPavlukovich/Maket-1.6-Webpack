// Slider Swiper
// const sliderTechnics = document.querySelector(".swiper-technics");

// function mobileSliderTechnics() {
//   if (window.innerWidth < 768 && sliderTechnics.dataset.mobile == "false") {
//     mySwiper2 = new Swiper(sliderTechnics, {
//       slidesPerView: "auto",
//       spaceBetween: 16,
//       loop: false,
//       pagination: {
//         el: ".swiper-pagination pag-2",
//         clickable: true,
//       },
//     });
//     sliderTechnics.dataset.mobile = "true";
//   }
//   if (window.innerWidth > 768) {
//     sliderTechnics.dataset.mobile = "false";
//     if (sliderTechnics.classList.contains("swiper-technics-initialized")) {
//       mySwiper2.destroy();
//     }
//   }
// }

// mobileSliderTechnics();

// window.addEventListener("resize", () => {
//   mobileSliderTechnics();
// });

// // Button Show more.
// let buttonShow = document.querySelector(".b-show-more");
// let brandsList = document.querySelector(".brands-list");
// let buttonText = document.querySelector(".b-show-more__text");
// let buttonIcon = document.querySelector(".b-show-more__icon");

// function handleClickBrands() {
//   if (window.innerWidth < 1120) {
//     brandsList.classList.toggle("b-list-open--tablet");
//   }
//   if (window.innerWidth >= 1120) {
//     brandsList.classList.toggle("b-list-open--desktop");
//   }
//   buttonIcon.classList.toggle("b-animation--up");
//   if (
//     !brandsList.classList.contains("b-list-open--desktop") &&
//     !brandsList.classList.contains("b-list-open--tablet")
//   ) {
//     buttonText.textContent = "Показать все";
//   } else {
//     buttonText.textContent = "Скрыть";
//   }
// }

// buttonShow.addEventListener("click", handleClickBrands);

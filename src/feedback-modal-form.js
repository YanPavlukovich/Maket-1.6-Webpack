document.addEventListener("DOMContentLoaded", () => {
  const feedBackButton = document.querySelector("#callback-button");
  const feedBackButton2 = document.querySelector("#callback-button2");
  const closeButtonFeed = document.querySelector("#modal__close-button");
  const closeButtonFeed2 = document.querySelector("#modal__close-button2");
  const modal1 = document.querySelector("#modal1");
  const bodyFeedback = document.body;

  const siteContentFeedback = document.querySelector(".services");

  feedBackButton.onclick = function () {
    modal1.classList.add("modal__active");
  };

  closeButtonFeed.onclick = function () {
    modal1.classList.remove("modal__active");
  };

  feedBackButton2.onclick = function () {
    modal1.classList.add("modal__active");
    siteContentFeedback.classList.add("blur-effect--feedback");
    bodyFeedback.classList.add("noscroll--feedback");
  };

  closeButtonFeed2.onclick = function () {
    modal1.classList.remove("modal__active");
    siteContentFeedback.classList.remove("blur-effect--feedback");
    bodyFeedback.classList.remove("noscroll--feedback");
  };
});

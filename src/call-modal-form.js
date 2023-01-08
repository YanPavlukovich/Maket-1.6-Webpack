document.addEventListener("DOMContentLoaded", () => {
  const callBackButton = document.querySelector("#c-callback-button");
  const callBackButton2 = document.querySelector("#c-callback-button2");
  const closeButtonCall = document.querySelector("#c-modal__close-button");
  const closeButtonCall2 = document.querySelector("#c-modal__close-button2");
  const modal2 = document.querySelector("#modal2");
  const bodyCall = document.body;

  const siteContentCall = document.querySelector(".services");

  callBackButton.onclick = function () {
    modal2.classList.add("c-modal__active");
  };

  closeButtonCall.onclick = function () {
    modal2.classList.remove("c-modal__active");
  };

  callBackButton2.onclick = function () {
    modal2.classList.add("c-modal__active");
    siteContentCall.classList.add("blur-effect--call");
    bodyCall.classList.add("noscroll--call");
  };

  closeButtonCall2.onclick = function () {
    modal2.classList.remove("c-modal__active");
    siteContentCall.classList.remove("blur-effect--call");
    bodyCall.classList.remove("noscroll--call");
  };
});

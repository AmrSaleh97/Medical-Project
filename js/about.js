let header2 = document.getElementById("header");
let buttonUp2 = document.getElementById("buttonUp");
window.onscroll = function () {
  if (window.scrollY > 200) {
    header2.classList.add("headerfixed");
    buttonUp2.classList.add("btn-main3fixed");
  } else {
    header2.classList.remove("headerfixed");
    buttonUp2.classList.remove("btn-main3fixed");
  }
};
buttonUp2.addEventListener("click", function () {
  window.scroll({
    top: 0,
  });
});

const swiper = new Swiper(".swiper", {
  // Navigation arrows
  slidesPerView: 3,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
let header = document.getElementById("header");
let buttonUp = document.getElementById("buttonUp");
window.onscroll = function () {
  if (window.scrollY > 200) {
    header.classList.add("headerfixed");
    buttonUp.classList.add("btn-main3fixed");
  } else {
    header.classList.remove("headerfixed");
    buttonUp.classList.remove("btn-main3fixed");
  }
};
buttonUp.addEventListener("click", function () {
  window.scroll({
    top: 0,
  });
});

let header1 = document.getElementById("header");
let buttonUp1 = document.getElementById("buttonUp");
window.onscroll = function () {
  if (window.scrollY > 200) {
    header1.classList.add("headerfixed");
    buttonUp.classList.add("btn-main3fixed");
  } else {
    header1.classList.remove("headerfixed");
    buttonUp1.classList.remove("btn-main3fixed");
  }
};
buttonUp1.addEventListener("click", function () {
  window.scroll({
    top: 0,
  });
});

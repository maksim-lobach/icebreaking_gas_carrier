var list = document.getElementById("listUlMenu");
var buttonClick = document.getElementById("burgerButton");

let widchScreen = 750;

buttonClick.addEventListener("click", () => {
  list.classList.toggle("activeMenu");
  buttonClick.classList.toggle("activeButton");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > widchScreen) {
    buttonClick.classList.remove("activeButton");
    list.classList.remove("activeMenu");
  }
});



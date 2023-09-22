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

document.addEventListener("DOMContentLoaded", function () {
  var contactForm = document.getElementById("contactForm");
  var successMessage = document.getElementById("success-message");
  let dataSubmit = {};
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("form_message").value;
    dataSubmit.name = name;
    dataSubmit.email = email;
    dataSubmit.message = message;


    
    console.log(dataSubmit);
    console.log(dataSubmit.name);
    console.log(dataSubmit.email);
    console.log(dataSubmit.message);

    contactForm.reset();
    successMessage.classList.remove("hidden");
  });
});


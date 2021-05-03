console.log("cześć witam wszystkich sprawdzających mój kod ;-)");

let buttonTheme = document.querySelector(".js-button_theme");
let body = document.querySelector(".body");
let changeTheme = document.querySelector(".changeTheme");
buttonTheme.addEventListener("click", () => {
  body.classList.toggle("dark");
  changeTheme.innerText = body.classList.contains("dark")
    ? "Włącz normalny kontrast / kolor i czarny tekst"
    : "Włącz wysoki kontrast / czarna tapeta i biały tekst";
});

let buttonChange = document.querySelector(".js-button_changeColor");
let changeColor = document.querySelector(".js-changeColor");
buttonChange.addEventListener("click", () => {
  changeColor.classList.toggle("changeColor");
});

let buttonRemove = document.querySelector(".js-button_removeImg");
let image = document.querySelector(".js-image");
buttonRemove.addEventListener("click", () => {
  image.remove();
});


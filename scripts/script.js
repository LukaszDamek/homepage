{
  const welcome = () => {
    console.log("cześć witam wszystkich sprawdzających mój kod ;-)");

  }

  const toggleBackground = () => {
    const body = document.querySelector(".body");
    const changeTheme = document.querySelector(".changeTheme");
    body.classList.toggle("dark");
    changeTheme.innerText = body.classList.contains("dark")
      ? "Włącz normalny kontrast / kolor i czarny tekst"
      : "Włącz wysoki kontrast / czarna tapeta i biały tekst";

  }

  const changeColor = () => {
    const changeColor = document.querySelector(".js-changeColor");
    changeColor.classList.toggle("changeColor");

  }
  const removeImg = () => {

    const image = document.querySelector(".js-image");
    image.remove();
  }

  const init = () => {
    const buttonTheme = document.querySelector(".js-button_theme");
    buttonTheme.addEventListener("click", (toggleBackground));

    const buttonChange = document.querySelector(".js-button_changeColor");
    buttonChange.addEventListener("click", (changeColor));

    const buttonRemove = document.querySelector(".js-button_removeImg");
    buttonRemove.addEventListener("click", (removeImg));


  }
  welcome();
  init();




}

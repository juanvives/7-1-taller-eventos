const divDelBoton = document.getElementById("divDelBoton");

const botonSaludar = document.getElementById("botonSaludar");

divDelBoton.addEventListener("click", () => alert("Hola! Soy el div"));

botonSaludar.addEventListener("click", (event) => {
  alert("Hola! Soy el boton")
  event.stopPropagation();
});
//Ejecutando funciones
document
  .getElementById("btn__iniciar-sesion")
  .addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchoPage);

//Declarando variables
var formulario_login = document.querySelector(".formulario__login");
var formulario_registro = document.querySelector(".formulario__registro");
var contenedor_login_registro = document.querySelector(
  ".contenedor__login-registro"
);
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_registro = document.querySelector(".caja__trasera-registro");

//FUNCIONES

function anchoPage() {
  if (window.innerWidth > 850) {
    caja_trasera_registro.style.display = "block";
    caja_trasera_login.style.display = "block";
  } else {
    caja_trasera_registro.style.display = "block";
    caja_trasera_registro.style.opacity = "1";
    caja_trasera_login.style.display = "none";
    formulario_login.style.display = "block";
    contenedor_login_registro.style.left = "0px";
    formulario_registro.style.display = "none";
  }
}

anchoPage();

function iniciarSesion() {
  if (window.innerWidth > 850) {
    formulario_login.style.display = "block";
    contenedor_login_registro.style.left = "10px";
    formulario_registro.style.display = "none";
    caja_trasera_registro.style.opacity = "1";
    caja_trasera_login.style.opacity = "0";
  } else {
    formulario_login.style.display = "block";
    contenedor_login_registro.style.left = "0px";
    formulario_registro.style.display = "none";
    caja_trasera_registro.style.display = "block";
    caja_trasera_login.style.display = "none";
  }
}

function register() {
  if (window.innerWidth > 850) {
    formulario_registro.style.display = "block";
    contenedor_login_registro.style.left = "410px";
    formulario_login.style.display = "none";
    caja_trasera_registro.style.opacity = "0";
    caja_trasera_login.style.opacity = "1";
  } else {
    formulario_registro.style.display = "block";
    contenedor_login_registro.style.left = "0px";
    formulario_login.style.display = "none";
    caja_trasera_registro.style.display = "none";
    caja_trasera_login.style.display = "block";
    caja_trasera_login.style.opacity = "1";
  }
}


/**************************************************************************************************************************** */

const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let users = Array({
    usuario: username.value,
    contraseña: password.value
  });
  // console.log(users);
  localStorage.setItem("user", JSON.stringify(users));
  alert("Bienvenido a AGRISOFT")
  location.href = "recuperarContraseña.html";
});
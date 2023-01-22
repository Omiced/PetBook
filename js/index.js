const formulario = document.getElementById("formularioIndex");
const inputs = document.querySelectorAll("#formularioIndex input");
const btnRegistro = document.getElementById("btnRegistro");
const modalSuccess = document.querySelector(".modal-success");
const SEG_TO_LOGIN = 3;

// let usuarios = [];
let usuariosArr = [];

const expresiones = {
  nombreRegex: /^[a-zA-Z-0-9 ]{2,}$/,
  passwordRegex: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
  emailRegex: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
  telefonoRegex: /^(?!(0000000000|0000000001))\d{10}$/,
};
const campos = {
  nombre: false,
  password: false,
  email: false,
  telefono: false,
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "nombre":
      validarCampo(expresiones.nombreRegex, e.target, "nombre");
      break;
    case "password":
      validarCampo(expresiones.passwordRegex, e.target, "password");
      validarPassword2();
      break;
    case "password2":
      validarPassword2();
      break;
    case "email":
      validarCampo(expresiones.emailRegex, e.target, "email");
      break;
    case "telefono":
      validarCampo(expresiones.telefonoRegex, e.target, "telefono");
      break;
  }
};

const validarCampo = (expresion, input, campo) => {
  if (expresion.test(input.value)) {
    document
      .getElementById(`input_${campo}`)
      .classList.remove("inputIncorrecto");
    document.getElementById(`input_${campo}`).classList.add("inputCorrecto");
    document
      .querySelector(`#grupo_${campo} .alert-danger`)
      .classList.remove("alert-danger-activo");
    campos[campo] = true;
  } else {
    document.getElementById(`input_${campo}`).classList.remove("inputCorrecto");
    document.getElementById(`input_${campo}`).classList.add("inputIncorrecto");
    document
      .querySelector(`#grupo_${campo} .alert-danger`)
      .classList.add("alert-danger-activo");
    campos[campo] = false;
  }
};

const validarPassword2 = () => {
  const inputPassword1 = document.getElementById("input_password");
  const inputPassword2 = document.getElementById("input_password2");

  if (inputPassword1.value !== inputPassword2.value) {
    document
      .getElementById("input_password2")
      .classList.remove("inputCorrecto");
    document.getElementById("input_password2").classList.add("inputIncorrecto");
    document
      .querySelector("#grupo_password2 .alert-danger")
      .classList.add("alert-danger-activo");
    campos["password"] = false;
  } else {
    document
      .getElementById("input_password2")
      .classList.remove("inputIncorrecto");
    document.getElementById("input_password2").classList.add("inputCorrecto");
    document
      .querySelector("#grupo_password2 .alert-danger")
      .classList.remove("alert-danger-activo");
    campos["password"] = true;
  }
};
//Foreach.Inputs.Formulario - INICIA
inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
}); //ForEach.Inputs.Formulario - TERMINA

//Event.listener.btnRegistro - INICIA
btnRegistro.addEventListener("click", function (event) {
  event.preventDefault();
  if (!campos.telefono) return;
  if (!campos.email) return;
  if (!campos.nombre) return;
  if (!campos.password) return;
  //obtener datos;
  const nombre = document.getElementById("input_nombre").value;
  const telefono = document.getElementById("input_telefono").value;
  const email = document.getElementById("input_email").value;
  const password = document.getElementById("input_password").value;

  //SetDatos - INICIA
  addItem(nombre, telefono, email, password);
  setLocal(usuariosArr);
  console.log(usuariosArr);
  modalSuccess.showModal();

  delayLogin(SEG_TO_LOGIN);
}); //Event.Listener.btnRegistro - TERMINA

//FUNCIONES LOCALSTORAGE

function delayLogin(segs) {
  setTimeout(() => {
    window.location.href = "login.html";
  }, segs * 1000);
}

function addItem(name, telephone, email, password) {
  usuariosArr.push({
    usuario: name,
    telephone: telephone,
    email: email,
    password: password,
    loggedIn: false,
  });
}

function setLocal(arr) {
  window.localStorage.setItem("usuarios", JSON.stringify(arr));
}

function obtenerLocalStorage() {
  const usuarios = localStorage.getItem("usuarios");
  if (!usuarios) return;
  usuariosArr = JSON.parse(usuarios);
}

// window.addEventListener("load", (e) => {
//   e.preventDefault;
//   // obtenerLocalStorage();
//   if (obtenerLocalStorage() == true && usuariosArr[0].loggedIn == true) {
//     window.location.href = "Publicaciones.html";
//   } else {
//     console.log("Inicia sesión o registrate");
//   }
// });

//Botón - "Ya tengo cuenta"
let btnTengoCuenta = document.getElementById("btnTengoCuenta");
btnTengoCuenta.addEventListener("click", () => {
  window.location.href = "login.html";
});

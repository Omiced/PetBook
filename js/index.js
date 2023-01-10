
const formulario = document.getElementById("formularioIndex");
const inputs = document.querySelectorAll("#formularioIndex input");
const btnRegistro = document.getElementById("btnRegistro");
// const numeroTel = document.getElementById("inputnumeroTel");

let datosUsuario = [];


const expresiones = {
  nombreRegex: /^[a-zA-Z0-9À-ÿ\s]{1,40}$/,
  passwordRegex: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
  emailRegex: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefonoRegex: /^[0-9]{10}$/
}

//Funcion.Validar.Formulario - INICIA
const validarFormulario = (e) => {
  switch (e.target.name) {
    case "inputNombre":
      if (expresiones.nombreRegex.test(e.target.value)) {

        document.getElementById('inputNombre').classList.remove('inputIncorrecto')
        document.getElementById('inputNombre').classList.add('inputCorrecto')
        document.querySelector('#grupoNombre .alert-danger').classList.remove('alert-danger-activo')
        return true
      } else {
        document.getElementById('inputNombre').classList.remove('inputCorrecto')
        document.getElementById('inputNombre').classList.add('inputIncorrecto')
        document.querySelector('#grupoNombre .alert-danger').classList.add('alert-danger-activo')
        return false
      }
      break;

      if (expresiones.nombreRegex.test(e.target.value)) {

        document.getElementById('inputnumeroTel').classList.remove('inputIncorrecto')
        document.getElementById('inputnumeroTel').classList.add('inputCorrecto')
        document.querySelector('#grupoTelefono .alert-danger').classList.remove('alert-danger-activo')
        return true
      } else {
        document.getElementById('inputnumeroTel').classList.remove('inputCorrecto')
        document.getElementById('inputnumeroTel').classList.add('inputIncorrecto')
        document.querySelector('#grupoTelefono .alert-danger').classList.add('alert-danger-activo')
        return false
      }
      break;


    // case "inputnumeroTel":
    //   if (expresiones.telefonoRegex.test(e.target.value)) {

    //     document.getElementById('inputnumeroTel').classList.remove('inputIncorrecto')
    //     document.getElementById('inputnumeroTel').classList.add('inputCorrecto')
    //     document.querySelector('#grupoTelefono .alert-danger').classList.remove('alert-danger-activo')
    //     return true
    //   } else {
    //     document.getElementById('inputnumeroTel').classList.remove('inputCorrecto')
    //     document.getElementById('inputnumeroTel').classList.add('inputIncorrecto')
    //     document.querySelector('#grupoTelefono .alert-danger').classList.add('alert-danger-activo')
    //     return false
    //   }
    //   break;

    case "inputEmail":
      if (expresiones.emailRegex.test(e.target.value)) {

        document.getElementById('inputEmail').classList.remove('inputIncorrecto')
        document.getElementById('inputEmail').classList.add('inputCorrecto')
        document.querySelector('#grupoEmail .alert-danger').classList.remove('alert-danger-activo')
        return true
      } else {
        document.getElementById('inputEmail').classList.remove('inputCorrecto')
        document.getElementById('inputEmail').classList.add('inputIncorrecto')
        document.querySelector('#grupoEmail .alert-danger').classList.add('alert-danger-activo')
        return false
      }
      break;
    case "inputPassword":
      if (expresiones.passwordRegex.test(e.target.value)) {

        document.getElementById('inputPassword').classList.remove('inputIncorrecto')
        document.getElementById('inputPassword').classList.add('inputCorrecto')
        document.querySelector('#grupoPassword .alert-danger').classList.remove('alert-danger-activo')
        return true
      } else {
        document.getElementById('inputPassword').classList.remove('inputCorrecto')
        document.getElementById('inputPassword').classList.add('inputIncorrecto')
        document.querySelector('#grupoPassword .alert-danger').classList.add('alert-danger-activo')
        return false
      }
      break;
    case "inputPassword2":
      const inputPassword = document.getElementById('inputPassword');
      const inputPassword2 = document.getElementById('inputPassword2');
      if (inputPassword.value !== inputPassword2.value) {
        document.getElementById('inputPassword2').classList.remove('inputCorrecto')
        document.getElementById('inputPassword2').classList.add('inputIncorrecto')
        document.querySelector('#grupoPassword2 .alert-danger').classList.add('alert-danger-activo')
        return false
      } else {
        document.getElementById('inputPassword2').classList.remove('inputIncorrecto')
        document.getElementById('inputPassword2').classList.add('inputCorrecto')
        document.querySelector('#grupoPassword2 .alert-danger').classList.remove('alert-danger-activo')
        return true
      }
      break;
  }//switchid
}//Funcion.validar.Formulario - TERMINA


//Foreach.Inputs.Formulario - INICIA
inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});//ForEach.Inputs.Formulario - TERMINA

//Event.listener.btnRegistro - INICIA
btnRegistro.addEventListener("click", function (event) {
  event.preventDefault();

  const nombre = inputNombre.value;
  const email = inputEmail.value;
  const password = inputPassword.value;
  const password2 = inputPassword2.value;
  const telefono = inputnumeroTel.value;
  if (!nombre) return alert("datos no validos");
  if (!email) return alert("datos no validos");
  if (!password) return alert("datos no validos");
  if (!password2) return alert("datos no validos");
  if (!telefono) return alert("datos no validos");

  else {
    alert("Datos correctos Mi amora <3");
    // setDatos();
    addItem(nombre, telefono, email, password, password2);
    setLocal(datosUsuario);

    window.location.href = "Publicaciones.html";
  }

})//Event.Listener.btnRegistro - TERMINA

//FUNCIONES LOCALSTORAGE

function addItem(name, telephone, email, password1, password2) {
  datosUsuario.push({
    name: name,
    telephone: telephone,
    email: email,
    password1: password1,
    password2: password2
  });
  console.log(datosUsuario);
}

function setLocal(arr) {
  window.localStorage.setItem("datosUsuario", JSON.stringify(arr));
}



// function obtenerLocalStorage() {
//   let publicacion = localStorage.getItem("publicaciones");
//   if (!publicacion) return;
//   publicaciones = JSON.parse(publicacion);
// }


// function setDatos(){
//   localStorage.setItem("nombreUsuario", inputNombre.value);
//   localStorage.setItem("numeroTelefono", inputnumeroTel.value);
//   localStorage.setItem("email", inputEmail.value);
//   localStorage.setItem("contraseña", inputPassword.value);
//   localStorage.setItem("contraseña2", inputPassword2.value);

// }

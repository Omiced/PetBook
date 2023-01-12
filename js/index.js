
const formulario = document.getElementById("formularioIndex");
const inputs = document.querySelectorAll("#formularioIndex input");
const btnRegistro = document.getElementById("btnRegistro");
//const numeroTel = document.getElementById("inputnumeroTel");

let datosUsuario = [];


const expresiones = {
  nombreRegex: /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/,
  passwordRegex: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
  emailRegex:  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
  telefonoRegex: /^(?!(0000000000|0000000001))\d{10}$/,
}

//Funcion.Validar.Formulario - INICIA
const validarFormulario = (e) => {
  switch (e.target.name) {
    case "inputNombre":
      if (expresiones.nombreRegex.test(e.target.value)) {

        document.getElementById('inputNombre').classList.remove('inputIncorrecto')
        document.getElementById('inputNombre').classList.add('inputCorrecto')
        document.querySelector('#grupoNombre .alert-danger').classList.remove('alert-danger-activo')
        
      } else {
        document.getElementById('inputNombre').classList.remove('inputCorrecto')
        document.getElementById('inputNombre').classList.add('inputIncorrecto')
        document.querySelector('#grupoNombre .alert-danger').classList.add('alert-danger-activo')
        
      }
      break;      
    
      case "inputTelefono":
        if (expresiones.telefonoRegex.test(e.target.value)) {
  
          document.getElementById('inputTelefono').classList.remove('inputIncorrecto')
          document.getElementById('inputTelefono').classList.add('inputCorrecto')
          document.querySelector('#grupoTelefono .alert-danger').classList.remove('alert-danger-activo')
          
        } else {
          document.getElementById('inputTelefono').classList.remove('inputCorrecto')
          document.getElementById('inputTelefono').classList.add('inputIncorrecto')
          document.querySelector('#grupoTelefono .alert-danger').classList.add('alert-danger-activo')
          
        }
        break;      

    case "inputEmail":
      if (expresiones.emailRegex.test(e.target.value)) {

        document.getElementById('inputEmail').classList.remove('inputIncorrecto')
        document.getElementById('inputEmail').classList.add('inputCorrecto')
        document.querySelector('#grupoEmail .alert-danger').classList.remove('alert-danger-activo')
        
      } else {
        document.getElementById('inputEmail').classList.remove('inputCorrecto')
        document.getElementById('inputEmail').classList.add('inputIncorrecto')
        document.querySelector('#grupoEmail .alert-danger').classList.add('alert-danger-activo')
        
      }
      break;
    case "inputPassword":
      if (expresiones.passwordRegex.test(e.target.value)) {

        document.getElementById('inputPassword').classList.remove('inputIncorrecto')
        document.getElementById('inputPassword').classList.add('inputCorrecto')
        document.querySelector('#grupoPassword .alert-danger').classList.remove('alert-danger-activo')
        
      } else {
        document.getElementById('inputPassword').classList.remove('inputCorrecto')
        document.getElementById('inputPassword').classList.add('inputIncorrecto')
        document.querySelector('#grupoPassword .alert-danger').classList.add('alert-danger-activo')
        
      }
      break;
    case "inputPassword2":
      const inputPassword = document.getElementById('inputPassword');
      const inputPassword2 = document.getElementById('inputPassword2');
      if (inputPassword.value !== inputPassword2.value) {
        document.getElementById('inputPassword2').classList.remove('inputCorrecto')
        document.getElementById('inputPassword2').classList.add('inputIncorrecto')
        document.querySelector('#grupoPassword2 .alert-danger').classList.add('alert-danger-activo')
        
      } else {
        document.getElementById('inputPassword2').classList.remove('inputIncorrecto')
        document.getElementById('inputPassword2').classList.add('inputCorrecto')
        document.querySelector('#grupoPassword2 .alert-danger').classList.remove('alert-danger-activo')
        
      }
      break;
  }//switchid
}//Funcion.validar.Formulario - TERMINA


//Foreach.Inputs.Formulario - INICIA
inputs.forEach((input) => {
  input.addEventListener("mouseover", validarFormulario);
  input.addEventListener("mouseout", validarFormulario);
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
  const telefono = inputTelefono.value;
  if  (nombre && email && password && password2 && telefono){ 
   window.location.href = "Publicaciones.html";
   } else if (!nombre | !email | !password | !password2 | !telefono){
    return alert ("Datos no válidos");
  };
 
//no se que sea esto att: abraham :v
  let inputFocused="";
let elements = document.querySelectorAll("input[type='text'], input[type='password']");
for (let i =0; i<elements.length;i++){
  elements[i].addEventListener("focus", function(){
    inputFocused = this;
    inputFocused.valueOf="";
  });
}//TERMINA
//SetDatos - INICIA
setDatos();
  addItem(nombre, telefono, email, password, password2);
  setLocal(datosUsuario);
  //setDatos - TERMINA
});//Event.Listener.btnRegistro - TERMINA

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

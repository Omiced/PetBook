let btnRegistro = document.getElementById("btnRegistro");
let nombreMascota = document.getElementById("nombreMascota");
let especie = document.getElementById("especie");
let inputEmail = document.getElementById("inputEmail");
let contraseña = document.getElementById("password");
let repetirContraseña = document.getElementById("RepeatPassword")
let alertaValidaciones = document.getElementById("alertaValidaciones");
let alertaValidacionesTexto = document.getElementById(
  "alertaValidacionesTexto"
);


let idTimeout;

// let nombreRegex = /^[A-Z][a-zA-Z]+$/;
let nombreRegex = /(^[A-ZÁÉÍÓÚ a-zñáéíóú]{1}([a-zñáéíóú]+){2,})((\s[A-ZÁÉÍÓÚ a-zñáéíóú]{1}([a-zñáéíóú]+){2,})?)((\s[A-ZÁÉÍÓÚ a-zñáéíóú]{1}([a-zñáéíóú]+){2,})?)((\s[A-ZÁÉÍÓÚ a-zñáéíóú]{1}([a-zñáéíóú]+){2,})?)$/;
let contraseñaRegex=/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
let emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

btnRegistro.addEventListener("click", function (event) {
  event.preventDefault();
  let validos = 0;
  alertaValidaciones.innerHTML = "";
  if (
    nombreMascota.value.match() != null &&
    inputEmail.value.match(emailRegex) != null &&
    contraseña.value.match(contraseñaRegex) != null &&
    repetircontraseña.value.match(contraseñaRegex) != null 
  ) {
    alertaValidaciones.style.display = "none";
  }





  //LISTO NOMBRE
  nombreMascota.value = nombreMascota.value.trim();
  if (nombreMascota.value.match(nombreRegex) == null) {
    nombreMascota.style.border = "solid red 5px";
    alertaValidaciones.style.display = "block";
    alertaValidaciones.innerHTML += `<li>El nombre debe contener más de dos carácteres</li>`;
  } else {
    nombreMascota.style.border = "solid green 5px";
    // alertaValidaciones.style.display = "none";
    validos++;
  }



  //LISTO especie
  especie.value = especie.value.trim();
  especie.value = especie.value.replaceAll(" ", "");
  if (especie.value.match(numeroRegex) == null) {
    alertaValidaciones.style.display = "block";
    alertaValidaciones.innerHTML +=
      "<li>El número telefónico no es válido</li>";
    especie.style.border = "solid red 5px";
  } else {
    especie.style.border = "solid green 5px";
    // alertaValidaciones.style.display = "none"
    validos++;
  }
 
//LISTO CONTRASEÑA
if (contraseña.value.match(contraseñaRegex) == null) {
    alertaValidaciones.style.display = "block";
    alertaValidaciones.innerHTML += "<li>El correo no es válido</li>";
    contraseña.style.border = "solid red 5px";
  } else {
    contraseña.style.border = "solid green 5px";
    validos++;
  }
   
  //LISTO REPETIRCONTRASEÑA
  if (repetirContraseña.value.match(contraseñaRegex) == null) {
      alertaValidaciones.style.display = "block";
      alertaValidaciones.innerHTML += "<li>Repetir contraseña debe ser igual a la anterior</li>";
      repetirContraseña.style.border = "solid red 5px";
    } else {
      repetirContraseña.style.border = "solid green 5px";
      validos++;
    }




  //LISTO CORREO
  if (inputEmail.value.match(emailRegex) == null) {
    alertaValidaciones.style.display = "block";
    alertaValidaciones.innerHTML += "<li>El correo no es válido</li>";
    inputEmail.style.border = "solid red 5px";
  } else {
    inputEmail.style.border = "solid green 5px";
    validos++;
  }

   if (idTimeout != undefined && idTimeout != null) {
    clearTimeout(idTimeout);
  }

  if (validos == 4) {
    idTimeout = setTimeout(function () {
      nombreMascota.style.border = "";
      especie.style.border = "";
      inputEmail.style.border = "";
      mensajeEl.style.border = "";
    }, 2000);
  } //==4

  const nombre = nombreMascota.value;
  const numero = especie.value;
  const correo = inputEmail.value;
  const mensaje1 = mensajeEl.value;
  if (!nombre) return;
  if (!numero) return;
  if (!correo) return;
  if (!mensaje1) return;
  enviarcorreo(nombre, numero, correo, mensaje1);
});

function enviarcorreo(nombre, numero, correo, mensaje1) {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "empresaPetBook@gmail.com",
    Password: "9F11527D0A8244A1E7FA577D4A0311747A63",
    To: "empresaPetBook@gmail.com",
    From: "empresaPetBook@gmail.com",
    Subject: nombre,
    Body: `Recibio un mensaje de ${nombre}, El mensaje es: ${mensaje1}, telefono:${numero} y correo ${correo}`,
  }).then((message) => alert(message));
}//btnRegistro

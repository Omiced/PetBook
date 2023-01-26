let btnEnviar = document.getElementById("btnEnviar");
let txtNombre = document.getElementById("nombre");
let numeroTel = document.getElementById("numeroTel");
let inputEmail = document.getElementById("inputEmail");
let alertaValidaciones = document.getElementById("alertaValidaciones");
let alertaValidacionesTexto = document.getElementById(
  "alertaValidacionesTexto"
);
let mensajeEl = document.getElementById("exampleFormControlTextarea1");
const modalSuccess = document.querySelector(".modal-success");
const SEG_CLOSE_MODAL = 3;
let idTimeout;

// let nombreRegex1 = /^[A-Z][a-zA-Z]+$/;
let nombreRegex =
  /(^[A-ZÁÉÍÓÚ a-zñáéíóú]{1}([a-zñáéíóú]+){2,})((\s[A-ZÁÉÍÓÚ a-zñáéíóú]{1}([a-zñáéíóú]+){2,})?)((\s[A-ZÁÉÍÓÚ a-zñáéíóú]{1}([a-zñáéíóú]+){2,})?)((\s[A-ZÁÉÍÓÚ a-zñáéíóú]{1}([a-zñáéíóú]+){2,})?)$/;
let numeroRegex = /^[0-9]{10}$/;
let emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

btnEnviar.addEventListener("click", function (event) {
  event.preventDefault();
  let validos = 0;
  alertaValidaciones.innerHTML = "";
  if (
    txtNombre.value.match(nombreRegex) != null &&
    numeroTel.value.match(numeroRegex) != null &&
    inputEmail.value.match(emailRegex) != null &&
    mensajeEl.value.length > 20
  ) {
    alertaValidaciones.style.display = "none";
  }

  //LISTO NOMBRE
  txtNombre.value = txtNombre.value.trim();
  if (txtNombre.value.match(nombreRegex) == null) {
    txtNombre.style.border = "solid red 5px";
    alertaValidaciones.style.display = "block";
    alertaValidaciones.innerHTML += `<li>El nombre debe contener más de dos carácteres</li>`;
  } else {
    txtNombre.style.border = "solid green 5px";
    // alertaValidaciones.style.display = "none";
    validos++;
  }

  //LISTO NUMERO DE TELEFONO
  numeroTel.value = numeroTel.value.trim();
  numeroTel.value = numeroTel.value.replaceAll(" ", "");
  if (numeroTel.value.match(numeroRegex) == null) {
    alertaValidaciones.style.display = "block";
    alertaValidaciones.innerHTML +=
      "<li>El número telefónico no es válido</li>";
    numeroTel.style.border = "solid red 5px";
  } else {
    numeroTel.style.border = "solid green 5px";
    // alertaValidaciones.style.display = "none"
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

  // LISTO MENSAJE
  mensajeEl.value.trim().replaceAll("  ", "");
  if (mensajeEl.value.length < 20) {
    alertaValidaciones.style.display = "block";
    alertaValidaciones.innerHTML += `<li>El mensaje debe contener 20 caracteres o más</li>`;
    mensajeEl.style.border = "solid red 5px";
  } else {
    mensajeEl.style.border = "solid green 5px";
    validos++;
  }

  if (mensajeEl.value.length === 0) {
    alertaValidaciones.style.display = "block";
    alertaValidaciones.innerHTML += `<li>El mensaje no puede estar vacio</li>`;
    mensajeEl.style.border = "solid red 5px";
  }

  if (idTimeout != undefined && idTimeout != null) {
    clearTimeout(idTimeout);
  }

  if (validos == 4) {
    idTimeout = setTimeout(function () {
      txtNombre.style.border = "";
      numeroTel.style.border = "";
      inputEmail.style.border = "";
      mensajeEl.style.border = "";
    }, 2000);
  } //==4

  const nombre = txtNombre.value;
  const numero = numeroTel.value;
  const correo = inputEmail.value;
  const mensaje1 = mensajeEl.value;
  if (!nombre) return;
  if (!numero) return;
  if (!correo) return;
  if (!mensaje1) return;
  enviarcorreo(nombre, numero, correo, mensaje1);
});
//actual PETBOOK
function enviarcorreo(nombre, numero, correo, mensaje1) {
    Email.send({
    SecureToken : "90fc2f28-1410-4b40-bd7d-c6d27b053631",
    To : 'empresaPetBook@gmail.com',
    From : "empresaPetBook@gmail.com",
    Subject : nombre,
    Body : `Recibio un mensaje de ${nombre}, El mensaje es: ${mensaje1}, telefono:${numero} y correo ${correo}`
}).then((message) => {
  if (message === "OK") {
    modalSuccess.showModal();
  }
  setTimeout(closeModal, SEG_CLOSE_MODAL * 1000);
});
} //btnenviar
function closeModal() {
  modalSuccess.close();
}

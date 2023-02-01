const btnRegistroEl = document.getElementById("btnRegistro");
const divEl = document.querySelector(".alerts");

const prueba = [
  {
    usuario: "Josue",
    password: "josue1234",
  },
  {
    usuario: "Bianca",
    password: "bianca1234",
  },
];

let usuariosArr = [];
function renderAlert(message) {
  const markup = `
  <div class="alert alert-danger" role="error">
    <h6>Datos incorrectos</h6>
    <li>${message}</li>
  </div>
  `;

  divEl.innerHTML = markup;
}
function validarDatos(arr, valueUsuario, valuePassword) {
  return arr.some((registro) => {
    if (
      registro.usuario == valueUsuario &&
      registro.password == valuePassword
    ) {
      return registro;
    }
    return;
  });
}

function obtenerLocalStorage() {
  const usuarios = localStorage.getItem("usuarios");
  if (!usuarios) return;
  usuariosArr = JSON.parse(usuarios);
}

btnRegistroEl.addEventListener("click", (e) => {
  e.preventDefault();
  divEl.innerHTML = "";
  const passwordValue = document.getElementById("inputPassword").value;
  const usuarioValue = document.getElementById("input_nombre").value;
  if (!passwordValue || !usuarioValue) {
    renderAlert("Los campos no pueden quedar vacíos");
    return;
  }
  if (!validarDatos(usuariosArr, usuarioValue, passwordValue)) {
    renderAlert("El correo o la contraseña son incorrectos");
    return;
  }
  divEl.innerHTML = "";
  usuariosArr[0].loggedIn = true;
  localStorage.setItem("usuarios", JSON.stringify(usuariosArr));
  window.location.href = "Publicaciones.html";
});

window.addEventListener("load", (e) => {
  e.preventDefault;
  obtenerLocalStorage();
  if (usuariosArr.length <= 0) return;
  console.log(usuariosArr);
  if (usuariosArr[0].loggedIn == true) {
    window.location.href = "Publicaciones.html";
  }
});


//Botón - "No tengo cuento"
let btnSinCuenta = document.getElementById("btnSinCuenta");
btnSinCuenta.addEventListener("click", () => {
  window.location.href = "index.html";
})
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
    renderAlert("El nombre de usuario o la contraseña son incorrectos");
    return;
  }
  divEl.innerHTML = "";
});

window.addEventListener("load", (e) => {
  e.preventDefault;
  obtenerLocalStorage();
});

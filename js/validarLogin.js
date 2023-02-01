const URL = "";
const API = "";
let usuario = {};
let inputpassword = document.querySelector("input-password").value
let inputcorreo= document.querySelector("input-nombre").value
const button = document.getElementById('btnRegistro');

function renderAlert(message) {
    const markup = `
    <div class="alert alert-danger" role="error">
      <h6>Datos incorrectos</h6>
      <li>${message}</li>
    </div>
    `;
  
    divEl.innerHTML = markup;
}

const Prueba = async function (URL){
    const response = await fetch (URL);
    const data = response.json;
    data.contrasena= usuario.contrasena;
    data.email= usuario.email;

}

const validarLogin = function (usuario){
    if (usuario.email == inputcorreo && usuario.contrasena == inputcorreo) {
        return true;
    }else{
        renderAlert("El correo o la contraseña son incorrectos");
        return false;
        
    }
}

button.addEventListener('click', function() {
    Prueba(URL).then(validarLogin(usuario));
         
  });
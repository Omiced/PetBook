const URL = "";
const API = "";
let usuario = {};
let inputpassword = document.querySelector("input-password").value
let inputcorreo= document.querySelector("input-nombre").value
const button = document.getElementById('btnRegistro');

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
        return false;
    }
}

button.addEventListener('click', function() {
    Prueba(URL).then(validarLogin(usuario));
         
  });
const btnAgregar = document.getElementById("btnAgregar");
const itemsContainer = document.getElementById("container");
let publicaciones = [];
let btnLike = document.getElementById("btnLike");
//let likes = document.getElementById("likes")
//DOM FORMULARIO
let btnEnviar = document.getElementById("btnEnviar");
let txtNombre = document.getElementById("txtNombre");
let txtDescripcion = document.getElementById("txtDescripcion");
//DOM CERRAR SESION
let btnCerrar = document.getElementById("btnCerrarSesion");
//let inputImg = document.getElementById("inputImg");
let base64Img = "";
let alertaValidaciones = document.getElementById("alertaValidaciones");
let alertaValidacionesTexto = document.getElementById(
  "alertaValidacionesTexto"
);
let imagentemp = document.getElementById("imagentemp");
let validos = 0;
let idTimeout;

//REGEX nombre
//Este REGEX ya incluye el mínimo de caracteres 2 y el máximo es indeterminado
let nombreRegex = /^[a-zA-Z0-9A-ZÁÉÍÓÚ a-zñáéíóú(?¿:.*[@$¡!^\-_)]{2,}$/;

//Este REGEX ya incluye el mínimo de caracteres 10 y el máximo es indeterminado
let descriptionRegex = /^[a-zA-Z0-9A-ZÁÉÍÓÚ a-zñáéíóú(?¿:.*[@$¡!^\-_)]{10,}$/; //No acepta corchetes []

const input = document.getElementById("inputImg");
const tmpimagen = document.getElementById("tmpimagen");
const textArea = document.getElementById("textArea");
const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};
const uploadImage = async (event) => {
  const file = event.target.files[0];
  base64Img = await convertBase64(file);
  tmpimagen.src = base64Img;
};

input.addEventListener("change", (e) => {
  uploadImage(e);
});

function validarNombre() {
  //LISTO NOMBRE
  txtNombre.value = txtNombre.value.trim().replaceAll("  ", "");
  if (txtNombre.value.match(nombreRegex) == null) {
    txtNombre.style.border = "solid red 5px";
    alertaValidaciones.style.display = "block";
    alertaValidaciones.innerHTML += `<li>El nombre debe contener más de dos carácteres</li>`;
  } else {
    txtNombre.style.border = "solid green 5px";
    validos++;
    return true;
  }
} //validarNombre

function validarDescripcion() {
  // LISTO MENSAJE
  txtDescripcion.value = txtDescripcion.value.trim().replaceAll("  ", "");

  if (txtDescripcion.value.length === 0) {
    alertaValidaciones.style.display = "block";
    alertaValidaciones.innerHTML += `<li>El mensaje no puede estar vacio</li>`;
    txtDescripcion.style.border = "solid red 5px";
  }

  if (txtDescripcion.value.match(descriptionRegex) == null) {
    alertaValidaciones.style.display = "block";
    alertaValidaciones.innerHTML += `<li>El mensaje debe contener 10 carácteres como mínimo</li>`;
    txtDescripcion.style.border = "solid red 5px";
  } else {
    txtDescripcion.style.border = "solid green 5px";
    validos++;
    return true;
  }
} //validarDescripcion

function quitarAlertas() {
  if (
    txtNombre.value.match(nombreRegex) != null &&
    txtDescripcion.value.match(descriptionRegex) != null
  ) {
    alertaValidaciones.style.display = "none";
  }
}

function temporizador() {
  if (idTimeout != undefined && idTimeout != null) {
    clearTimeout(idTimeout);
  }

  if (validos == 2) {
    idTimeout = setTimeout(function () {
      txtNombre.style.border = "";
      txtDescripcion.style.border = "";
      alertaValidaciones.style.display = "none";
    }, 2000);
  } //==4
}

//EVENTO===============================================================================
btnEnviar.addEventListener("click", function (event) {
  event.preventDefault();
  alertaValidaciones.innerHTML = ""; //separacion entre los alerts y las cards

  if (validarNombre() == true && validarDescripcion() == true) {
    quitarAlertas();
    temporizador();

    addItem(base64Img, txtNombre.value, txtDescripcion.value);
    setLocal(publicaciones);
    renderItems(publicaciones);

    //Limpia los campos nombres y descripción
    txtNombre.value = "";
    txtDescripcion.value = "";
    input.value = "";
    tmpimagen.src = "";
base64Img = "";
    txtNombre.focus();
    
  }
  //    let inputFocused="";
  //  let elements = document.querySelectorAll("input[type='text'], input[type='password']");
  //  for (let i =0; i<elements.length;i++){
  //    elements[i].addEventListener("focus", function(){
  //      inputFocused = this;
  //      inputFocused.value="";
  //   });
  // }
});
txtNombre.addEventListener("blur", function (event) {
  event.preventDefault();
  event.target.value = event.target.value.trim();
});
txtDescripcion.addEventListener("blur", function (event) {
  event.preventDefault();
  event.target.value = event.target.value.trim();
});

function addItem( urlImg, name, description) {
  publicaciones.push({
    img: urlImg,
    name: name,
    description: description,
  });
  console.log(publicaciones);
}

function setLocal(arr) {
  window.localStorage.setItem("publicaciones", JSON.stringify(arr));
}

function renderItems(items) {
  itemsContainer.innerHTML = "";

  publicaciones.forEach((item) =>
    itemsContainer.insertAdjacentHTML("afterbegin", chooseRender(item))
  );
}

function chooseRender(item) {
  const markupImg = `
  <div class="row justify-content-center">
    <div class="card card-img" >
      <img src="${item.img}" class="card-img-top img" alt="${item.description}">
      <div class="card-body">
      <button type="button" class="btn btn-outline-secondary" id="btnLike" value="1" data-counter  ></button>
      <span id = "likes">
      </span>
        <h4 class="card-title text-center">${item.name}</h4>
        <p class="card-text " id = "descripcionTexto">${item.description}</p>
        <p class="card-text " id = "usuario"> publicado por: <b>${usuario}</b><p>

      </div>
    </div>
    </div>
    <script  src="/js/Dospublicaciones.js"> </script>
    `;

  const markupText = `
  <div class="row justify-content-center">
    <div class="card card-text" >
      <div class="card-body">
        <h5 class="card-title text-center">${item.name}</h5>
        <p class="card-text " id ="descripcionTexto">${item.description}</p>
        <p class="card-text " id = "usuario"> publicado por: <b>${usuario}</b><p>
      </div>
    </div>
    </div>
    `;
  return item.img ? markupImg : markupText;
}

function obtenerLocalStorage() {
  let publicacion = localStorage.getItem("publicaciones");
  if (!publicacion) return;
  publicaciones = JSON.parse(publicacion);
}

window.addEventListener("load", () => {
  obtenerLocalStorage();
  renderItems(publicaciones);
});

//borrar los datos de inicio de sesion al momento de cerrarla
btnCerrar.addEventListener("click", function (event) {
  event.preventDefault();
  const usuarios = JSON.parse(localStorage.getItem("usuarios"));
  if (!usuarios) {
    window.location.href = "login.html";
    return;
  }

  const logueado = usuarios.filter((usuario) => usuario.loggedIn == true);
  logueado[0].loggedIn = false;
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  //obtenerLocalStorage();
  //localStorage.setItem("usuarios", JSON.stringify(x));

  window.location.href = "login.html";
});

 let cant1 = 0;
 const cajas = document.querySelectorAll("#container");
 cajas.forEach((item)=>
item.addEventListener("click", (event) => {
  const clickedElement = event.target;
  if (!clickedElement.matches("#btnLike")) {
    return;
  }
  let megusta = document.querySelector("#likes");
  megusta.innerHTML = cant1 + `<p>Croquetas</p>`;
  cant1++;
  event.stopPropagation();
 })); 



//  function obtenerLocalStorage2() {
//   const usuarios = localStorage.getItem("usuarios");
//   if (!usuarios) return;
//   usuariosArr = JSON.parse(usuarios);
// }




const mascota = localStorage.getItem("usuarios");
let nombreMascota = JSON.parse(mascota);
let usuario = nombreMascota[0].usuario
console.log(usuario)

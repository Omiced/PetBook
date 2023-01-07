const btnAgregar = document.getElementById("btnAgregar");
const itemsContainer = document.getElementById("container");
let publicaciones = [];

//DOM FORMULARIO
let btnEnviar = document.getElementById("btnEnviar");
let txtNombre = document.getElementById("txtNombre");
let txtDescripcion = document.getElementById("txtDescripcion");
//let inputImg = document.getElementById("inputImg");
let base64Img = "";
let alertaValidaciones = document.getElementById("alertaValidaciones");
let alertaValidacionesTexto = document.getElementById("alertaValidacionesTexto");

let validos = 0;
let idTimeout;

//REGEX nombre
//Este REGEX ya incluye el mínimo de caracteres 2 y el máximo es indeterminado
let nombreRegex = /^[a-zA-Z ]{2,}$/;

//Este REGEX ya incluye el mínimo de caracteres 10 y el máximo es indeterminado
let descriptionRegex = /^[a-zA-Z0-9A-ZÁÉÍÓÚ a-zñáéíóú(?¿:.*[@$¡!^\-_)]{10,}$/;//No acepta corchetes []


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



function validarNombre(){
    //LISTO NOMBRE
    txtNombre.value = txtNombre.value.trim().replaceAll("  ", "");
    if (txtNombre.value.match(nombreRegex) == null) {
        txtNombre.style.border = "solid red 5px";
        alertaValidaciones.style.display = "block";
        alertaValidaciones.innerHTML += `<li>El nombre debe contener más de dos carácteres y no puede contener números</li>`;
    } else {
        txtNombre.style.border = "solid green 5px";
        validos++;
        return true;
}

}//validarNombre

function validarDescripcion(){
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
}//validarDescripcion


function quitarAlertas(){
    if (
        (txtNombre.value.match(nombreRegex)) != null && (txtDescripcion.value.match(descriptionRegex) != null)
    ) {
        alertaValidaciones.style.display = "none";
    }
}

function temporizador(){
    if (idTimeout != undefined && idTimeout != null) {
        clearTimeout(idTimeout);
    }

    if (validos == 2) {
        idTimeout = setTimeout(function () {
            txtNombre.style.border = "";
            txtDescripcion.style.border = "";
            alertaValidaciones.style.display = none;
        }, 2000);
    } //==4
}

//EVENTO===============================================================================
btnEnviar.addEventListener("click", function (event) {
    event.preventDefault();
    alertaValidaciones.innerHTML = ""; //separacion entre los alerts y las cards

    if(validarNombre() == true && validarDescripcion() == true){
        quitarAlertas();
        temporizador();


        addItem(base64Img, txtNombre.value, txtDescripcion.value);
        setLocal(publicaciones);
        renderItem(publicaciones);
    }

});


function addItem(urlImg, name, description) {
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
function renderItem(items) {
    itemsContainer.innerHTML = "";
    publicaciones.forEach((item) =>
        itemsContainer.insertAdjacentHTML(
            "beforeend",
            '<div class="card" style="width: 18rem;">\n' +
            '    <img src="' +
            item.img +
            '" class="card-img-top" alt="image">\n' +
            '    <div class="card-body">\n' +
            '        <h5 class="card-title">' +
            item.name +
            "</h5>\n" +
            '        <p class="card-text">' +
            item.description +
            "</p>\n" +
            '        <a href="#" class="btn btn-primary">Me gusta</a>\n' +
            "    </div>\n" +
            "</div>\n" +
            "<br/>"
        )
    );
}

function obtenerLocalStorage() {
    let publicacion = localStorage.getItem("publicaciones");
    if (!publicacion) return;
    publicaciones = JSON.parse(publicacion);
    console.log(publicaciones);
}

window.addEventListener("load", () => {
    obtenerLocalStorage();
    renderItem(publicaciones);
});


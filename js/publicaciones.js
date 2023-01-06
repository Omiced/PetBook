const btnAgregar = document.getElementById("btnAgregar");
const itemsContainer = document.getElementById("container");
let publicaciones = [];

//DOM FORMULARIO 
let btnEnviar = document.getElementById("btnEnviar");
let txtNombre= document.getElementById("txtNombre");
let txtDescripcion = document.getElementById("txtDescripcion");
//let inputImg = document.getElementById("inputImg");


let alertaValidaciones = document.getElementById("alertaValidaciones");
let alertaValidacionesTexto = document.getElementById("alertaValidacionesTexto");

let idTimeout;

//REGEX nombre
let nombreRegex = /^[A-Z][a-zA-Z]+$/;

// let nombreRegex = /(^[A-ZÁÉÍÓÚ a-zñáéíóú]{1}([a-zñáéíóú]+){2,})((\s[A-ZÁÉÍÓÚ a-zñáéíóú]{1}([a-zñáéíóú]+){2,})?)((\s[A-ZÁÉÍÓÚ a-zñáéíóú]{1}([a-zñáéíóú]+){2,})?)((\s[A-ZÁÉÍÓÚ a-zñáéíóú]{1}([a-zñáéíóú]+){2,})?)$/;

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
  const base64 = await convertBase64(file);
  tmpimagen.src = base64;
  textArea.innerText = base64;
};

input.addEventListener("change", (e) => {
  uploadImage(e);
});

btnEnviar.addEventListener("click", function (event) {
  event.preventDefault();
  let validos = 0;
  alertaValidaciones.innerHTML = "";
  if (
    txtNombre.value.match(nombreRegex) != null &&
    txtDescripcion.value.length < 150
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

  // LISTO MENSAJE
  txtDescripcion.value.trim().replaceAll("  ", "");
  if (txtDescripcion.value.length < 10) {
    alertaValidaciones.style.display = "block";
    alertaValidaciones.innerHTML += `<li>El mensaje debe contener 10 carácteres como mínimo</li>`;
    txtDescripcion.style.border = "solid red 5px";
  } else {
    txtDescripcion.style.border = "solid green 5px";
    validos++;
    
  }

  if (txtDescripcion.value.length === 0){
    alertaValidaciones.style.display = "block";
    alertaValidaciones.innerHTML += `<li>El mensaje no puede estar vacio</li>`;
    txtDescripcion.style.border = "solid red 5px";
}



  if (idTimeout != undefined && idTimeout != null) {
    clearTimeout(idTimeout);
  }

  if (validos == 2) {
    idTimeout = setTimeout(function () {
      txtNombre.style.border = "";
      txtDescripcion.style.border = "";
    }, 2000);
  } //==4

  // const nombre = txtNombre.value;
  // const mensaje1 = txtDescripcion.value;
  // if (!nombre) return;
  // if (!mensaje1) return;
  // enviarcorreo(nombre, mensaje1);
  addItem(urlImg, txtNombre.value, txtDescripcion.value);
    setLocal(publicaciones);
    renderItem(publicaciones);
 
});

// function enviarcorreo(nombre, numero, correo, mensaje1) {
//   Email.send({
//     Host: "smtp.elasticemail.com",
//     Username: "empresaPetBook@gmail.com",
//     Password: "9F11527D0A8244A1E7FA577D4A0311747A63",
//     To: "empresaPetBook@gmail.com",
//     From: "empresaPetBook@gmail.com",
//     Subject: nombre,
//     Body: `Recibio un mensaje de ${nombre}, El mensaje es: ${mensaje1}, telefono:${numero} y correo ${correo}`,
//   }).then((message) => alert(message));
// }//btnenviar


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

function obtenerLocalStorage(){
let publicacion = localStorage.getItem("publicaciones")
if (!publicacion) return;
  publicaciones = JSON.parse(publicacion);
  console.log(publicaciones);
}
  obtenerLocalStorage();
  window.addEventListener("load", () =>{
    obtenerLocalStorage();
    renderItem(publicaciones);
  }) 





/* btnAgregar.addEventListener("click", function (event) {
  event.preventDefault();
  addItem("urlPrueba", "nombre", "description jajaja");
  setLocal(publicaciones);
  renderItem(publicaciones); */

  // addItem({
  //   name: "chems",
  //   img: "https://www.fotosdememes.com/wp-content/uploads/2021/09/no-puede-ser-1024x597.jpg",
  //   description:
  //     "Chems es mi favorito, me recuerda que cualquier momento puede ser memeable",
  // });

  // addItem({
  //   name: "Día en la playa",
  //   img: "https://soyunperro.com/wp-content/uploads/2019/07/perros-con-su-due%C3%B1a-en-la-playa.jpg",
  //   description:
  //     "Hoy me fui a Acapulco con Miranda y Toby. Nos divertimos mucho nadando y atrapando la pelota",
  // });

  // addItem({
  //   name: "Hace frijol",
  //   img: "https://www.championcat.cl/wp-content/uploads/2019/09/1-gato-invierno.jpg",
  //   description:
  //     "Estamos a 2° grados aquí en el pueblo. Lo bueno que Karla me preparó un cafecito",
  // });

  // addItem({
  //   name: "Caes mal",
  //   img: "https://planb.mx/wp-content/uploads/2022/05/nAaUSaJA_400x400.jpg",
  //   description:
  //     "Perrito que nos hace recordar que siempre puede existir alguien imprudente",
  // });

  // addItem({
  //   name: "Pose",
  //   img: "https://imagenes.planb.mx/uploads/2022/05/la_jungla_-_social_299733479_73843953_1706x1280-768x576.jpg",
  //   description: "Siempre es un buen momento para posar y ser admirado",
  // });

  // addItem({
  //   name: "aqui con el solovino",
  //   img: "https://scontent.fmex28-1.fna.fbcdn.net/v/t39.30808-6/308594611_177194494829074_1341185002340635843_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=njBPsfNvUw8AX8jsG_w&_nc_ht=scontent.fmex28-1.fna&oh=00_AfDlJ4M8QRJPjQk6GXSpT1NfcwMPwThHRsnJzCDGdxpEcA&oe=63B788BC",
  //   description: "mas que mi amigo eres mi brother",
  // });

  // addItem({
  //   name: "ya se la saben",
  //   img: "https://i.pinimg.com/236x/2f/36/86/2f36863ace484e30b40aa9e58b562897.jpg",
  //   description:
  //     "camara hijos de su canina madre, croquetas y collares primero",
  // });

  // addItem({
  //   name: "Moda Canina",
  //   img: "https://www.zotal.com/wp-content/uploads/2020/07/perrosfamososig7.png",
  //   description: "Estaré subiendo actualizaciones de moda para perritos.",
  // });

  // addItem({
  //   name: "Heroes perrunos",
  //   img: "https://www.elsoldedurango.com.mx/doble-via/sueqc9-frida-la-perrita.jpg/ALTERNATES/LANDSCAPE_768/Frida%20la%20perrita.jpg",
  //   description: "Nunca es tardé para recordar a los perritos que son heroes.",
  // });
  // addItem({
  //   name: "Heroes perrunos 2",
  //   img: "https://www.elsoldedurango.com.mx/doble-via/sueqc9-frida-la-perrita.jpg/ALTERNATES/LANDSCAPE_768/Frida%20la%20perrita.jpg",
  //   description:
  //     "Nunca es tardé para recordar a los perritos que son heroes y heroinas.",
  // });
  // addItem({
  //   name: "Heroes perrunos 3",
  //   img: "https://www.elsoldedurango.com.mx/doble-via/sueqc9-frida-la-perrita.jpg/ALTERNATES/LANDSCAPE_768/Frida%20la%20perrita.jpg",
  //   description:
  //     "Nunca es tardé para recordar a los perritos que son heroes y heroinas.",
  // });
//});

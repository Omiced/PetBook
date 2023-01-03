let btnAgregar = document.getElementById("btnAgregar");

function addItem(item) {
  const itemHTML =
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
    "<br/>";
  const itemsContainer = document.getElementById("body");
  itemsContainer.innerHTML += itemHTML;
}
btnAgregar.addEventListener("click", function (event) {
  event.preventDefault();
  addItem({
    name: "Unos pedillos",
    img: "https://lasillarotarm.blob.core.windows.net.optimalcdn.com/images/2022/07/21/5fqkncookngyviukyrmlslzmoy-e7877137-focus-0.01-0.24-640-384.jpg",
    description:
      "El perrito viral que nos hace recordar que la vida no siempre es tan feli",
  });

  addItem({
    name: "chems",
    img: "https://www.fotosdememes.com/wp-content/uploads/2021/09/no-puede-ser-1024x597.jpg",
    description:
      "Chems es mi favorito, me recuerda que cualquier momento puede ser memeable",
  });

  addItem({
    name: "Día en la playa",
    img: "https://soyunperro.com/wp-content/uploads/2019/07/perros-con-su-due%C3%B1a-en-la-playa.jpg",
    description:
      "Hoy me fui a Acapulco con Miranda y Toby. Nos divertimos mucho nadando y atrapando la pelota",
  });

  addItem({
    name: "Hace frijol",
    img: "https://www.championcat.cl/wp-content/uploads/2019/09/1-gato-invierno.jpg",
    description:
      "Estamos a 2° grados aquí en el pueblo. Lo bueno que Karla me preparó un cafecito",
  });

  addItem({
    name: "Caes mal",
    img: "https://planb.mx/wp-content/uploads/2022/05/nAaUSaJA_400x400.jpg",
    description:
      "Perrito que nos hace recordar que siempre puede existir alguien imprudente",
  });

  addItem({
    name: "Pose",
    img: "https://imagenes.planb.mx/uploads/2022/05/la_jungla_-_social_299733479_73843953_1706x1280-768x576.jpg",
    description: "Siempre es un buen momento para posar y ser admirado",
  });

  addItem({
    name: "aqui con el solovino",
    img: "https://scontent.fmex28-1.fna.fbcdn.net/v/t39.30808-6/308594611_177194494829074_1341185002340635843_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=njBPsfNvUw8AX8jsG_w&_nc_ht=scontent.fmex28-1.fna&oh=00_AfDlJ4M8QRJPjQk6GXSpT1NfcwMPwThHRsnJzCDGdxpEcA&oe=63B788BC",
    description: "mas que mi amigo eres mi brother",
  });

  addItem({
    name: "ya se la saben",
    img: "https://i.pinimg.com/236x/2f/36/86/2f36863ace484e30b40aa9e58b562897.jpg",
    description:
      "camara hijos de su canina madre, croquetas y collares primero",
  });

  addItem({
    name: "Moda Canina",
    img: "https://www.zotal.com/wp-content/uploads/2020/07/perrosfamososig7.png",
    description: "Estaré subiendo actualizaciones de moda para perritos.",
  });

  addItem({
    name: "Heroes perrunos",
    img: "https://www.elsoldedurango.com.mx/doble-via/sueqc9-frida-la-perrita.jpg/ALTERNATES/LANDSCAPE_768/Frida%20la%20perrita.jpg",
    description: "Nunca es tardé para recordar a los perritos que son heroes.",
  });
  addItem({
    name: "Heroes perrunos 2",
    img: "https://www.elsoldedurango.com.mx/doble-via/sueqc9-frida-la-perrita.jpg/ALTERNATES/LANDSCAPE_768/Frida%20la%20perrita.jpg",
    description:
      "Nunca es tardé para recordar a los perritos que son heroes y heroinas.",
  });
  addItem({
    name: "Heroes perrunos 3",
    img: "https://www.elsoldedurango.com.mx/doble-via/sueqc9-frida-la-perrita.jpg/ALTERNATES/LANDSCAPE_768/Frida%20la%20perrita.jpg",
    description:
      "Nunca es tardé para recordar a los perritos que son heroes y heroinas.",
  });
});

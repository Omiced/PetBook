let btnAgregar = document.getElementById("btnAgregar");



btnAgregar.addEventListener("click", function(event){
event.preventDefault();
function addItem(item){
    const itemHTML = '<div class="card" style="width: 18rem;">\n' +
        '    <img src="'+item.img +'" class="card-img-top" alt="image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.name+'</h5>\n' +
        '        <p class="card-text">'+item.description+'</p>\n' +
        '        <a href="#" class="btn btn-primary">Me gusta</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '<br/>';
    const itemsContainer = document.getElementById("body");
    itemsContainer.innerHTML += itemHTML;
}

addItem({'name':'Unos pedillos',
    'img':'https://lasillarotarm.blob.core.windows.net.optimalcdn.com/images/2022/07/21/5fqkncookngyviukyrmlslzmoy-e7877137-focus-0.01-0.24-640-384.jpg',
    'description':'El perrito viral que nos hace recordar que la vida no siempre es tan feli'});

addItem({'name':'chems',
    'img':'https://www.fotosdememes.com/wp-content/uploads/2021/09/no-puede-ser-1024x597.jpg',
    'description':'Chems es mi favorito, me recuerda que cualquier momento puede ser memeable'})

addItem({'name':'Día en la playa',
    'img':'https://soyunperro.com/wp-content/uploads/2019/07/perros-con-su-due%C3%B1a-en-la-playa.jpg',
    'description':'Hoy me fui a Acapulco con Miranda y Toby. Nos divertimos mucho nadando y atrapando la pelota'})

addItem({'name':'Hace frijol',
    'img':'https://www.championcat.cl/wp-content/uploads/2019/09/1-gato-invierno.jpg',
    'description':'Estamos a 2° grados aquí en el pueblo. Lo bueno que Karla me preparó un cafecito'})






});
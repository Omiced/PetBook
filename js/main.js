let btnEnviar = document.getElementById("btnEnviar")
let txtNombre = document.getElementById("nombre");
let numeroTel = document.getElementById("numeroTel")
let inputEmail = document.getElementById("inputEmail")
let alertaValidacionesTexto= document.getElementById ("alertaValidacionesTexto")
let alertaValidaciones = document.getElementById ("alertaValidaciones")


//Expresiones Regulares - REGEX
let numeroRegex = /^[0-9]{10}$/;
let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


let lista ="<ul>"


function validarNombre() {
    return (txtNombre.value.length>2)?true:false;
}

function validarNumero(){
    if(numeroTel == null){
        return true
    }
    return false
}


function validarEmail(){
    if(inputEmail == null){
        return true;
    }
    return false;
}



btnEnviar.addEventListener ("click", function (event) {
    event.preventDefault();

    if (!validarNombre()){
        txtNombre.style.border = "red thin solid"
        lista += "<li>Se debe escribir un nombre válido</li>"
    }
    
    if(!validarNumero()){
        numeroTel.style.border = "red thin solid"
        lista += "<li>Escribe un número válido. Debe contener 10 dítitos en total</li>"
    }

    if(!validarEmail()){
        numeroTel.style.border = "red thin solid"
        lista += "<li>El correo debe ser válido</li>"
    }


    // txtNombre.style.border ="";
    alertaValidaciones.style.display= "none"
    lista += "</ul>"
    alertaValidacionesTexto.insertAdjacentHTML("beforeend", lista)
    alertaValidaciones.style.display = "block";
        idTimeOut =setTimeout (function(){
            alertaValidaciones.style.display= "none";
            alertaValidacionesTexto.innerHTML="";
        },5000);
        return false;


})



txtNombre.addEventListener("blur",function (event) {
    event.preventDefault
    txtNombre.value= txtNombre.value.trim();
})


numeroTel.addEventListener("blur", function(event){
    event.preventDefault
    numeroTel.value = numeroTel.value.trim();
})


inputEmail.addEventListener("blur", function(event){
    event.preventDefault
    inputEmail.value = inputEmail.value.trim();
})


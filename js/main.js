let btnEnviar = document.getElementById("btnEnviar")
let txtNombre = document.getElementById("nombre");
let numeroTel = document.getElementById("numeroTel")
let inputEmail = document.getElementById("inputEmail")
let alertaValidacionesTexto= document.getElementById ("alertaValidacionesTexto")
let alertaValidaciones = document.getElementById ("alertaValidaciones")
let mensajeEl = document.getElementById("exampleFormControlTextarea1");


//Expresiones Regulares - REGEX
let numeroRegex = /^[0-9]{10}$/;
let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let lista ="<ul>"


function mensaje(){
if (mensajeEl.value.length>100){
return false}
mensajeEl.value = mensajeEl.value.replaceAll("  ","");
return true
}



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
    if (!mensaje()){
        mensajeEl.style.border = "red thin solid"
        lista += "<li>El mensaje de solo contener 100 caracteres</li>" 
        
    }
    const nombre = txtNombre.value;
    const numero = numeroTel.value;
    const correo = inputEmail.value;
    const mensaje1 = mensajeEl.value;

    enviarcorreo(nombre,numero,correo,mensaje1);

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

        

}

)



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
}
 
)

function enviarcorreo(nombre,numero,correo,mensaje1){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "empresaPetBook@gmail.com",
        Password : "9F11527D0A8244A1E7FA577D4A0311747A63",
        To : 'empresaPetBook@gmail.com',
        From:correo,
        Subject:sujeto,
        Body : `${mensaje1}, telefono:${telefono} `,
    }).then(
      message => alert(message)
    );
} 


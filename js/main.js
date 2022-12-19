let btnEnviar = document.getElementById("btnEnviar")
let txtNombre = document.getElementById("nombre")
let alertaValidacionesTexto= document.getElementById ("alertaValidacionesTexto")
let alertaValidaciones = document.getElementById ("alertaValidaciones")
let lista ="<ul>"


function validarNombre() {
    return (txtNombre.value.length>2)?true:false;
}

btnEnviar.addEventListener ("click", function (event) {
    event.preventDefault();
   
    if (!validarNombre()){
        
        txtNombre.style.border = "red thin solid"
        lista += "<li>Se debe escribir un nombre válido</li>"
        
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

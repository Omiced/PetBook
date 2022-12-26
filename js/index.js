
 const formulario = document.getElementById("formularioIndex");
 const inputs = document.querySelectorAll("#formularioIndex input");
 
 const expresiones ={
 nombreRegex:  /^[a-zA-Z0-9À-ÿ\s]{1,40}$/,
 passwordRegex: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
 emailRegex: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
 }
 
 
 const validarFormulario = (e) => {
   switch(e.target.name){
     case "inputNombre":
       if (expresiones.nombreRegex.test(e.target.value)){
       
         document.getElementById('inputNombre').classList.remove('inputIncorrecto')
         document.getElementById('inputNombre').classList.add('inputCorrecto')
         document.querySelector('#grupoNombre .alert-danger').classList.remove('alert-danger-activo')
         return true
       } else {
         document.getElementById('inputNombre').classList.remove('inputCorrecto')
         document.getElementById('inputNombre').classList.add('inputIncorrecto')
         document.querySelector('#grupoNombre .alert-danger').classList.add('alert-danger-activo')
         return false
       }
     break;
     case "inputEmail":
       if (expresiones.emailRegex.test(e.target.value)){
       
         document.getElementById('inputEmail').classList.remove('inputIncorrecto')
         document.getElementById('inputEmail').classList.add('inputCorrecto')
         document.querySelector('#grupoEmail .alert-danger').classList.remove('alert-danger-activo')
         return true
       } else {
         document.getElementById('inputEmail').classList.remove('inputCorrecto')
         document.getElementById('inputEmail').classList.add('inputIncorrecto')
         document.querySelector('#grupoEmail .alert-danger').classList.add('alert-danger-activo')
         return false
       }
      break;
     case "inputPassword":
       if (expresiones.passwordRegex.test(e.target.value)){
       
         document.getElementById('inputPassword').classList.remove('inputIncorrecto')
         document.getElementById('inputPassword').classList.add('inputCorrecto')
        document.querySelector('#grupoPassword .alert-danger').classList.remove('alert-danger-activo')
         return true
       } else {
         document.getElementById('inputPassword').classList.remove('inputCorrecto')
         document.getElementById('inputPassword').classList.add('inputIncorrecto')
         document.querySelector('#grupoPassword .alert-danger').classList.add('alert-danger-activo')
         return false
       }
     break;
     case "inputPassword2":
       const inputPassword = document.getElementById('inputPassword');
       const inputPassword2 = document.getElementById('inputPassword2');
        if (inputPassword.value !== inputPassword2.value){
         document.getElementById('inputPassword2').classList.remove('inputCorrecto')
         document.getElementById('inputPassword2').classList.add('inputIncorrecto')
         document.querySelector('#grupoPassword2 .alert-danger').classList.add('alert-danger-activo')
         return false
        }else {
         document.getElementById('inputPassword2').classList.remove('inputIncorrecto')
         document.getElementById('inputPassword2').classList.add('inputCorrecto')
        document.querySelector('#grupoPassword2 .alert-danger').classList.remove('alert-danger-activo')
        return true
        }
       break;
   }//switchid
 }//validarFormulario
 
 
 
 inputs.forEach((input) => {
     input.addEventListener("keyup", validarFormulario );
     input.addEventListener("blur",  validarFormulario );
 });//inputs.forEach
 
 
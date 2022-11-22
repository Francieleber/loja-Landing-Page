let email =document.querySelector('#email')
let erroEmail = document.querySelector('#erroEmail')
let assunto = document.querySelector('#assunto')
let erroAssunto = document.querySelector('#erroAssunto')
let emailOk = false
let assuntoOk = false

function validaEmail(){
    if(email.value.indexOf('@')== -1 || email.value.indexOf('.')== -1){
        erroEmail.innerHTML = 'email incorreto'
    }else{
        erroEmail.innerHTML = ''
        emailOk=true
    }
    }
function validaAssunto(){
    if(assunto.value.length > 10){
        erroAssunto.innerHTML = 'limite extendido (limite de 10 caracteres)'
    } else{
        erroAssunto.innerHTML = ''
        assuntoOk= true
    }
}
function enviar() {
    if ( emailOk && assuntoOk) {
        alert('email enviado com sucesso')
    } else {
        alert('preencha as informacoes corretamente !')
    }
}

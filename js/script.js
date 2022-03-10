
//--- Botão Mostrar e Ocultar Senha ---//

const senha = document.querySelector('.senha');
const btneye = document.querySelector('.btn-eye');

btneye.onclick = () =>{
    if (senha.type === 'password') {
        senha.type = 'text'
        btneye.src = 'img/eye_show.png'
    } else {
        senha.type = 'password'
        btneye.src = 'img/eye_hide.png'
    }
}
let input1 = document.querySelector('.input-user')
let input2 = document.querySelector('.input-pass')
let btn = document.querySelector('.next-btn')

input1.addEventListener('input', validaLogin) 
input2.addEventListener('input', validaLogin)

function validaLogin(){
    if (input1.value != "" && input2.value.length >= 8) {
        btn.classList.add('next-btn--on')
    } else {
        btn.classList.remove('next-btn--on')
    }
}

validaLogin();

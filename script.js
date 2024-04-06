let botaoMenu = document.getElementById('botao-menu');
let menuLateral = document.getElementById('menu-lateral');
let escurecedor = document.getElementById('escurecedor');


botaoMenu.addEventListener('click', ()=>{
    menuLateral.classList.add('abrir-menu');
})

menuLateral.addEventListener('click', ()=>{
    menuLateral.classList.remove('abrir-menu');
})

escurecedor.addEventListener('click', ()=>{
    menuLateral.classList.remove('abrir-menu');
})
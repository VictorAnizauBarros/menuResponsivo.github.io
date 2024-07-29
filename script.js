//Declaração das Variáveis.
const btnMobileMenu = document.querySelector('#mobile_menu_button');
const mobileMenu = document.querySelector('.mobile-menu');
const icon = document.querySelector('.icon');

//Evento de "click" no botão. 
btnMobileMenu.addEventListener('click', ()=>{
    
    if(mobileMenu.classList.contains('open')){
        mobileMenu.classList.remove('open');
        icon.src = 'menu_white_36dp.svg'; 
    }else{
        mobileMenu.classList.add('open');
        icon.src = 'close_white_36dp.svg'; 
    }
})
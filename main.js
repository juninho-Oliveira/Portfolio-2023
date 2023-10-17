var menu = document.querySelector('nav ul');
var menuBar = document.querySelector('nav .menu-icon')
var IconeMenu = document.querySelector('nav .menu-icon img');

menuBar.addEventListener('click', function(){

    if (IconeMenu.getAttribute("src") == 'imagens/close.png') {
        IconeMenu.setAttribute("src", 'imagens/menu.png');
    }else {
        IconeMenu.setAttribute("src", 'imagens/close.png');
    }
    
    menu.classList.toggle('active');
})
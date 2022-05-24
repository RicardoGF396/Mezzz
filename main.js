//Cuando es en movil o tableta esta el icono hamburguesa

//Cuando esta en Escritorio NO se muestra el icono hamburguesa

const hamburger = document.getElementById('hamburguer');
const close = document.getElementById('close');
const menu = document.getElementById('menu_list');

hamburger.addEventListener('click', () => {
    menu.classList.add('animation_down')
})

close.addEventListener('click', () => {
    menu.classList.remove('animation_down')
})

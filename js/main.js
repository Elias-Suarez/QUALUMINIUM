const navMenu = document.querySelector('.menu');
const menu = document.querySelector('.nav-menu');

navMenu.addEventListener('click', ()=>{
    menu.classList.toggle('spread')
})

window.addEventListener('click',e=>{
    if (menu.classList.contains('spread')
        && e.target != menu 
        && e.target != navMenu) {
        menu.classList.toggle('spread')
    }
})



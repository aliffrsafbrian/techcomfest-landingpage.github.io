const menuToggle = document.querySelector('.header_icon input')
const navMenu = document.querySelector('.header_menu')


menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('onoCok')
    console.log('ono')
});
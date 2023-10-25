let menuIcon = document.getElementById('menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

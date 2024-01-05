burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
rightnav = document.querySelector('.right-nav');
navlist = document.querySelector('.nav-list');

burger.addEventListener('click', myFunction);

function myFunction() {
    rightnav.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-class-resp');
}

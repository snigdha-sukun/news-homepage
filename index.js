const menuHamburger = document.getElementById('menu_hamburger');
const closeMenu = document.getElementById('close_menu');
const nav_menu = document.getElementById('nav_menu');
const body = document.querySelector('body');

menuHamburger.addEventListener("click", () => {
    nav_menu.style.width = "250px";
    document.body.style.backgroundColor = "hsla(240 100% 5% / 0.4)";
});

closeMenu.addEventListener("click", () => {
    nav_menu.style.width = "0";
    document.body.style.backgroundColor = "hsl(36, 100%, 99%)";
});

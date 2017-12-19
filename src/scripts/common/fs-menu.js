//const getBurger = document.querySelector(".humburger-link");
//const menu = document.querySelector(".full-screen-menu");

document.querySelector(".humburger-link").addEventListener("click", burger);

function burger() {
    console.log('eee');
    document.querySelector(".humburger-link").classList.toggle("humburger-link--active");
    document.querySelector(".full-screen-menu").classList.toggle("full-screen-menu--active");
}
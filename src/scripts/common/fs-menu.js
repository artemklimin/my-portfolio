const getBurger = document.querySelector(".humburger-link");
const menu = document.querySelector(".full-screen-menu");
        
getBurger.addEventListener("click", burger());

function burger() {
    getBurger.classList.toggle("humburger-link--active");
    menu.classList.toggle("full-screen-menu--active");
}

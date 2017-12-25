const slides = document.querySelectorAll('#slides .slide');
const slides2 = document.querySelectorAll('#slides2 .slide2');
const slides3 = document.querySelectorAll('#slides3 .slide3');
const slideDescription = document.querySelectorAll('#slides-description .slide-description');
const next = document.getElementById('next');
const previous = document.getElementById('previous');
const controls = document.querySelectorAll('.controls');

let currentSlide = 0;
let currentSlide2 = 1;
let currentSlide3 = 2;

function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    slideDescription[currentSlide].className = 'slide-description';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = 'slide showing';
    slideDescription[currentSlide].className = 'slide-description showing';
}

function goToSlide2(n) {
    slides2[currentSlide2].className = 'slide2';
    currentSlide2 = (n + slides2.length) % slides2.length;
    slides2[currentSlide2].className = 'slide2 showing';
}

function goToSlide3(n) {
    slides3[currentSlide3].className = 'slide3';
    currentSlide3 = (n + slides3.length) % slides3.length;
    slides3[currentSlide3].className = 'slide3 showing';
}

function setupListners() {
    next.onclick = function() {
        goToSlide(currentSlide + 1);
        goToSlide2(currentSlide2 + 1);
        goToSlide3(currentSlide3 + 1);
    }
    previous.onclick = function() {
        goToSlide(currentSlide - 1);
        goToSlide2(currentSlide2 - 1);
        goToSlide3(currentSlide3 - 1);
    }
}

function showButtons() {
    for (var i = 0; i < controls.length; i++) {
        controls[i].style.display = 'flex'
    }
}

function sliderInit() {
    if (slides.length !== 0 && slides2.length !== 0 && slides3.length !== 0) {
        setupListners();
        showButtons();
    }
}

module.exports = sliderInit;
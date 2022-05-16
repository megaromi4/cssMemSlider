const images = document.querySelectorAll('.image');
const sliderLine = document.querySelector('.slider-line');
let width;
let slideIndex;

function init() {
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

init();
window.addEventListener('resize', init);

function currentSlide(n) {
    slideIndex = n - 1;
    let dots = document.querySelectorAll(".dots_item");
    let comment = document.querySelector(".comment")

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex].className += " active";
    rollSlider()
    comment.classList.remove("run-animation");
    void comment.offsetWidth;
    comment.classList.add("run-animation");
    if (n == 1) {
        comment.innerHTML = 'Засиделся на работе';
    }
    if (n == 2) {
        comment.innerHTML = 'Дельный совет от деда';
    }
    if (n == 3) {
        comment.innerHTML = 'HR на минималках';
    }
    if (n == 4) {
        comment.innerHTML = 'Помощь никогда не повредит';
    }
}

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + slideIndex * width + 'px)';
}


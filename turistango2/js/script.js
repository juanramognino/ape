
    document.addEventListener('DOMContentLoaded', function() {
        const hamburger = document.getElementById('hamburger');
        const header = document.querySelector('header');

        hamburger.addEventListener('click', () => {
            header.classList.toggle('nav-open');  // Añadir o quitar la clase 'nav-open' al header
            hamburger.classList.toggle('active'); // Cambiar el estilo de la hamburguesa
        });
    });


// Carrusel para la sección 'Top Destinos'
const images = document.querySelectorAll('.carousel-image');
const carouselWrapper = document.querySelector('.carousel-wrapper');
let currentIndex = 0;

function updateCarousel() {
    carouselWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

document.querySelector('.carousel-btn-left').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
});

document.querySelector('.carousel-btn-right').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
});

updateCarousel();

    document.addEventListener('DOMContentLoaded', function() {
        const hamburger = document.getElementById('hamburger');
        const header = document.querySelector('header');

        hamburger.addEventListener('click', () => {
            header.classList.toggle('nav-open');  // Añadir o quitar la clase 'nav-open' al header
            hamburger.classList.toggle('active'); // Cambiar el estilo de la hamburguesa
        });
    });



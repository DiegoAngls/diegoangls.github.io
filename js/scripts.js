document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('.main-content .section');
    const footer = document.getElementById('footer');
    const logo = document.querySelector('.logo');
    
    // Función para ocultar todas las secciones
    function hideAllSections() {
        sections.forEach(section => {
            section.style.display = 'none';
        });
    }

    // Función para mostrar la sección correspondiente y el footer
    function showSection(sectionId) {
        hideAllSections();
        
        const section = document.getElementById(sectionId);
        if (section) {
            section.style.display = 'block';
        }
        footer.style.display = 'block';
    }

    // Agrega el evento de clic a cada enlace de navegación
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const sectionId = link.getAttribute('data-section');
            showSection(sectionId);

            // Cerrar el menú hamburguesa al hacer clic en un enlace
            const sidebar = document.querySelector('#sidebar');
            sidebar.classList.remove('open');
        });
    });

    // Agrega el evento de clic al logo para redirigir a la sección "home"
    if (logo) {
        logo.addEventListener('click', (event) => {
            event.preventDefault();
            showSection('home');
            document.getElementById('home').scrollIntoView({ behavior: 'smooth' });

            // Cerrar el menú hamburguesa al hacer clic en el logo
            const sidebar = document.querySelector('#sidebar');
            sidebar.classList.remove('open');
        });
    }

    // Mostrar la sección "home" por defecto al cargar la página
    showSection('home');

    // **Menu hamburguesa en pantallas pequeñas**
    const menuToggle = document.querySelector('#menuToggle');
    const sidebar = document.querySelector('#sidebar');


    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('open');
        });
    } else {
        console.error('menuToggle o sidebar no están presentes en el DOM.');
    }
});

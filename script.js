document.addEventListener('DOMContentLoaded', () => {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    item.addEventListener('click', () => {
      // Si el elemento ya está abierto, no hacemos nada
      if (item.classList.contains('active')) return;

      // Quitamos la clase 'active' a la tarjeta que esté abierta
      accordionItems.forEach(i => i.classList.remove('active'));

      // Añadimos la clase 'active' a la tarjeta clickeada para expandirla
      item.classList.add('active');
    });
  });
});

// --- DETECCION DE SECCIÓN ACTIVA AL HACER SCROLL (SCROLLSPY) ---
const sections = document.querySelectorAll('.content-section');
const navLinks = document.querySelectorAll('nav.navbar a');

const observerOptions = {
  root: null, // Usa el viewport del navegador
  rootMargin: '-20% 0px -60% 0px', // Activa el cambio cuando la sección ocupe la zona central
  threshold: 0
};

const observerCallback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Obtenemos el ID de la sección actualmente visible
      const id = entry.target.getAttribute('id');
      
      // Removemos la clase active de todos los enlaces del menú
      navLinks.forEach(link => {
        link.classList.remove('active');
        // Si el href coincide con el ID de la sección, le añadimos active
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
};

// Inicializamos el observador para vigilar cada sección de contenido
const observer = new IntersectionObserver(observerCallback, observerOptions);
sections.forEach(section => observer.observe(section));
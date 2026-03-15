// Scroll suave para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))?.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Navbar cambia cuando el hero deja de ser visible (considerando header fijo)
const header = document.querySelector('.header');

function updateHeader() {
  if (!header) return;

  if (window.scrollY === 0) {
    header.classList.remove('scrolled');
  } else {
    header.classList.add('scrolled');
  }
}

window.addEventListener('scroll', updateHeader);
window.addEventListener('load', updateHeader);

// Año automático en el footer
document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

// Navbar responsive
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // Cierra el menú al hacer click en un link
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {

  const track = document.querySelector('.projects-track');
  const nextBtn = document.querySelector('.carousel-btn.next');
  const prevBtn = document.querySelector('.carousel-btn.prev');

  if (!track || !nextBtn || !prevBtn) return;

  const gap = 24;

  function getCardWidth() {
    const card = document.querySelector('.project-card');
    return card.offsetWidth + gap;
  }

  nextBtn.addEventListener('click', () => {
    track.scrollBy({
      left: getCardWidth(),
      behavior: 'smooth'
    });
  });

  prevBtn.addEventListener('click', () => {
    track.scrollBy({
      left: -getCardWidth(),
      behavior: 'smooth'
    });
  });

});

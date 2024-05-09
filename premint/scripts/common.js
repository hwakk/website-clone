const header = document.querySelector('header');
const logo = document.querySelector('#headerLogo');
const scrollTop = document.querySelector('#scrollTop');

// Change header background on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    if (header.classList.contains('scrolled')) return;
    header.classList.add('scrolled');
    logo.src = '/premint/images/logo.png';
  } else {
    if (!header.classList.contains('scrolled')) return;
    header.classList.remove('scrolled');
    logo.src = '/premint/images/logo_white.png';
  }
});

// Scroll to top
scrollTop.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
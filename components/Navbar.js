import { t, getLang, setLang } from '../utils/i18n.js';

export default function Navbar() {
  const render = () => {
    const currentLang = getLang();
    const toggleLabel = currentLang === 'en' ? '\u0627\u0644\u0639\u0631\u0628\u064A\u0629' : 'English';

    return `
      <nav class="navbar" id="navbar">
        <div class="container">
          <div class="nav-logo" style="display:none">
            <div class="nav-logo-icon" aria-hidden="true">&#9986;</div>
            Blade <span style="color:var(--white);">&amp; Co</span>
          </div>
          <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation menu" type="button">
            <i class="fas fa-bars" aria-hidden="true"></i>
          </button>
          <div class="nav-links" id="navLinks" role="navigation">
            <a href="#services">${t('nav.services')}</a>
            <a href="#barbers">${t('nav.ourBarbers')}</a>
            <a href="#gallery">${t('nav.gallery')}</a>
            <a href="#testimonials">${t('nav.reviews')}</a>
            <a href="#contact">${t('nav.contact')}</a>
            <button class="lang-toggle" id="langToggle" type="button">${toggleLabel}</button>
            <a href="#booking" class="nav-cta">${t('nav.reserveSlot')}</a>
          </div>
        </div>
      </nav>
    `;
  };

  const afterRender = () => {
    const navbar = document.getElementById('navbar');
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    const langToggle = document.getElementById('langToggle');

    const onScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      toggle.querySelector('i').className = isOpen ? 'fas fa-times' : 'fas fa-bars';
      toggle.setAttribute('aria-expanded', isOpen);
    });

    if (langToggle) {
      langToggle.addEventListener('click', () => {
        const newLang = getLang() === 'en' ? 'ar' : 'en';
        setLang(newLang);
      });
    }

    links.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.querySelector('i').className = 'fas fa-bars';
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  };

  return { render, afterRender };
}

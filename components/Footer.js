import { t } from '../utils/i18n.js';

export default function Footer() {
  const render = () => {
    const year = new Date().getFullYear();

    return `
      <footer class="footer">
        <div class="container">
          <div class="footer-content">
            <div class="footer-logo">
              <div class="nav-logo-icon" aria-hidden="true">&#9986;</div>
              Blade &amp; Co
            </div>
            <div class="footer-links">
              <a href="#services">${t('nav.services')}</a>
              <a href="#gallery">${t('nav.gallery')}</a>
              <a href="#testimonials">${t('nav.reviews')}</a>
              <a href="#booking">${t('nav.reserveSlot')}</a>
              <a href="#contact">${t('nav.contact')}</a>
            </div>
            <div class="footer-social">
              <a href="https://wa.me/96590000000" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i class="fab fa-whatsapp" aria-hidden="true"></i>
              </a>
              <a href="https://instagram.com/bladeandco" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i class="fab fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="https://linkedin.com/company/bladeandco" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i class="fab fa-linkedin-in" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <div class="footer-bottom">
            &copy; ${year} <a href="#">Blade &amp; Co</a>. ${t('footer.tagline')}
          </div>
        </div>
      </footer>
    `;
  };

  return { render, afterRender: () => {} };
}

import { t, getLang } from '../utils/i18n.js';
import { observeFadeElements } from '../utils/observe.js';

export default function Contact() {
  const render = () => {
    const methods = t('contact.methods');
    const hours = t('contact.hours');

    return `
      <section class="contact" id="contact">
        <div class="container">
          <div class="section-header">
            <span class="section-label">${t('contact.label')}</span>
            <h2 class="section-title">${t('contact.title')}</h2>
            <p class="section-subtitle">${t('contact.subtitle')}</p>
          </div>
          <div class="contact-wrapper">
            <div class="contact-left fade-in">
              <h2>${t('contact.leftTitle')}</h2>
              <p>${t('contact.leftText')}</p>
              <div class="contact-methods">
                <a href="https://wa.me/96590000000" target="_blank" rel="noopener noreferrer" class="contact-method">
                  <div class="contact-method-icon whatsapp" aria-hidden="true">
                    <i class="fab fa-whatsapp"></i>
                  </div>
                  <div class="contact-method-info">
                    <h4>${methods[0].name}</h4>
                    <p>${methods[0].desc}</p>
                  </div>
                </a>
                <a href="https://instagram.com/bladeandco" target="_blank" rel="noopener noreferrer" class="contact-method">
                  <div class="contact-method-icon instagram" aria-hidden="true">
                    <i class="fab fa-instagram"></i>
                  </div>
                  <div class="contact-method-info">
                    <h4>${methods[1].name}</h4>
                    <p>${methods[1].desc}</p>
                  </div>
                </a>
                <a href="https://linkedin.com/company/bladeandco" target="_blank" rel="noopener noreferrer" class="contact-method">
                  <div class="contact-method-icon linkedin" aria-hidden="true">
                    <i class="fab fa-linkedin-in"></i>
                  </div>
                  <div class="contact-method-info">
                    <h4>${methods[2].name}</h4>
                    <p>${methods[2].desc}</p>
                  </div>
                </a>
              </div>
            </div>
            <div class="contact-card fade-in">
              <i class="fas fa-cut" aria-hidden="true"></i>
              <h3>${t('contact.cardTitle')}</h3>
              <p>
                ${hours[0]}<br />
                ${hours[1]}<br />
                <small style="color:var(--gray-400);">${hours[2]}</small>
              </p>
              <a href="https://wa.me/96590000000" target="_blank" rel="noopener noreferrer" class="btn-primary">
                <i class="fab fa-whatsapp" aria-hidden="true"></i>
                ${t('contact.cta')}
              </a>
            </div>
          </div>
        </div>
      </section>
    `;
  };

  const afterRender = () => {
    observeFadeElements();
  };

  return { render, afterRender };
}

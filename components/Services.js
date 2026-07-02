import { services } from '../data/services.js';
import { t, tr } from '../utils/i18n.js';
import { observeFadeElements } from '../utils/observe.js';

export default function Services() {
  const render = () => {
    const cards = services.map(s => `
      <div class="service-card fade-in">
        <img
          src="${s.image}"
          alt="${tr(s, 'name')}"
          class="service-card-image"
          loading="lazy"
        />
        <div class="service-card-body">
          <span class="service-card-category">${s.category}</span>
          <h3>${tr(s, 'name')}</h3>
          <p>${tr(s, 'description')}</p>
          <div class="service-card-footer">
            <span class="service-price">${s.price}</span>
            <span class="service-duration">
              <i class="far fa-clock" aria-hidden="true"></i>
              ${s.duration}
            </span>
          </div>
        </div>
      </div>
    `).join('');

    return `
      <section class="services" id="services">
        <div class="container">
          <div class="section-header">
            <span class="section-label">${t('services.label')}</span>
            <h2 class="section-title">${t('services.title')}</h2>
            <p class="section-subtitle">${t('services.subtitle')}</p>
          </div>
          <div class="services-grid">
            ${cards}
          </div>
          <div class="services-cta fade-in">
            <p>${t('services.ctaHeadline')}</p>
            <a href="#booking" class="btn-primary">
              <i class="fas fa-calendar-check" aria-hidden="true"></i>
              ${t('services.ctaButton')}
            </a>
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

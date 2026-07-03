import { barbers } from '../data/barbers.js';
import { t, tr } from '../utils/i18n.js';
import { observeFadeElements } from '../utils/observe.js';

export default function BarberProfiles() {
  const render = () => {
    const cards = barbers.map(b => `
      <div class="barber-card fade-in">
        <div class="barber-image-wrapper">
          <img src="${b.image}" alt="${tr(b, 'name')}" loading="lazy" referrerpolicy="no-referrer" />
        </div>
        <div class="barber-info">
          <h3>${tr(b, 'name')}</h3>
          <div class="barber-specialty">${tr(b, 'specialty')}</div>
          <div class="barber-experience">
            <i class="fas fa-award" aria-hidden="true"></i>
            ${tr(b, 'experience')}
          </div>
          <p class="barber-bio">${tr(b, 'bio')}</p>
        </div>
      </div>
    `).join('');

    return `
      <section class="barbers" id="barbers">
        <div class="container">
          <div class="section-header">
            <span class="section-label">${t('barbers.label')}</span>
            <h2 class="section-title">${t('barbers.title')}</h2>
            <p class="section-subtitle">${t('barbers.subtitle')}</p>
          </div>
          <div class="barbers-grid">
            ${cards}
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

import { testimonials } from '../data/testimonials.js';
import { t, tr } from '../utils/i18n.js';
import { observeFadeElements } from '../utils/observe.js';

function getInitials(name) {
  return name.split(' ').map(n => n[0]).join('');
}

function renderStars(rating) {
  return Array.from({ length: rating }, () => '<i class="fas fa-star"></i>').join('');
}

export default function Testimonials() {
  const render = () => {
    const cards = testimonials.map(tm => `
      <div class="testimonial-card fade-in">
        <div class="testimonial-stars" aria-label="${tm.rating} out of 5 stars">
          ${renderStars(tm.rating)}
        </div>
        <p class="testimonial-text">&ldquo;${tr(tm, 'text')}&rdquo;</p>
        <div class="testimonial-author">
          <div class="testimonial-avatar" aria-hidden="true">${getInitials(tr(tm, 'name'))}</div>
          <div>
            <div class="testimonial-name">${tr(tm, 'name')}</div>
            <div class="testimonial-location">${tr(tm, 'location')}</div>
          </div>
        </div>
      </div>
    `).join('');

    return `
      <section class="testimonials" id="testimonials">
        <div class="container">
          <div class="section-header">
            <span class="section-label">${t('testimonials.label')}</span>
            <h2 class="section-title">${t('testimonials.title')}</h2>
            <p class="section-subtitle">${t('testimonials.subtitle')}</p>
          </div>
          <div class="testimonials-grid">
            ${cards}
          </div>
          <div class="trust-badge">
            <i class="fas fa-check-circle" aria-hidden="true"></i>
            ${t('testimonials.trustBadge')}
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

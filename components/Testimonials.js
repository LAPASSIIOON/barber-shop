import { testimonials } from '../data/testimonials.js';
import { observeFadeElements } from '../utils/observe.js';

function getInitials(name) {
  return name.split(' ').map(n => n[0]).join('');
}

function renderStars(rating) {
  return Array.from({ length: rating }, () => '<i class="fas fa-star"></i>').join('');
}

export default function Testimonials() {
  const render = () => {
    const cards = testimonials.map(t => `
      <div class="testimonial-card fade-in">
        <div class="testimonial-stars" aria-label="${t.rating} out of 5 stars">
          ${renderStars(t.rating)}
        </div>
        <p class="testimonial-text">&ldquo;${t.text}&rdquo;</p>
        <div class="testimonial-author">
          <div class="testimonial-avatar" aria-hidden="true">${getInitials(t.name)}</div>
          <div>
            <div class="testimonial-name">${t.name}</div>
            <div class="testimonial-location">${t.location}</div>
          </div>
        </div>
      </div>
    `).join('');

    return `
      <section class="testimonials" id="testimonials">
        <div class="container">
          <div class="section-header">
            <span class="section-label">Testimonials</span>
            <h2 class="section-title">What Our Clients Say</h2>
            <p class="section-subtitle">
              Don't take our word for it &mdash; hear from the gentlemen who trust us
              with their look.
            </p>
          </div>
          <div class="testimonials-grid">
            ${cards}
          </div>
          <div class="trust-badge">
            <i class="fas fa-check-circle" aria-hidden="true"></i>
            Trusted by clients across Kuwait City, Salmiya &amp; Hawally
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

import { services } from '../data/services.js';
import { observeFadeElements } from '../utils/observe.js';

export default function Services() {
  const render = () => {
    const cards = services.map(s => `
      <div class="service-card fade-in">
        <img
          src="${s.image}"
          alt="${s.name} at Blade &amp; Co Barbershop"
          class="service-card-image"
          loading="lazy"
        />
        <div class="service-card-body">
          <span class="service-card-category">${s.category}</span>
          <h3>${s.name}</h3>
          <p>${s.description}</p>
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
            <span class="section-label">Our Services</span>
            <h2 class="section-title">Premium Grooming, <br>Tailored for You</h2>
            <p class="section-subtitle">
              From precision fades to royal shaves — every service is crafted
              with attention to detail and the finest products.
            </p>
          </div>
          <div class="services-grid">
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

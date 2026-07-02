import { barbers } from '../data/barbers.js';
import { observeFadeElements } from '../utils/observe.js';

export default function BarberProfiles() {
  const render = () => {
    const cards = barbers.map(b => `
      <div class="barber-card fade-in">
        <div class="barber-image-wrapper">
          <img src="${b.image}" alt="${b.name} - ${b.specialty}" loading="lazy" />
        </div>
        <div class="barber-info">
          <h3>${b.name}</h3>
          <div class="barber-specialty">${b.specialty}</div>
          <div class="barber-experience">
            <i class="fas fa-award" aria-hidden="true"></i>
            ${b.experience} experience
          </div>
          <p class="barber-bio">${b.bio}</p>
        </div>
      </div>
    `).join('');

    return `
      <section class="barbers" id="barbers">
        <div class="container">
          <div class="section-header">
            <span class="section-label">Our Team</span>
            <h2 class="section-title">Meet Your Barbers</h2>
            <p class="section-subtitle">
              Skilled professionals dedicated to giving you the perfect cut.
              Every barber brings years of experience and a unique specialty.
            </p>
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

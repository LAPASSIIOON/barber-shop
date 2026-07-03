import { t } from '../utils/i18n.js';
import HERO_IMAGES from '../data/images/hero-images.js';

export default function Hero() {
  const render = () => `
    <section class="hero" id="hero">
      <img
        src="${HERO_IMAGES.bg}"
        alt="Luxury barber shop interior"
        class="hero-bg"
        loading="eager"
        fetchpriority="high"
      />
      <div class="hero-overlay" aria-hidden="true"></div>
      <div class="container hero-content">
        <div class="hero-pain-hook">
          <i class="fas fa-exclamation-circle" aria-hidden="true"></i>
          ${t('hero.painHook')}
        </div>
        <div class="hero-badge">
          <i class="fas fa-cut" aria-hidden="true"></i>
          ${t('hero.badge')}
        </div>
        <h1 class="hero-title">${t('hero.title')}</h1>
        <p class="hero-subtitle">${t('hero.subtitle')}</p>
        <div class="hero-actions">
          <a href="#booking" class="btn-primary">
            <i class="fas fa-calendar-check" aria-hidden="true"></i>
            ${t('hero.ctaPrimary')}
          </a>
          <a href="#services" class="btn-outline">
            ${t('hero.ctaSecondary')}
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
          </a>
        </div>
        <div class="hero-stats">
          <div class="hero-stat">
            <h3>1,200+</h3>
            <p>${t('hero.stat1')}</p>
          </div>
          <div class="hero-stat">
            <h3>4.9</h3>
            <p>${t('hero.stat2')}</p>
          </div>
          <div class="hero-stat">
            <h3>6</h3>
            <p>${t('hero.stat3')}</p>
          </div>
        </div>
      </div>
      <div class="hero-scroll" aria-hidden="true">
        <i class="fas fa-chevron-down"></i>
      </div>
    </section>
  `;

  return { render, afterRender: () => {} };
}

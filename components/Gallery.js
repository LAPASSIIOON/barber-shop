import { galleryImages } from '../data/gallery.js';
import { t, tr } from '../utils/i18n.js';
import { observeFadeElements } from '../utils/observe.js';

export default function Gallery() {
  const render = () => {
    const items = galleryImages.map(img => `
      <div class="gallery-item fade-in">
        <img src="${img.src}" alt="${tr(img, 'alt')}" loading="lazy" referrerpolicy="no-referrer" />
        <div class="gallery-item-overlay">
          <span>${tr(img, 'title')}</span>
        </div>
      </div>
    `).join('');

    return `
      <section class="gallery" id="gallery">
        <div class="container">
          <div class="section-header">
            <span class="section-label">${t('gallery.label')}</span>
            <h2 class="section-title">${t('gallery.title')}</h2>
            <p class="section-subtitle">${t('gallery.subtitle')}</p>
          </div>
          <div class="gallery-grid">
            ${items}
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

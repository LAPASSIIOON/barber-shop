import { transformations } from '../data/transformations.js';
import { t, tr, getLang } from '../utils/i18n.js';
import { observeFadeElements } from '../utils/observe.js';

export default function BeforeAfter() {
  const render = () => {
    const cards = transformations.map(tfm => `
      <div class="transformation-card fade-in">
        <div class="transformation-badge">${t('transformations.label')}</div>
        <div class="transformation-image-wrapper">
          <img src="${tfm.image}" alt="${tr(tfm, 'title')}" loading="lazy" />
          <div class="transformation-overlay">
            <div class="transformation-label">
              <span class="transformation-before">${getLang() === 'ar' ? 'قبل' : 'BEFORE'}</span>
              <i class="fas fa-arrow-right" aria-hidden="true"></i>
              <span class="transformation-after">${getLang() === 'ar' ? 'بعد' : 'AFTER'}</span>
            </div>
          </div>
        </div>
        <div class="transformation-body">
          <h3>${tr(tfm, 'title')}</h3>
          <p>${tr(tfm, 'result')}</p>
        </div>
      </div>
    `).join('');

    return `
      <section class="transformations" id="transformations">
        <div class="container">
          <div class="section-header">
            <span class="section-label">${t('transformations.label')}</span>
            <h2 class="section-title">${t('transformations.title')}</h2>
            <p class="section-subtitle">${t('transformations.subtitle')}</p>
          </div>
          <div class="transformations-grid">
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


import { transformations } from '../data/transformations.js';
import { t, tr, getLang } from '../utils/i18n.js';
import { observeFadeElements } from '../utils/observe.js';

export default function BeforeAfter() {
  const render = () => {
    const cards = transformations.map(tfm => `
      <div class="transformation-card fade-in">
        <div class="transformation-badge">${t('transformations.label')}</div>
        <div class="transformation-images">
          <div class="transformation-image-wrapper">
            <img src="${tfm.before}" alt="${tr(tfm, 'title')} - ${getLang() === 'ar' ? 'قبل' : 'before'}" loading="lazy" onerror="this.onerror=null;this.parentElement.classList.add('img-failed');this.style.display='none'" />
            <div class="transformation-fallback" aria-hidden="true">
              ${tfm.icon || '<i class="fas fa-cut"></i>'}
            </div>
            <div class="transformation-label-${getLang() === 'ar' ? 'after' : 'before'}">${getLang() === 'ar' ? 'قبل' : 'BEFORE'}</div>
          </div>
          <div class="transformation-arrow">
            <i class="fas fa-long-arrow-alt-right" aria-hidden="true"></i>
          </div>
          <div class="transformation-image-wrapper">
            <img src="${tfm.after}" alt="${tr(tfm, 'title')} - ${getLang() === 'ar' ? 'بعد' : 'after'}" loading="lazy" onerror="this.onerror=null;this.parentElement.classList.add('img-failed');this.style.display='none'" />
            <div class="transformation-fallback" aria-hidden="true">
              ${tfm.icon || '<i class="fas fa-cut"></i>'}
            </div>
            <div class="transformation-label-${getLang() === 'ar' ? 'before' : 'after'}">${getLang() === 'ar' ? 'بعد' : 'AFTER'}</div>
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


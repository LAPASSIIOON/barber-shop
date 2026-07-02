import { t, getLang } from '../utils/i18n.js';
import { observeFadeElements } from '../utils/observe.js';

export default function BusinessPain() {
  const render = () => {
    const items = t('businessPain.items');
    const itemsList = Array.isArray(items)
      ? items.map(item => `
          <div class="pain-solution-item">
            <i class="fas fa-check" aria-hidden="true"></i>
            <span>${item}</span>
          </div>
        `).join('')
      : '';

    const metrics = t('businessPain.metrics');
    const metricsList = Array.isArray(metrics)
      ? metrics.map(m => `
          <div class="pain-metric">
            <h4>${m === 'Fewer No-Shows' || m === 'تقليل غياب' ? '40%' : m === 'More Bookings' || m === 'زيادة حجوز' ? '60%' : '24/7'}</h4>
            <p>${m}</p>
          </div>
        `).join('')
      : '';

    return `
      <section class="business-pain" id="business-pain">
        <div class="container">
          <div class="business-pain-wrapper">
            <div class="pain-left fade-in">
              <div class="pain-badge">
                <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
                ${t('businessPain.badge')}
              </div>
              <h2 class="pain-headline">${t('businessPain.headline')}</h2>
              <p class="pain-subtext">${t('businessPain.subtext')}</p>
              <div class="pain-solution-list">${itemsList}</div>
            </div>
            <div class="pain-right fade-in">
              <div class="pain-result-icon">
                <i class="fas fa-chart-line" aria-hidden="true"></i>
              </div>
              <h3>${t('businessPain.resultTitle')}</h3>
              <p>${t('businessPain.resultText')}</p>
              <div class="pain-metrics">${metricsList}</div>
              <a href="#booking" class="btn-primary">
                <i class="fas fa-calendar-check" aria-hidden="true"></i>
                ${t('businessPain.cta')}
              </a>
            </div>
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

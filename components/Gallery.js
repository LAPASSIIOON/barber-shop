import { galleryImages } from '../data/gallery.js';
import { observeFadeElements } from '../utils/observe.js';

export default function Gallery() {
  const render = () => {
    const items = galleryImages.map(img => `
      <div class="gallery-item fade-in">
        <img src="${img.src}" alt="${img.alt}" loading="lazy" />
        <div class="gallery-item-overlay">
          <span>${img.title}</span>
        </div>
      </div>
    `).join('');

    return `
      <section class="gallery" id="gallery">
        <div class="container">
          <div class="section-header">
            <span class="section-label">Our Work</span>
            <h2 class="section-title">Gallery</h2>
            <p class="section-subtitle">
              A look at our finest cuts, fades, and grooming transformations.
            </p>
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

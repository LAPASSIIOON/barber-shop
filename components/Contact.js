import { observeFadeElements } from '../utils/observe.js';

export default function Contact() {
  const render = () => `
    <section class="contact" id="contact">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Get In Touch</span>
          <h2 class="section-title">Connect With Us</h2>
          <p class="section-subtitle">
            Ready for a fresh look? Reach out on WhatsApp or follow us on social media.
          </p>
        </div>
        <div class="contact-wrapper">
          <div class="contact-left fade-in">
            <h2>Let's Talk Grooming</h2>
            <p>
              We're always happy to help with bookings, inquiries, or styling
              advice. Hit us up on WhatsApp for the fastest response.
            </p>
            <div class="contact-methods">
              <a href="https://wa.me/96590000000" target="_blank" rel="noopener noreferrer" class="contact-method">
                <div class="contact-method-icon whatsapp" aria-hidden="true">
                  <i class="fab fa-whatsapp"></i>
                </div>
                <div class="contact-method-info">
                  <h4>WhatsApp</h4>
                  <p>Quickest way to book &mdash; reply in under 5 min</p>
                </div>
              </a>
              <a href="https://instagram.com/bladeandco" target="_blank" rel="noopener noreferrer" class="contact-method">
                <div class="contact-method-icon instagram" aria-hidden="true">
                  <i class="fab fa-instagram"></i>
                </div>
                <div class="contact-method-info">
                  <h4>Instagram</h4>
                  <p>See our latest cuts &amp; styles</p>
                </div>
              </a>
              <a href="https://linkedin.com/company/bladeandco" target="_blank" rel="noopener noreferrer" class="contact-method">
                <div class="contact-method-icon linkedin" aria-hidden="true">
                  <i class="fab fa-linkedin-in"></i>
                </div>
                <div class="contact-method-info">
                  <h4>LinkedIn</h4>
                  <p>Follow our business journey</p>
                </div>
              </a>
            </div>
          </div>
          <div class="contact-card fade-in">
            <i class="fas fa-cut" aria-hidden="true"></i>
            <h3>Blade &amp; Co</h3>
            <p>
              Open Saturday &mdash; Thursday<br />
              9:00 AM &mdash; 10:00 PM<br />
              <small style="color:var(--gray-400);">Friday: Closed</small>
            </p>
            <a href="https://wa.me/96590000000" target="_blank" rel="noopener noreferrer" class="btn-primary">
              <i class="fab fa-whatsapp" aria-hidden="true"></i>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  `;

  const afterRender = () => {
    observeFadeElements();
  };

  return { render, afterRender };
}

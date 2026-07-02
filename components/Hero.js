export default function Hero() {
  const render = () => `
    <section class="hero" id="hero">
      <img
        src="https://images.unsplash.com/photo-1585747861115-8ddb1e57c1c5?w=1920&q=80"
        alt="Luxury barber shop interior with premium grooming stations"
        class="hero-bg"
        loading="eager"
        fetchpriority="high"
      />
      <div class="hero-overlay" aria-hidden="true"></div>
      <div class="container hero-content">
        <div class="hero-badge">
          <i class="fas fa-cut" aria-hidden="true"></i>
          Premium Barbershop since 2018
        </div>
        <h1 class="hero-title">
          Where <span class="highlight">Style</span> Meets
          <span class="highlight-cyan">Precision</span>
        </h1>
        <p class="hero-subtitle">
          Experience Kuwait's finest barbering. Expert cuts, premium beard grooming,
          and the hot towel ritual — all in a modern luxury setting.
        </p>
        <div class="hero-actions">
          <a href="#booking" class="btn-primary">
            <i class="fas fa-calendar-check" aria-hidden="true"></i>
            Reserve Your Slot
          </a>
          <a href="#services" class="btn-outline">
            Book in 30 Seconds
            <i class="fas fa-chevron-right" aria-hidden="true"></i>
          </a>
        </div>
        <div class="hero-stats">
          <div class="hero-stat">
            <h3>1,200+</h3>
            <p>Happy Clients</p>
          </div>
          <div class="hero-stat">
            <h3>4.9</h3>
            <p>Rating</p>
          </div>
          <div class="hero-stat">
            <h3>6</h3>
            <p>Expert Barbers</p>
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

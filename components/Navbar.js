export default function Navbar() {
  const render = () => `
    <nav class="navbar" id="navbar">
      <div class="container">
        <a href="#hero" class="nav-logo">
          <div class="nav-logo-icon" aria-hidden="true">&#9986;</div>
          Blade <span style="color:var(--white);">&amp; Co</span>
        </a>
        <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation menu" type="button">
          <i class="fas fa-bars" aria-hidden="true"></i>
        </button>
        <div class="nav-links" id="navLinks" role="navigation">
          <a href="#services">Services</a>
          <a href="#barbers">Our Barbers</a>
          <a href="#gallery">Gallery</a>
          <a href="#testimonials">Reviews</a>
          <a href="#contact">Contact</a>
          <a href="#booking" class="nav-cta">Reserve Your Slot</a>
        </div>
      </div>
    </nav>
  `;

  const afterRender = () => {
    const navbar = document.getElementById('navbar');
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');

    const onScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      toggle.querySelector('i').className = isOpen ? 'fas fa-times' : 'fas fa-bars';
      toggle.setAttribute('aria-expanded', isOpen);
    });

    links.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.querySelector('i').className = 'fas fa-bars';
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  };

  return { render, afterRender };
}

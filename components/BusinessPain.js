import { observeFadeElements } from '../utils/observe.js';

export default function BusinessPain() {
  const render = () => `
    <section class="business-pain" id="business-pain">
      <div class="container">
        <div class="business-pain-wrapper">
          <div class="pain-left fade-in">
            <div class="pain-badge">
              <i class="fas fa-exclamation-triangle" aria-hidden="true"></i>
              Common Problem
            </div>
            <h2 class="pain-headline">
              Losing appointments<br />
              through <span class="highlight-pain">calls and DMs</span>?
            </h2>
            <p class="pain-subtext">
              Let customers book instantly online and reduce scheduling chaos.
              Stop the back-and-forth and let your clients reserve their spot
              in seconds — any time, any device.
            </p>
            <div class="pain-solution-list">
              <div class="pain-solution-item">
                <i class="fas fa-check" aria-hidden="true"></i>
                <span>No more missed calls or forgotten voice notes</span>
              </div>
              <div class="pain-solution-item">
                <i class="fas fa-check" aria-hidden="true"></i>
                <span>Customers book 24/7 without bothering your staff</span>
              </div>
              <div class="pain-solution-item">
                <i class="fas fa-check" aria-hidden="true"></i>
                <span>Automated scheduling reduces no-shows by 40%</span>
              </div>
              <div class="pain-solution-item">
                <i class="fas fa-check" aria-hidden="true"></i>
                <span>Professional brand image that stands out from competitors</span>
              </div>
            </div>
          </div>
          <div class="pain-right fade-in">
            <div class="pain-result-icon">
              <i class="fas fa-chart-line" aria-hidden="true"></i>
            </div>
            <h3>What Our System Delivers</h3>
            <p>Real results from salons that switched to online booking.</p>
            <div class="pain-metrics">
              <div class="pain-metric">
                <h4>40%</h4>
                <p>Fewer No-Shows</p>
              </div>
              <div class="pain-metric">
                <h4>60%</h4>
                <p>More Bookings</p>
              </div>
              <div class="pain-metric">
                <h4>24/7</h4>
                <p>Availability</p>
              </div>
            </div>
            <a href="#booking" class="btn-primary">
              <i class="fas fa-calendar-check" aria-hidden="true"></i>
              Start Accepting Bookings
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

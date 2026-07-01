import { services } from '../data/services.js';
import { observeFadeElements } from '../utils/observe.js';

function validateForm(fields) {
  const errors = {};
  for (const [key, value] of Object.entries(fields)) {
    if (!value.trim()) {
      errors[key] = 'This field is required';
    }
  }
  return errors;
}

function showFieldError(id, message) {
  const field = document.getElementById(id);
  const errorEl = field?.parentElement?.querySelector('.error-text');
  if (field) field.classList.add('error');
  if (errorEl) {
    errorEl.textContent = message;
    errorEl.classList.add('show');
  }
}

function clearFieldError(id) {
  const field = document.getElementById(id);
  const errorEl = field?.parentElement?.querySelector('.error-text');
  if (field) field.classList.remove('error');
  if (errorEl) errorEl.classList.remove('show');
}

function clearAllErrors(fields) {
  Object.keys(fields).forEach(clearFieldError);
}

export default function BookingForm() {
  const render = () => {
    const serviceOptions = services.map(s => `
      <option value="${s.name}">${s.name} - ${s.price}</option>
    `).join('');

    const today = new Date().toISOString().split('T')[0];

    return `
      <section class="booking" id="booking">
        <div class="container">
          <div class="section-header">
            <span class="section-label">Book Online</span>
            <h2 class="section-title">Claim Your Spot</h2>
            <p class="section-subtitle">
              No queues, no waiting. Book your preferred time and we'll have
              everything ready for you.
            </p>
          </div>
          <div class="booking-wrapper">
            <div class="booking-info fade-in">
              <h2>Why Book Online?</h2>
              <p>
                Skip the wait and secure your preferred time slot. Our online
                booking system ensures you get served exactly when you arrive.
              </p>
              <div class="booking-features">
                <div class="booking-feature">
                  <i class="fas fa-clock" aria-hidden="true"></i>
                  <span>No waiting — walk in, sit down, get served</span>
                </div>
                <div class="booking-feature">
                  <i class="fas fa-user-check" aria-hidden="true"></i>
                  <span>Choose your preferred barber and service</span>
                </div>
                <div class="booking-feature">
                  <i class="fas fa-bell" aria-hidden="true"></i>
                  <span>Get SMS reminders before your appointment</span>
                </div>
                <div class="booking-feature">
                  <i class="fas fa-calendar-alt" aria-hidden="true"></i>
                  <span>Book 24/7 — any time, any device</span>
                </div>
              </div>
            </div>
            <div class="booking-form-container fade-in" id="bookingFormContainer">
              <div id="bookingForm">
                <h3>Reserve Your Session</h3>
                <div class="form-group">
                  <label for="bookName">Full Name</label>
                  <input type="text" id="bookName" placeholder="e.g. Ahmed Al-Rashid" required autocomplete="name" />
                  <span class="error-text"></span>
                </div>
                <div class="form-group">
                  <label for="bookPhone">Phone Number</label>
                  <input type="tel" id="bookPhone" placeholder="e.g. +965 9XXX XXXX" required autocomplete="tel" />
                  <span class="error-text"></span>
                </div>
                <div class="form-group">
                  <label for="bookService">Service</label>
                  <select id="bookService" required>
                    <option value="">Select a service</option>
                    ${serviceOptions}
                  </select>
                  <span class="error-text"></span>
                </div>
                <div class="form-row">
                  <div class="form-group">
                    <label for="bookDate">Date</label>
                    <input type="date" id="bookDate" min="${today}" required />
                    <span class="error-text"></span>
                  </div>
                  <div class="form-group">
                    <label for="bookTime">Preferred Time</label>
                    <input type="time" id="bookTime" required />
                    <span class="error-text"></span>
                  </div>
                </div>
                <button class="btn-primary" id="bookSubmit" type="button">
                  <i class="fas fa-calendar-check" aria-hidden="true"></i>
                  Confirm Booking
                </button>
              </div>
              <div class="booking-success" id="bookingSuccess">
                <i class="fas fa-check-circle" aria-hidden="true"></i>
                <h3>Booking Confirmed!</h3>
                <p>
                  Thank you! We've received your booking request. You'll receive
                  a confirmation call within 15 minutes.
                </p>
                <button class="btn-outline" id="bookAnother" type="button" style="margin-top:20px;">
                  <i class="fas fa-plus" aria-hidden="true"></i>
                  Book Another
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  };

  const afterRender = () => {
    const submitBtn = document.getElementById('bookSubmit');
    const form = document.getElementById('bookingForm');
    const success = document.getElementById('bookingSuccess');
    const bookAnother = document.getElementById('bookAnother');

    const fieldIds = {
      bookName: 'bookName',
      bookPhone: 'bookPhone',
      bookService: 'bookService',
      bookDate: 'bookDate',
      bookTime: 'bookTime'
    };

    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      clearAllErrors(fieldIds);

      const fields = {
        bookName: document.getElementById('bookName').value,
        bookPhone: document.getElementById('bookPhone').value,
        bookService: document.getElementById('bookService').value,
        bookDate: document.getElementById('bookDate').value,
        bookTime: document.getElementById('bookTime').value
      };

      const errors = validateForm(fields);

      if (Object.keys(errors).length > 0) {
        for (const [key, msg] of Object.entries(errors)) {
          showFieldError(key, msg);
        }
        return;
      }

      form.style.display = 'none';
      success.classList.add('show');
    });

    bookAnother.addEventListener('click', () => {
      Object.keys(fieldIds).forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
        clearFieldError(id);
      });
      success.classList.remove('show');
      form.style.display = 'block';
    });

    observeFadeElements();
  };

  return { render, afterRender };
}

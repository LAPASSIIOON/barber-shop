import { services } from '../data/services.js';
import { barbers } from '../data/barbers.js';
import { observeFadeElements } from '../utils/observe.js';

function generateTimeSlots() {
  const slots = [];
  for (let hour = 9; hour <= 20; hour++) {
    for (let min = 0; min < 60; min += 30) {
      const value = `${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}`;
      const hour12 = hour === 0 ? 12 : (hour > 12 ? hour - 12 : hour);
      const ampm = hour < 12 ? 'AM' : 'PM';
      const display = `${hour12}:${min.toString().padStart(2, '0')} ${ampm}`;
      slots.push({ value, display });
    }
  }
  return slots;
}

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
      <option value="${s.name}" data-duration="${s.durationMinutes}">${s.name} — ${s.price}</option>
    `).join('');

    const barberOptions = barbers.map(b => `
      <option value="${b.name}">${b.name} — ${b.specialty}</option>
    `).join('');

    const timeSlots = generateTimeSlots();
    const timeOptions = timeSlots.map(t => `
      <option value="${t.value}">${t.display}</option>
    `).join('');

    const today = new Date().toISOString().split('T')[0];

    return `
      <section class="booking" id="booking">
        <div class="container">
          <div class="section-header">
            <span class="section-label">Book Online</span>
            <h2 class="section-title">Reserve Your Slot</h2>
            <p class="section-subtitle">
              Pick your barber, choose your service, and secure your time — all in under 30 seconds.
            </p>
          </div>
          <div class="booking-wrapper">
            <div class="booking-info fade-in">
              <h2>Book in 30 Seconds</h2>
              <p>
                Skip the wait and secure your preferred time slot. Our online
                booking system lets you pick your barber, choose your service,
                and confirm in seconds.
              </p>
              <div class="booking-features">
                <div class="booking-feature">
                  <i class="fas fa-clock" aria-hidden="true"></i>
                  <span>Book in under 30 seconds — no signup needed</span>
                </div>
                <div class="booking-feature">
                  <i class="fas fa-user-check" aria-hidden="true"></i>
                  <span>Pick your preferred barber from our expert team</span>
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
                  <label for="bookBarber">Choose Your Barber</label>
                  <select id="bookBarber" required>
                    <option value="">Select a barber</option>
                    ${barberOptions}
                  </select>
                  <span class="error-text"></span>
                </div>
                <div class="form-group">
                  <label for="bookService">Service</label>
                  <select id="bookService" required>
                    <option value="">Select a service</option>
                    ${serviceOptions}
                  </select>
                  <span class="error-text" id="serviceError"></span>
                  <div class="service-duration-badge" id="serviceDurationBadge" style="display:none;">
                    <i class="far fa-clock" aria-hidden="true"></i>
                    <span id="serviceDurationText"></span>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group">
                    <label for="bookDate">Date</label>
                    <input type="date" id="bookDate" min="${today}" required />
                    <span class="error-text"></span>
                  </div>
                  <div class="form-group">
                    <label for="bookTime">Preferred Time</label>
                    <select id="bookTime" required>
                      <option value="">Select a time</option>
                      ${timeOptions}
                    </select>
                    <span class="error-text"></span>
                  </div>
                </div>
                <button class="btn-primary" id="bookSubmit" type="button">
                  <i class="fas fa-calendar-check" aria-hidden="true"></i>
                  Reserve Your Slot
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
                  Book Another Appointment
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
    const serviceSelect = document.getElementById('bookService');
    const durationBadge = document.getElementById('serviceDurationBadge');
    const durationText = document.getElementById('serviceDurationText');

    const fieldIds = {
      bookName: 'bookName',
      bookPhone: 'bookPhone',
      bookBarber: 'bookBarber',
      bookService: 'bookService',
      bookDate: 'bookDate',
      bookTime: 'bookTime'
    };

    serviceSelect.addEventListener('change', () => {
      const selected = serviceSelect.options[serviceSelect.selectedIndex];
      const duration = selected?.dataset?.duration;
      if (duration) {
        durationText.textContent = `Service duration: ${duration} minutes`;
        durationBadge.style.display = 'flex';
      } else {
        durationBadge.style.display = 'none';
      }
    });

    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      clearAllErrors(fieldIds);

      const fields = {
        bookName: document.getElementById('bookName').value,
        bookPhone: document.getElementById('bookPhone').value,
        bookBarber: document.getElementById('bookBarber').value,
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
      durationBadge.style.display = 'none';
      success.classList.remove('show');
      form.style.display = 'block';
    });

    observeFadeElements();
  };

  return { render, afterRender };
}

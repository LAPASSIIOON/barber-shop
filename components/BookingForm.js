import { services } from '../data/services.js';
import { barbers } from '../data/barbers.js';
import { t, tr, getLang } from '../utils/i18n.js';
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
      errors[key] = t('booking.required');
    }
  }
  return errors;
}

function showFieldError(id) {
  const field = document.getElementById(id);
  const errorEl = field?.parentElement?.querySelector('.error-text');
  if (field) field.classList.add('error');
  if (errorEl) errorEl.classList.add('show');
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
      <option value="${tr(s, 'name')}" data-duration="${s.durationMinutes}">${tr(s, 'name')} — ${s.price}</option>
    `).join('');

    const barberOptions = barbers.map(b => `
      <option value="${tr(b, 'name')}">${tr(b, 'name')} — ${tr(b, 'specialty')}</option>
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
            <span class="section-label">${t('booking.label')}</span>
            <h2 class="section-title">${t('booking.title')}</h2>
            <p class="section-subtitle">${t('booking.subtitle')}</p>
          </div>
          <div class="booking-wrapper">
            <div class="booking-info fade-in">
              <h2>${t('booking.infoTitle')}</h2>
              <p>${t('booking.infoText')}</p>
              <div class="booking-features">
                ${['features', 'features', 'features', 'features'].map((_, i) => `
                  <div class="booking-feature">
                    <i class="${['fas fa-clock', 'fas fa-user-check', 'fas fa-bell', 'fas fa-calendar-alt'][i]}" aria-hidden="true"></i>
                    <span>${t('booking.features')[i]}</span>
                  </div>
                `).join('')}
              </div>
            </div>
            <div class="booking-form-container fade-in" id="bookingFormContainer">
              <div id="bookingForm">
                <h3>${t('booking.formTitle')}</h3>
                <div class="form-group">
                  <label for="bookName">${t('booking.nameLabel')}</label>
                  <input type="text" id="bookName" placeholder="${t('booking.namePlaceholder')}" required autocomplete="name" />
                  <span class="error-text"></span>
                </div>
                <div class="form-group">
                  <label for="bookPhone">${t('booking.phoneLabel')}</label>
                  <input type="tel" id="bookPhone" placeholder="${t('booking.phonePlaceholder')}" required autocomplete="tel" />
                  <span class="error-text"></span>
                </div>
                <div class="form-group">
                  <label for="bookBarber">${t('booking.barberLabel')}</label>
                  <select id="bookBarber" required>
                    <option value="">${t('booking.barberPlaceholder')}</option>
                    ${barberOptions}
                  </select>
                  <span class="error-text"></span>
                </div>
                <div class="form-group">
                  <label for="bookService">${t('booking.serviceLabel')}</label>
                  <select id="bookService" required>
                    <option value="">${t('booking.servicePlaceholder')}</option>
                    ${serviceOptions}
                  </select>
                  <span class="error-text"></span>
                  <div class="service-duration-badge" id="serviceDurationBadge" style="display:none;">
                    <i class="far fa-clock" aria-hidden="true"></i>
                    <span id="serviceDurationText"></span>
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group">
                    <label for="bookDate">${t('booking.dateLabel')}</label>
                    <input type="date" id="bookDate" min="${today}" required />
                    <span class="error-text"></span>
                  </div>
                  <div class="form-group">
                    <label for="bookTime">${t('booking.timeLabel')}</label>
                    <select id="bookTime" required>
                      <option value="">${t('booking.timePlaceholder')}</option>
                      ${timeOptions}
                    </select>
                    <span class="error-text"></span>
                  </div>
                </div>
                <button class="btn-primary" id="bookSubmit" type="button">
                  <i class="fas fa-calendar-check" aria-hidden="true"></i>
                  ${t('booking.cta')}
                </button>
              </div>
              <div class="booking-success" id="bookingSuccess">
                <i class="fas fa-check-circle" aria-hidden="true"></i>
                <h3>${t('booking.successTitle')}</h3>
                <p>${t('booking.successText')}</p>
                <button class="btn-outline" id="bookAnother" type="button" style="margin-top:20px;">
                  <i class="fas fa-plus" aria-hidden="true"></i>
                  ${t('booking.bookAnother')}
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

    const fieldIds = ['bookName', 'bookPhone', 'bookBarber', 'bookService', 'bookDate', 'bookTime'];

    serviceSelect.addEventListener('change', () => {
      const selected = serviceSelect.options[serviceSelect.selectedIndex];
      const duration = selected?.dataset?.duration;
      if (duration) {
        durationText.textContent = `${t('booking.durationLabel')}: ${duration} ${getLang() === 'ar' ? 'دقيقة' : 'minutes'}`;
        durationBadge.style.display = 'flex';
      } else {
        durationBadge.style.display = 'none';
      }
    });

    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      clearAllErrors(fieldIds);

      const fields = {};
      fieldIds.forEach(id => { fields[id] = document.getElementById(id)?.value || ''; });

      const errors = validateForm(fields);

      if (Object.keys(errors).length > 0) {
        for (const key of Object.keys(errors)) {
          showFieldError(key);
        }
        return;
      }

      form.style.display = 'none';
      success.classList.add('show');
    });

    bookAnother.addEventListener('click', () => {
      fieldIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = '';
        clearFieldError(id);
      });
      if (durationBadge) durationBadge.style.display = 'none';
      success.classList.remove('show');
      form.style.display = 'block';
    });

    observeFadeElements();
  };

  return { render, afterRender };
}

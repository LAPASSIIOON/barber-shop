import { translations } from '../data/translations.js';

let currentLang = 'en';
let subscribers = [];
let initialized = false;

export function t(key) {
  const keys = key.split('.');
  let value = translations[currentLang] || translations.en;
  for (const k of keys) {
    if (value === undefined || value === null) return key;
    value = value[k];
  }
  return value !== undefined && value !== null ? value : key;
}

export function tr(obj, field) {
  if (currentLang === 'ar') {
    return obj[`${field}Ar`] || obj[field] || '';
  }
  return obj[field] || '';
}

export function setLang(lang) {
  if (lang === currentLang && initialized) return;
  currentLang = lang;
  initialized = true;
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  document.documentElement.setAttribute('lang', lang);
  subscribers.forEach(fn => { try { fn(lang); } catch (e) { /* skip */ } });
}

export function getLang() {
  return currentLang;
}

export function isRTL() {
  return currentLang === 'ar';
}

export function subscribe(fn) {
  subscribers.push(fn);
  return () => {
    subscribers = subscribers.filter(s => s !== fn);
  };
}

import '../styles/index.css';
import Home from '../pages/Home.js';
import { setLang, subscribe } from '../utils/i18n.js';

let currentHome = null;

function renderApp() {
  const app = document.getElementById('app');
  currentHome = Home();
  app.innerHTML = currentHome.render();
  currentHome.afterRender();
}

document.addEventListener('DOMContentLoaded', () => {
  setLang('en');
  renderApp();
  subscribe(() => renderApp());
});

import '../styles/index.css';
import Home from '../pages/Home.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  const home = Home();
  app.innerHTML = home.render();
  home.afterRender();
});

import './style.css';
import './asset/resource/icons.svg';
import { printListItems } from './modules/utils.js';

const navItem = document.querySelectorAll('.query a');
const navItemCounter = document.querySelectorAll('.counter');

// Select section to show
navItem.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    navItem.forEach((navItem) => navItem.classList.remove('active'));
    link.classList.add('active');
    navItemCounter.forEach((span) => {
      span.textContent = '';
    });
    printListItems(e);
  });
});

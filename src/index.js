import './style.css';
import './asset/resource/icons.svg';
import {
  printList,
} from './modules/utils.js';

const navItem = document.querySelectorAll('.nav-items a');

// Select section to show
navItem.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    navItem.forEach((navItem) => navItem.classList.remove('active'));
    link.classList.add('active');
    printList(e);
  });
});
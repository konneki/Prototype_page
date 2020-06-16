import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const entry = localStorage.getItem('entry');
let result = '';
if (entry) {
  result = entry;
}

const entryInput = document.querySelector('.notes__input--js');
entryInput.value = result;

const setButton = document.querySelector('.notes__button--save--js');
const getButton = document.querySelector('.notes__button--load--js');
setButton.addEventListener('click', () => {
  localStorage.setItem('entry', entryInput.value);
});
getButton.addEventListener('click', () => {
  entryInput.value = localStorage.getItem('entry');
});

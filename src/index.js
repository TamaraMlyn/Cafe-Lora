import './style.css';

console.log('funguju!');

const navElm = document.querySelector('nav');
const navBtnElm = document.querySelector('#nav-btn');

navBtnElm.addEventListener('click', () =>
  navElm.classList.toggle('nav-closed'),
);

const navAllElm = navElm.querySelectorAll('a');

const navClosed = () => {
  navElm.classList.add('nav-closed');
};

for (let i = 0; i < navAllElm.length; i++) {
  navAllElm[i].addEventListener('click', navClosed);
}

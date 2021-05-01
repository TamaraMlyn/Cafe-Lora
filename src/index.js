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

// 4 - objednávání nápoje

const orderBtnElm = document.querySelector('.order-btn');
let ordered = false;

const order = () => {
  if (ordered === false) {
    orderBtnElm.classList.add('drink__cup', 'drink__cup--selected');
    orderBtnElm.textContent = 'Zrušit';
    ordered = true;
  } else {
    orderBtnElm.classList.remove('drink__cup', 'drink__cup--selected');
    orderBtnElm.textContent = 'Objednat';
    ordered = false;
  }
};

orderBtnElm.addEventListener('click', order);

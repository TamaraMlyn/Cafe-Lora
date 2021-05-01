import './style.css';
import Layer from './Layer/index';

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
const drinkCupElm = document.querySelector('.drink__cup');
let ordered = false;

// const order = () => {
//   if (ordered === false) {
//     drinkCupElm.classList.add('drink__cup--selected');
//     orderBtnElm.textContent = 'Zrušit';
//     ordered = true;
//   } else {
//     drinkCupElm.classList.remove('drink__cup--selected');
//     orderBtnElm.textContent = 'Objednat';
//     ordered = false;
//   }
// };

const shortOrder = () => {
  drinkCupElm.classList.toggle('drink__cup--selected');
  if (ordered === false) {
    orderBtnElm.textContent = 'Zrušit';
  } else {
    orderBtnElm.textContent = 'Objednat';
  }
  ordered = !ordered;
};

orderBtnElm.addEventListener('click', shortOrder);

// 5 - ingredience jako komponenty

const layerElm = document.querySelector('.drink__info');

const coffeeOffer = [
  { color: '#feeeca', label: 'mléčná pěna' },
  { color: '#fed7b0', label: 'teplé mléko' },
  { color: '#613916', label: 'espresso' },
];

coffeeOffer.forEach((item) => {
  layerElm.innerHTML += Layer(item);
});

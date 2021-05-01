import './style.css';
import { Layer } from './Layer/index';
import { Drink } from './Drinks/index';

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

// const orderBtnElm = document.querySelector('.order-btn');
// const drinkCupElm = document.querySelector('.drink__cup');
// let ordered = false;

// // const order = () => {
// //   if (ordered === false) {
// //     drinkCupElm.classList.add('drink__cup--selected');
// //     orderBtnElm.textContent = 'Zrušit';
// //     ordered = true;
// //   } else {
// //     drinkCupElm.classList.remove('drink__cup--selected');
// //     orderBtnElm.textContent = 'Objednat';
// //     ordered = false;
// //   }
// // };

// const shortOrder = () => {
//   drinkCupElm.classList.toggle('drink__cup--selected');
//   if (ordered === false) {
//     orderBtnElm.textContent = 'Zrušit';
//   } else {
//     orderBtnElm.textContent = 'Objednat';
//   }
//   ordered = !ordered;
// };

// orderBtnElm.addEventListener('click', shortOrder);

// 5 - ingredience jako komponenty

const layerElm = document.querySelector('.drink__info');

const layers = [
  { color: '#feeeca', label: 'mléčná pěna' },
  { color: '#fed7b0', label: 'teplé mléko' },
  { color: '#613916', label: 'espresso' },
];

// layers.forEach((item) => {
//   layerElm.innerHTML += Layer(item);
// });

const drink1 = {
  id: 'romano',
  name: 'Romano',
  ordered: false,
  layers: [
    {
      color: '#fbdf5b',
      label: 'citrón',
    },
    {
      color: '#613916',
      label: 'espresso',
    },
  ],
};

const drinkListElm = document.querySelector('.drinks-list');
drinkListElm.appendChild(Drink(drink1));

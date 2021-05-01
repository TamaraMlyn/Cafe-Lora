import './style.css';
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

// const drinkListElm = document.querySelector('.drinks-list');
// drinkListElm.appendChild(Drink(drink1));

// cv 9 - seznam napoju

// const drinks = [
//   {
//     id: 'cappuccino',
//     name: 'Cappuccino',
//     ordered: false,
//     layers: [
//       {
//         color: '#feeeca',
//         label: 'mléčná pěna',
//       },
//       {
//         color: '#fed7b0',
//         label: 'teplé mléko',
//       },
//       {
//         color: '#613916',
//         label: 'espresso',
//       },
//     ],
//   },
//   {
//     id: 'romano',
//     name: 'Romano',
//     ordered: false,
//     layers: [
//       {
//         color: '#fbdf5b',
//         label: 'citrón',
//       },
//       {
//         color: '#613916',
//         label: 'espresso',
//       },
//     ],
//   },
// ];

const drinkListElm = document.querySelector('.drinks-list');

fetch('https://apps.kodim.cz/daweb/cafelora/api/drinks')
  .then((response) => response.json())
  .then((json) => {
    json.forEach((drink) => {
      drinkListElm.appendChild(Drink(drink));
    });
  });

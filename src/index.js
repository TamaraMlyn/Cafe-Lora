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

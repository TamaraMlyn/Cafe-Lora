import { Layer } from '../Layer/index';
import './style.css';

export const Drink = (props) => {
  const drinkElm = document.createElement('div');
  drinkElm.classList.add = 'drink';
  drinkElm.innerHTML = `
    <div class="drink__product">
      <div class="drink__cup">
          <img src="/assets/cups/${props.id}.png" />
          </div>
          <div class="drink__info">
          <h3>${props.name}</h3>
          </div>
          </div>
          <div class="drink__controls">
          <button class="order-btn">Objednat</button>
          </div>
          `;

  const infoElm = drinkElm.querySelector('.drink__info');
  props.layers.forEach((layer) => {
    infoElm.innerHTML += Layer(layer);
  });
  // 4 - objednávání nápoje

  const orderBtnElm = drinkElm.querySelector('.order-btn');
  const drinkCupElm = drinkElm.querySelector('.drink__cup');

  const shortOrder = () => {
    drinkCupElm.classList.toggle('drink__cup--selected');
    if (!props.ordered) {
      orderBtnElm.textContent = 'Zrušit';
    } else {
      orderBtnElm.textContent = 'Objednat';
    }
    props.ordered = !props.ordered;
  };

  orderBtnElm.addEventListener('click', shortOrder);
  return drinkElm;
};

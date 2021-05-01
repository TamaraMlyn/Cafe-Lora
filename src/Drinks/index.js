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

  return drinkElm;
};

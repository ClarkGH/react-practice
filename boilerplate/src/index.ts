import * as _ from 'lodash';

function component() {
  let el = document.createElement('h1');
  el.innerHTML = _.join(['GREETINGS', 'MEATBAGS'], ' ');

  return el;
}

document.body.appendChild(component());
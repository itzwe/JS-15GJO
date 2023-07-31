import {getNode} from '../dom/getNode.js'

const plus = document.querySelector('.plusButton');

function mapPlusHandler(){
  console.log('hi');
}

plus.addEventListener('click', mapPlusHandler);
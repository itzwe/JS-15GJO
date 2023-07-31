import { addClass, getNode, getNodes, insertFirst, keywordSwiper, removeClass, saveStorage, tiger } from '../lib/index.js';

const swiperWrapper = getNode('.swiper-wrapper');
const reviewTextField = getNode('#reviewTextField');
const reviewSubmitButton = getNode('.reviewSubmitButton');
const keywordButton = getNodes('.swiper-slide button');
const count = getNode('.reviewTextFieldCount');

async function fetchData() {
  try {
    const response = await tiger.get('http://localhost:3000/data');
    if (response.ok) {
      const data = await response.data;
      renderKeyword(swiperWrapper, data[0]);
    }
  } catch (error) {
    console.error('에러', error);
  }
}

fetchData();

function createKeyword({ keywords }) {
  let swiperKeyword = `
      <div class="swiper-slide flex w-56 flex-col items-center text-center text-xs font-semibold leading-[18px] text-white">
        <button class="mb-2 h-[39px] w-48 rounded bg-lightGreen500">${keywords.a}</button>
        <button class="mb-2 h-[39px] w-48 rounded bg-lightGreen500">${keywords.b}</button>
        <button class="mb-2 h-[39px] w-48 rounded bg-lightGreen500">${keywords.c}</button>
        <button class="mb-2 h-[39px] w-48 rounded bg-lightGreen500">${keywords.d}</button>
      </div>
    `;
  return swiperKeyword;
}

keywordSwiper();

function renderKeyword(target, reviewData) {
  const template = createKeyword(reviewData);
  insertFirst(swiperWrapper, template);
}

function handleTextField(e) {
  e.preventDefault();

  const value = reviewTextField.value;
  saveStorage('review', value);

  const textLength = value.length;
  count.textContent = textLength;
}

function handleButton(e) {
  e.preventDefault();
  window.location.href = './visitRecord.html';
}


reviewTextField.addEventListener('input', handleTextField);
reviewSubmitButton.addEventListener('click', handleButton);

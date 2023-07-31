import { addClass, getNode, getNodes, insertLast, keywordSwiper, removeClass, saveStorage, tiger } from '../lib/index.js';

const { swiperWrapper, reviewTextField, count, reviewSubmitButton, keywordButtons } = {
  swiperWrapper: getNode('.swiper-wrapper'),
  reviewTextField: getNode('#reviewTextField'),
  count: getNode('.reviewTextFieldCount'),
  reviewSubmitButton: getNode('.reviewSubmitButton'),
  keywordButtons: getNodes('.swiper-slide button'),
};

async function reviewData() {
  try {
    const response = await tiger.get('http://localhost:3000/user');
    if (response.ok) {
      const data = await response.data[0].review[0];
      createKeyword(swiperWrapper, data);
    }
  } catch (err) {
    console.error('에러', err);
  }
}

function createKeyword(target, data) {
  const keywords = data.keywords;
  const keywordArray = Object.values(keywords);

  let template = '';
  for (let i = 0; i < keywordArray.length; i += 4) {
    const group = keywordArray.slice(i, i + 4);
    template += `
      <div class="swiper-slide flex w-56 flex-col items-center text-center text-xs font-semibold leading-[18px] text-white">
        ${group.map((keyword) => `<button class="mb-2 h-[39px] w-48 rounded bg-lightGreen500">${keyword}</button>`).join('')}
      </div>
    `;
  }

  insertLast(target, template);
}

function handleKeyword(event) {
  const keywordButton = event.target.closest('.swiper-slide button');
  if (!keywordButton) return;

  const isClass = keywordButton.classList.contains('bg-lionPrimary');

  if (isClass) {
    removeClass(keywordButton, 'bg-lionPrimary');
  } else {
    addClass(keywordButton, 'bg-lionPrimary');

    keywordButtons.forEach((item) => {
      if (item !== keywordButton) {
        removeClass(item, 'bg-lionPrimary');
      }
    });
  }

  const selectedKeyword = keywordButton.textContent.trim();
  saveStorage('keywords', selectedKeyword ? [selectedKeyword] : []);
}

async function handleTextField(e) {
  e.preventDefault();
  const value = reviewTextField.value;
  const textLength = value.length;
  count.textContent = textLength;
}

function handleButton(e) {
  e.preventDefault();
  const URL = './visitRecord.html';
  window.location.href = URL;
}

function render() {
  reviewData();
  keywordSwiper();
  swiperWrapper.addEventListener('click', handleKeyword);
  reviewTextField.addEventListener('input', handleTextField);
  reviewSubmitButton.addEventListener('click', handleButton);
}

render();

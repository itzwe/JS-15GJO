import { addClass, getNode, getNodes, insertLast, keywordSwiper, removeClass, saveStorage, tiger } from '../lib/index.js';

const { swiperWrapper, keywordButtons, reviewTextField, count, reviewSubmitButton, reviewAlert, reviewAlertClose, URL } = {
  swiperWrapper: getNode('.swiper-wrapper'),
  keywordButtons: getNodes('.swiper-slide button'),
  reviewTextField: getNode('#reviewTextField'),
  count: getNode('.reviewTextFieldCount'),
  reviewSubmitButton: getNode('.reviewSubmitButton'),
  URL: 'http://localhost:3000/user',
  reviewAlert: getNode('.review-alert'),
  reviewAlertClose: getNode('.review-alertClose'),
};

async function reviewData() {
  try {
    const response = await tiger.get(URL);
    if (response.ok) {
      const data = response.data[0];
      insertLast(swiperWrapper, createKeyword(data));
      return data;
    }
  } catch (err) {
    console.error('에러', err);
  }
}

function handleTextField() {
  const value = reviewTextField.value;
  const textLength = value.length;
  count.textContent = textLength;
}

async function handleButton(e) {
  e.preventDefault();
  const value = reviewTextField.value;
  try {
    const data = await reviewData();
    const vitiedData = data.visited[0];
    vitiedData.review = value;

    const response = await tiger.patch(`${URL}/1`, data);
    if (response.ok) {
      window.location.href = './visitRecord.html';
      console.log(data);
    }
  } catch (err) {
    console.error(err);
  }
}

function createKeyword(data) {
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

  return template;
}

const maxKeyword = 5;
const selectedKeywords = [];

function handleKeyword(event) {
  const target = event.target.closest('.swiper-slide button');
  if (!target) return;

  const isClass = target.classList.contains('bg-lionPrimary');

  if (isClass) {
    removeClass(target, 'bg-lionPrimary');
    const selectedKeyword = target.textContent.trim();
    const index = selectedKeywords.indexOf(selectedKeyword);
    if (index !== -1) {
      selectedKeywords.splice(index, 1);
    }
  } else {
    if (selectedKeywords.length < maxKeyword) {
      const selectedKeyword = target.textContent.trim();
      selectedKeywords.push(selectedKeyword);
      addClass(target, 'bg-lionPrimary');

      keywordButtons.forEach((item) => {
        if (item !== target) {
          removeClass(item, 'bg-lionPrimary');
        }
      });
    }
  }

  saveStorage('keywords', selectedKeywords);
}

function render() {
  reviewData();
  keywordSwiper();
  swiperWrapper.addEventListener('click', handleKeyword);
  reviewTextField.addEventListener('input', handleTextField);
  reviewSubmitButton.addEventListener('click', handleButton);
  reviewAlertClose.addEventListener('click', () => {
    addClass(reviewAlert, 'hidden');
  });
}

render();

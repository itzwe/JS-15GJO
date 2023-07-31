import { getNode, getNodes, keywordSwiper, saveStorage, tiger } from '../lib/index.js';

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
      // renderKeyword(swiperWrapper, data[0]);
    }
  } catch (error) {
    console.error('에러', error);
  }
}

fetchData();





async function handleTextField(e) {
  e.preventDefault();

  const value = reviewTextField.value;
  saveStorage('review', value);

  const textLength = value.length;
  count.textContent = textLength;

  const url = 'http://localhost:3000/data';
  const body = { review: value }; // POST 요청에 담을 데이터 객체

  try {
    const response = await tiger.post(url, body);
    if (response.ok) {
      console.log('POST 성공!');
    } else {
      console.error('POST 실패!');
    }
  } catch (error) {
    console.error('에러', error);
  }
}

function handleButton(e) {
  e.preventDefault();
  window.location.href = './visitRecord.html';
}

keywordSwiper();
reviewTextField.addEventListener('input', handleTextField);
reviewSubmitButton.addEventListener('click', handleButton);

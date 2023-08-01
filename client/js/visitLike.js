import { addClass, getNode, handleKeyword, keywordSwiper, removeClass, renderKeywords, tiger } from '../lib/index.js';

const {
  URL,
  count,
  reviewAlert,
  swiperWrapper,
  reviewTextField,
  reviewAlertClose,
  reviewSubmitButton
  } = {
  URL: 'http://localhost:3000/user',
  count: getNode('.reviewTextFieldCount'),
  reviewAlert: getNode('.review-alert'),
  swiperWrapper: getNode('.swiper-wrapper'),
  reviewTextField: getNode('#reviewTextField'),
  reviewAlertClose: getNode('.review-alertClose'),
  reviewSubmitButton: getNode('.reviewSubmitButton'),
};

async function reviewData() {
  try {
    const response = await tiger.get(URL);
    if (response.ok) {
      const data = response.data[0];
      return data;
    } else {
      throw new Error('API 요청 실패했습니다');
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

  if (!value) {
    removeClass(reviewAlert, 'hidden');
    return;
  }

  try {
    const data = await reviewData();
    const vitiedData = data.visited[0];
    vitiedData.review = value;

    const response = await tiger.patch(`${URL}/1690888344809`, data);
    if (response.ok) {
      window.location.href = './visitRecord.html';
    }
  } catch (err) {
    console.error(err);
  }
}

(async function render() {
  const data = await reviewData();
  keywordSwiper();
  renderKeywords(swiperWrapper, data);
  swiperWrapper.addEventListener('click', handleKeyword);
  reviewTextField.addEventListener('input', handleTextField);
  reviewSubmitButton.addEventListener('click', handleButton);
  reviewAlertClose.addEventListener('click', () => {
    addClass(reviewAlert, 'hidden');
  });
})();

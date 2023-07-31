import { addClass, getNode, getNodes, keywordSwiper, removeClass, saveStorage } from '../lib/index.js';
// const reviewForm = getNode('#reviewForm');
const reviewTextField = getNode('#reviewTextField');
const reviewSubmitButton = getNode('.reviewSubmitButton');
const keywordButton = getNodes('.swiper-slide button');
const count = getNode('.reviewTextFieldCount');

function handleTextField(e) {
  e.preventDefault();

  const value = reviewTextField.value;
  saveStorage('review', value);

  const textLength = value.length;
  count.textContent = textLength;
}

function handleButton(e) {
  e.preventDefault();
  const URL = './visitRecord.html';
  window.location.href = URL;
}

let selectedKeyword = null;

keywordButton.forEach((item) => {
  item.addEventListener('click', () => {
    const clickedKeyword = item.textContent.trim();
    if (selectedKeyword === clickedKeyword) {
      selectedKeyword = null;
      removeClass(item, 'bg-lionPrimary');
    } else {
      selectedKeyword = clickedKeyword;
      keywordButton.forEach((button) => {
        if (button.textContent.trim() !== selectedKeyword) {
          removeClass(button, 'bg-lionPrimary');
        }
      });
      addClass(item, 'bg-lionPrimary');
    }
    saveStorage('keywords', selectedKeyword ? [selectedKeyword] : []);
  });
});

reviewTextField.addEventListener('input', handleTextField);
reviewSubmitButton.addEventListener('click', handleButton);

keywordSwiper();
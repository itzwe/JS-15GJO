import { getNode, insertFirst, loadStorage } from '../lib/index.js';

const visitList = getNode('.visit-list');
const writeButton = getNode('.write-review');

async function renderReviewDOM() {
  try {
    const text = await loadStorage('review');
    const selectedKeyword = await loadStorage('keywords');

    renderReview(visitList, {
      text: text,
      keyword1: selectedKeyword[0],
    });

    writeButton.style.display = 'none';
  } catch (error) {
    console.error('에러', error);
  }
}

function createReview({ text, keyword1 }) {
  const template = /* html */ `
    <div class="leading-5">
      <p class="line-clamp-2 h-[40px] w-[167px] text-ellipsis"> ${text}</p>
      <div class="mt-1">
        <button class="bg-liteGray rounded px-2 py-[2px]">${keyword1}</button>
        <button class="bg-liteGray rounded px-2 py-[2px]">✨+2</button>
      </div>
    </div>
    <img src="../assets/images/food/test.svg" alt="도넛" class="h-[72px] w-20" />
    `;
  return template;
}

function renderReview(target, data) {
  const userCardTemplate = createReview(data);
  insertFirst(target, userCardTemplate);
}

function handleWriteButton() {
  const URL = './visitLike.html';
  window.location.href = URL;
}

window.addEventListener('DOMContentLoaded', renderReviewDOM);
writeButton.addEventListener('click', handleWriteButton);

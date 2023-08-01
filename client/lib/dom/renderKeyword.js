import { insertLast } from './insert.js';

export function createKeyword(data) {
  const keywords = data.keywords || [];
  const keywordArray = [];

  for (const key in keywords) {
    keywordArray.push(keywords[key]);
  }

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

export function renderKeywords(swiperWrapper, data) {
  insertLast(swiperWrapper, createKeyword(data));
}
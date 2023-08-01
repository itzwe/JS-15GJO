import { getNode, insertFirst, tiger } from '../lib/index.js';

const themeReviewPage = getNode('.square-list');
async function fetchData() {
  try {
    const response = await tiger.get('http://localhost:3000/user');
    if (response.ok) {
      const data = await response.data;
      renderReviewChoice(themeReviewPage, data[0].visited);
      console.log(data);
    }
  } catch (error) {
    console.error('에러', error);
  }
}

fetchData();

function squareReviewChoice({id, name,image,location }) {
  const template = /* html */ `

  <li class="transition duration-300 ease-in-out hover:scale-110 relative flex h-[140px] w-[141px] items-end rounded-[3px]" data-index ='${id}'>
  <img src="../assets/images/${image.src}" alt="${image.alt}" class="h-[140px] w-[141px] absolute -z-10" />
  <button type="button">
    <img src="../assets/icon/icon-bookmark.svg" alt="북마크" class="absolute right-3 top-3" />
  </button>
  <div class="pb-[6px] pl-[7px]">
    <p class="pb-[2px] text-xs font-semibold text-white">${location}</p>
    <p class="text-base font-semibold text-white">${name}</p>
  </div>
</li>

`

  return template;
}

function renderReviewChoice(target, data) {
  data.reverse().forEach((item) => {
    const template = squareReviewChoice(item); 
    insertFirst(themeReviewPage,template)
  });
}









import { getNode, insertFirst, tiger } from '../lib/index.js';


const reviewChoice = getNode('.choice-list');
console.log(reviewChoice);
async function fetchData() {
  try {
    const response = await tiger.get('http://localhost:3000/user');
    if (response.ok) {
      const data = await response.data;
      renderReviewChoice(reviewChoice, data[0].visited);
      console.log(data);
    }
  } catch (error) {
    console.error('에러', error);
  }
}

fetchData();

function createReviewChoice({id, name,image,description,location,date }) {
  const template = /* html */ `

  <li class="transition duration-300 ease-in-out hover:scale-110 choice-list relative mb-3 flex items-center rounded-2xl bg-white text-xs" data-index ='${id}'>
  <img src="../assets/images/${image.src}" alt="${image.alt}" class="rounded-l-2xl" />
  <button type="button">
    <img src="../assets/icon/icon-call.svg" alt="전화기 모양" class="absolute right-3 top-3" />
  </button>
  <div class="px-3 leading-5">
    <p class="font-semibold">${name}</p>
    <p class="w-[174px] overflow-hidden text-ellipsis whitespace-nowrap font-normal">${description}</p>
    <p class="text-[10px] font-normal text-gray-400">${location} | ${date} 방문</p>
  </div>
</li>
`

  return template;
}

function renderReviewChoice(target, data) {
  data.reverse().forEach((item) => {
    const template = createReviewChoice(item); 
    insertFirst(reviewChoice,template)
  });
}









import { insertLast } from "./insert.js";

function createReviewItem(data) {
  const template = `
    <div class="reviewItem mt-4">
    <div class="flex items-center my-2">
      <div class="rounded-full w-[26px] h-[26px] bg-lightGreen400 p-2">
        <img class="" src="../assets/icon/icon-group.svg" alt="그룹" />
      </div>
      <span class="text-lightGreen400 ml-2 text-xs">NO. ${data.id}</span>
    </div>
    <div class="mt-4 bg-white w-full rounded-t-2xl box-shadow">
      <div class="w-72 h-58">
        <img class="w-full object-cover rounded-t-2xl" src="../assets/images/${data.image.src}" alt="${data.image.alt}" />
      </div>
      <div class="w-full px-9 py-6 flex flex-col justify-center items-center gap-2">
        <div class="flex gap-2 text-xs">
          <time class="leading-relaxed text-lightGreen200" datetime="2022-11-04T11:24:30">${data.date}</time>
          <div class="text-lightGreen500 border-solid border-2 border-lightGreen500 px-1 bg-white rounded">방문</div>
        </div>
        <p class="text-xs text-justify w-full h-14 text-overflow">
          ${data.review}
        </p>
        <div class="flex gap-1">
          <div class="rounded flex bg-lightGray700 w-fit p-1 text-xs text-lightGray500">
            <span class="ml-1">${Object.values(data.keywords)[0]}</span>
          </div>
          <div class="rounded text-xs text-lightGray500 p-1 bg-lightGray700">+${Object.keys(data.keywords).length - 1}</div>
        </div>
      </div>
      <div class="flex justify-between px-4 py-3 border-t-[1px] border-dashed">
        <div>
          <h4 class="text-left text-base font-semibold">${data.name}</h4>
          <div class="flex text-xs text-lightGray500 gap-1">
            <p>리뷰</p>
            <p class="font-semibold">5</p>
            <span>|</span>
            <p>${data.location}</p>
          </div>
        </div>
        <button>
          <img src="../assets/icon/icon-heart.svg" alt="하트" />
        </button>
      </div>
    </div>
    <div class="-mt-[1px] w-full h-2 bg-[url('/assets/icon/icon-polygon.svg')] bg-repeat"></div>
  </div>
  `

  return template;
}


export function renderReviewItem(target, data) {
  insertLast(target, createReviewItem(data))
}
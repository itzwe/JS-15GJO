import {getNodes} from '../dom/getNode.js'
import { handleLogout } from "./logout.js";

const btnLogout = document.querySelector('.btnLogout');
btnLogout.addEventListener('click', handleLogout);

export function imageChange(node){

  node = getNodes(node);

  node.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.getAttribute("src") === "../assets/icon/icon-love.svg") {
        item.setAttribute("src", "../assets/icon/icon-love2.svg");
      } else {
        item.setAttribute("src", "../assets/icon/icon-love.svg");
      }
    });
  });
}


const loadButton = document.querySelector('.alert-feed');

function feedAlert(){
  // console.log(loadButton);
  setTimeout(() => {
    loadButton.classList.remove('hidden');
  }, 2000);
  
}
feedAlert();





function createContent() {
  const content = document.createElement("section");
  content.innerHTML = `
  <section class="relative mt-3 px-4 py-2 text-xs font-semibold leading-4">
  <div class="flex">
    <button class="mr-[5px] mb-2 h-[56px] w-[56px] rounded-full border-2 border-white">
      <img src="../assets/images/etc/먼지.jpg" alt="" class="h-[52px] w-[56px] rounded-full" />
    </button>
    <div class="flex flex-col mt-2">
      <h2 class="">먼지왕자</h2>
      <span class="text-lionContent">사진리뷰 2 &middot; 3.1.수</span>
    </div>
  </div>
  <a href="./allReviewMap.html">
    <figure class="">
      <figcaption class="hidden" aria-hidden="true">곱창</figcaption>
      <img src="../assets/images/food/image-pig1.svg" alt="곱창 이미지" class="w-full" />
    </figure>
    <p class="ml-2 mt-1 max-w-[320px] text-lionContent">
      주말엔 매일 줄 서 있어서 먹을 수가 없었는데 평일에 다행히 갈 수 있어서 너무 좋았어요! 줄 안기다리고 먹었는데 와 너무
      맛있었습니다!!
    </p>
  </a>
  <button class="absolute top-4 right-2 border bg-lionPrimary py-2 px-4 rounded-2xl ">
    <img class="toggle-icon" src="../assets/icon/icon-love.svg" alt="" />
  </button>
</section>`;
  return content;
}

function renderContent() {
  const newContent = createContent();
  const targetElement = document.querySelector("#your-target-element");
  const toggleIcon = newContent.querySelector('.toggle-icon');
  toggleIcon.addEventListener("click", () => {
    if (toggleIcon.getAttribute("src") === "../assets/icon/icon-love.svg") {
      toggleIcon.setAttribute("src", "../assets/icon/icon-love2.svg");
    } else {
      toggleIcon.setAttribute("src", "../assets/icon/icon-love.svg");
    }
  });
  targetElement.insertAdjacentElement("beforebegin", newContent);
}

loadButton.addEventListener("click", () => {
  renderContent();
  loadButton.classList.add('hidden');
});

imageChange('.toggle-icon')
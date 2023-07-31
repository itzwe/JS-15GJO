import {getNodes} from '../dom/getNode.js'

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
document.addEventListener("DOMContentLoaded", imageChange('.toggle-icon'));

const loadButton = document.querySelector('.alert-feed');

function feedAlert(){
  // console.log(loadButton);
  setTimeout(() => {
    loadButton.classList.remove('hidden');
  }, 2000);
}

feedAlert();


loadButton.addEventListener('click', (item)=>{console.log(item)})


function createContent() {
  const content = document.createElement("section");
  content.innerHTML = `
    <section class="relative mt-3 px-4 py-2 text-xs font-semibold leading-4">
      <div
        class="float-left mb-3 mr-2 mt-[-3px] h-10 w-10 rounded-full bg-lionPrimary p-2 pt-2 text-center text-white"
      ></div>
      <h2 class="">멋쟁이사자처럼</h2>
      <span class="text-lionContent">사진리뷰 2 &middot; 3.1.수</span>
      <figure class="">
        <figcaption class="hidden" aria-hidden="true">피자</figcaption>
        <img src="../assets/images/food/pizza.png" alt="피자 이미지" class="w-full" />
      </figure>
      <p class="ml-2 mt-1 max-w-[320px] text-lionContent">
        주말엔 매일 줄 서 있어서 먹을 수가 없었는데 평일에 다행히 갈 수 있어서 너무 좋았어요! 줄 안기다리고 먹었는데 와 너무
        맛있었습니다!!
      </p>
      <button class="absolute top-2 right-2 border bg-lionPrimary py-2 px-4 rounded-2xl ">
        <img class="toggle-icon" src="../assets/icon/icon-love.svg" alt="" />
      </button>
    </section>`;
  return content;
}

function renderContent() {
  const newContent = createContent();
  const targetElement = document.querySelector("#your-target-element");
  targetElement.insertAdjacentElement("beforebegin", newContent);
}

loadButton.addEventListener("click", () => {
  renderContent();
});
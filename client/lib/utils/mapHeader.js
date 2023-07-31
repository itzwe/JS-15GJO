import { getNode } from "../dom/getNode.js";
// Header 상단 고정 일정 스크롤 시 nav header 밑에 고정
export function mapFixHandler(){
  const header = getNode('#fixed-header');
  const h = getNode('#fixed_title');
  const secondImg = getNode('#second_img');
  const nav = getNode('.mainFixed');
  const initialNavOffset = nav.offsetTop;

  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      header.classList.add("bg-white");
      header.classList.add("border-b-[1px]");
      header.classList.add("border-gray-300");
      // button.classList.remove("border");
      h.classList.remove('opacity-0')
      h.classList.add('opacity-1')
      secondImg.classList.remove('opacity-0')
      secondImg.classList.add('opacity-1')
    } else{
      header.classList.remove("bg-white")
      header.classList.remove("border-b-[1px]");
      // button.classList.add("border");
      h.classList.remove("opacity-1");
      h.classList.add("opacity-0");
      secondImg.classList.remove("opacity-1");
      secondImg.classList.add("opacity-0");
    }

    if (window.scrollY >= initialNavOffset - header.getBoundingClientRect().height) {
      // nav.classList.add('fixed');
      // nav.classList.add(`top-[${header.clientHeight}]`)
      nav.classList.add('nav-sticky');

    }else{
      // nav.classList.remove('fixed');
      // nav.classList.remove(`top-[${header.clientHeight}]`)
      nav.classList.remove('nav-sticky');

    }
  });
}

// script 위치에 따라 안되는 경우도 있어서 DOM 로드 시 함수 동작하게 만들기.


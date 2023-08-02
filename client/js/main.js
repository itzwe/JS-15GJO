import { loadStorage } from "../lib/index.js";



const btnLogout = document.querySelector('.btnLogout');


export function handleLogout() {
  // 로그아웃 버튼 클릭 시 이벤트 핸들링
  if (event.target === btnLogout) {
    localStorage.removeItem('uniqueId');
    // 로그아웃 후 필요한 경우 로그인 페이지 또는 다른 페이지로 리다이렉트
    location.href = 'login.html';
  }
}




async function handleRedirect() {
  const uniqueId = await loadStorage('uniqueId');

  setTimeout(()=>{
    if(uniqueId){
      location.href='pages/feedPage.html';
    }
  })
}


//로드가 되었을때 유니크아이디있으면 피드페이지로가기
window.addEventListener('DOMContentLoaded',handleRedirect);





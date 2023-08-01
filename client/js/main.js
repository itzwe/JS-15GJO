import { loadStorage } from "../lib/index.js";



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






const btnLogout = document.querySelector('.btnLogout');
export function handleLogout() {
  // 로그아웃 버튼 클릭 시 이벤트 핸들링
  if (event.target === btnLogout) {
    localStorage.removeItem('uniqueId');
    // 로그아웃 후 필요한 경우 로그인 페이지 또는 다른 페이지로 리다이렉트
    location.href = 'login.html';
  }
}
// btnLogout.addEventListener('click', handleLogout);




// if(localStorage.getItem('uniqueId')){
//   setTimeout(() => {
//     localStorage.removeItem('uniqueId');
//   }, 100000);
// }
// // 1200000
// setTimeout(()=>{
//   if(!localStorage.getItem('uniqueId')){
//     alert('로그아웃 되었습니다. 로그인페이지로 이동합니다.');
//     location.href = 'login.html';
//   }
// },1200000)


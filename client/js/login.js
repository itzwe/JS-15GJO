
import { addClass, getNode, removeClass, saveStorage, shakeForm } from "../lib/index.js";
import { UserList} from "./common/common.js";



const userId = getNode('#userId');
const userPw = getNode('#userPass');
const loginBtn = getNode('.loginBtn');
const reEnter = getNode('.reEnter');

let idPass = false;
let pwPass = false;


async function handleLoginCheck(e) {
  e.preventDefault()
  const userData =await UserList();

  userData.forEach(item => {

    if(userId.value === item.userId && userPw.value === item.userPwd  && item.id){
      idPass = true;
      pwPass = true;
      addClass(reEnter,'hidden');
      
      //로그인시 스토리지에 유니크아이디 넘기기
      saveStorage('uniqueId',`${item.id}`);
      location.href='feedPage.html';
    }
    else if(userId.value === '' || userPw.value === ''){
      removeClass(reEnter,'hidden');
      shakeForm().restart();
      idPass = false;
      pwPass = false;
    }else{
      removeClass(reEnter,'hidden');
      shakeForm().restart();
      idPass = false;
      pwPass = false;
    }

  });

}

loginBtn.addEventListener('click',handleLoginCheck);






// function shouldShowModal() {
//   const disableModalUntil = localStorage.getItem('disableModalUntil');

//   if (disableModalUntil) {
//     const currentDate = new Date();
//     const disableModalTime = new Date(parseInt(disableModalUntil));

//     if (currentDate <= disableModalTime) {
//       return false; // 24시간이 지나기 전에는 모달 표시하지 않음
//     }
//   }

//   return true; // 모달 표시해야 함
// }



// function autoLogOut() {
//   const currentDate = new Date();
//   const nextDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
//   return saveStorage('time',`${nextDate}`);
// }


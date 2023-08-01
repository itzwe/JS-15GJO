
import { addClass, getNode, removeClass,shake, saveStorage, loadStorage, deleteStorage } from "../lib/index.js";
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
      shake.restart();
      idPass = false;
      pwPass = false;
    }else{
      removeClass(reEnter,'hidden');
      shake.restart();
      idPass = false;
      pwPass = false;
    }

  });

}


loginBtn.addEventListener('click',handleLoginCheck);
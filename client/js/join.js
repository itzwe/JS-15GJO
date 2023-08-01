
import { addClass, getNode, removeClass,idReg, pwReg, emailReg, shake, tiger} from "../lib/index.js";

const userId = getNode('#userId');
const userPw = getNode('#userPass');
const reUserPw = getNode('#reUserPass');
const userEmail = getNode('#userEmail');
const joinBtn = getNode('.joinBtn');
const reEnter = getNode('.reEnter')

//상태변수
let idPass = false;
let pwPass = false;
let rePwPass = false;
let emailPass = false;


function handleCheckId() {
  const value = this.value;
  
  if(idReg(value)){
    addClass('.idErr','hidden');
    removeClass('.checkId','hidden');
    idPass = true;
  }else if(value == ''){
    addClass('.idErr','hidden');
    addClass('.checkId','hidden');
    idPass = false;
  }else{
    removeClass('.idErr','hidden');
    addClass('.checkId','hidden');
    idPass = false;
  }
  return idPass
}

function handleCheckPw() {
  const value = this.value;

  if(pwReg(value)){
    addClass('.pwErr','hidden');
    removeClass('.checkPw1','hidden');
    pwPass = true;
  }
  else if(value == ''){
    addClass('.pwErr','hidden');
    addClass('.checkPw1','hidden');
    pwPass = false;
  }
  else{
    removeClass('.pwErr','hidden');
    addClass('.checkPw1','hidden');
    pwPass = false;
  }
}

function handleCheckRePw() {
  const value = this.value;

  if(pwReg(value) && value === userPw.value){
    removeClass('.checkPw2','hidden')
    rePwPass = true;
  }else{
    addClass('.checkPw2','hidden')
    rePwPass = false;
  }
}

function handleCheckEmail() {
  const value = this.value;
  if(emailReg(value)){
    removeClass('.checkEmail','hidden')
    emailPass = true;
  }else{
    addClass('.checkEmail','hidden')
    emailPass = false;
  }
}



async function joinButton(e) {
  e.preventDefault()

  const id = userId.value;
  const pw = userPw.value;
  const email = userEmail.value;
  const uniqueId = Date.now();

  if(idPass === true && pwPass === true && emailPass == true && rePwPass === true){

    addClass(reEnter,'hidden');
    
    //data.json에(통신) 회원가입정보 넣기
    tiger.post('http://localhost:3000/user',{    
      id:`${uniqueId}`,
      userId:`${id}`,
      userPwd:`${pw}`,
      userEmail:`${email}`,});

    location.href='login.html';

  }
  else{
    removeClass(reEnter,'hidden')
    shake.restart()
  }

}


userId.addEventListener('input',handleCheckId);
userPw.addEventListener('input',handleCheckPw);
reUserPw.addEventListener('input',handleCheckRePw);
userEmail.addEventListener('input',handleCheckEmail);
joinBtn.addEventListener('click',joinButton);
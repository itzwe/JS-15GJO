/* global gsap */

import { addClass, getNode, removeClass,idReg, pwReg,emailReg} from "../lib/index.js";


const userId = getNode('#userId');
const userPw = getNode('#userPass');
const reUserPw = getNode('#reUserPass');
const userEmail = getNode('#userEmail');
const joinBtn = getNode('.joinBtn');
const backBtn = getNode('.backBtn');


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

  if(pwReg(value) || value === userPw.value){
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

const shake = gsap.to('form',{
  duration:0.1,
  x:-8,
  repeat:5,
  yoyo:true,
  clearProp:'x',
  paused:true
})

function joinButton(e) {
  e.preventDefault()
  // const id = userId.value;
  // console.log(id);

  if(idPass !== true){
    console.log('아이디를 다시 입력해주세요.');
    shake.restart()
  }

  if(pwPass !== true){
    console.log('비밀번호를 다시 입력해주세요.');
    shake.restart()
  }

  if(emailPass !== true){
    console.log('이메일 형식으로 다시 입력해주세요.');
    shake.restart()
  }

  if(rePwPass !== true){
    console.log('입력하신 비밀번호와 같지 않습니다.');
    shake.restart()
  }



  if(idPass === true && pwPass === true && emailPass == true && rePwPass === true){
    addClass(joinBtn,'border-lionSecondary');
    window.location.href='../pages/login.html';
  }




}

//아이디.이메일.비밀번호.확인까지 써져야 가입하기버튼이 활성화된다



userId.addEventListener('input',handleCheckId)
userPw.addEventListener('input',handleCheckPw)
reUserPw.addEventListener('input',handleCheckRePw)
userEmail.addEventListener('input',handleCheckEmail)
joinBtn.addEventListener('click',joinButton)
backBtn.addEventListener('click',()=>{
  history.back();
})
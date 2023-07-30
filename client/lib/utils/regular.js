//영문 3자리 이상 아이디 정규식
export function idReg(text){
  const reg = /[a-zA-Z]{3,}/;
  return reg.test(String(text).toLowerCase())
}

//특수문자포함 최소 8자이상~16자이하 비밀번호정규식
export function pwReg(text){
  const reg = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-]).{8,16}$/;
  return reg.test(String(text).toLowerCase());
}

//@ 기호 포함, .포함 이후 2글자 이상 이메일정규식
export function emailReg(text){
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return reg.test(String(text).toLowerCase())
}
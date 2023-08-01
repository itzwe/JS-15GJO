import { tiger } from "../../lib/index.js";

//사용자 리스트 함수
export async function UserList() {
  const response = await tiger.get('http://localhost:3000/user');
  const userData = response.data;
  return userData
}
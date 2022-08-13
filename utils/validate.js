
//验证邮箱
export function verifyEmail(value){
  return /^\S+?@\S+?\.\S+?$/.test(value);
}
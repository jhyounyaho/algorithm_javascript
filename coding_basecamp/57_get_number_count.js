/*
  문제57 : 1의 개수
  **0부터 1000까지 1의 개수를 세는 프로그램**을 만들려고 합니다. 
  예를 들어 0부터 20까지 1의 개수를 세어본다면 1, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19에 각각 1이 들어가므로 12개의 1이 있게 됩니다. 11은 1이 2번 들어간 셈이죠.

  그렇다면 0부터 1000까지 수에서 1은 몇 번이나 들어갔을까요? 출력해 주세요.
*/

const chkOneCount = (num) => {
  let str = '';

  // 입력받은 숫자를 이어준다. 
  for(let i = 0; i <= num; i++) {
    str += i;
  }
  console.log(str)
  
  let count = 0;

  /*
  // CASE1 for of 사용 value값 체크하기 
  for(let k of str) {
    if (k == 1) {
      count++;
    }
  }
  */

  // CASE2 for in 사용 index로 value값 체크하기 
  for(let k in str) {
    if (str[k] == 1) {
      count++;
    }
  }
  return count 
} 

console.log(chkOneCount(15));
/*
  문제61 : 문자열 압축하기

  문자열을 입력받고 연속되는 문자열을 압축해서 표현하고 싶습니다.

  입력
  aaabbbbcdddd

  출력
  a3b4c1d4
*/

// 내가 푼 풀이 
const getString = (str) => {
  // key : 문자, value : 갯수 형태의 Object 생성  
  let arr = {};
  for(let i of str) {
    if (arr[i] !== undefined) {
      arr[i] += 1;
    } else {
      arr[i] = 1;
    }
  }

  // Object 문자열로 압축하여 리턴 
  let result = '';
  for(let k of Object.keys(arr)) {
    result += `${k}${arr[k]}`;
  }
  return result;
}

console.log(getString('aaabbbbcdddd'));


// 강의 풀이법
const getString2 = (str) => {
  // 결과 값
  let result = '';
  // 체크할 문자 
  let chkString = str[0];
  // 체크한 문자 갯수
  let count = 0;

  for (let i of str) {
    if (i === chkString) {
      count += 1;
    } else {
      result += chkString + String(count);
      chkString = i;
      count = 1;
    }
  }
  
  return result += chkString + String(count);
}

console.log(getString2('aaabbbbcdddd'));
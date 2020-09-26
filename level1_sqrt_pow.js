/*
  [Level 1] 정수 제곱근 판별(JavaScript)

  임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 
  판단하려 합니다.
  n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, 
  n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.
  
  제한 사항
  n은 1이상, 50000000000000 이하인 양의 정수입니다.

  입출력 예
  n = 121   return = 144
  n = 3     return = -1 
*/

function solution(n) {
  let chk_num = Math.sqrt(n);

  // 자연수 체크
  //return chk_num % 1 === 0 ? Math.pow(chk_num += 1, 2) : -1;
  return Number.isInteger(chk_num) ? Math.pow(chk_num + 1, 2) : -1;
}

console.log(solution(121));
console.log(solution(3));

/*
  [Level 1] 정수 내림차순으로 배치하기(JavaScript)
  함수 solution은 정수 n을 매개변수로 입력받습니다. 
  n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 
  예를들어 n이 118372면 873211을 리턴하면 됩니다.
  
  제한 조건
  n은 1이상 8000000000 이하인 자연수입니다.

  입출력 예
  n = 118372
  return = 873211
 */

// 201123 풀이
function solution(n) {
    // 배열로 만들어주고 sort로 내림차순 만들어서 문자열로 만들어준다.
    return parseInt(String(n).split('').sort((a, b) => b - a).join(''), 10)
}

function solution(n) {
  // return Number([...(n + "")].sort().reserve().join(""));
  return Number([...(n + "")].sort((a, b) => b - a).join(""));
}

console.log(solution(118372));

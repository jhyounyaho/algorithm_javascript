/*
  [Level 1] 두 정수 사이의 합(JavaScript)

  두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
  예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.제한 조건

  a와 b가 같은 경우는 둘 중 아무 수나 리턴하세요.
  a와 b는 -10,000,000 이상 10,000,000 이하인 정수입니다.
  a와 b의 대소관계는 정해져있지 않습니다.

  입출력 예 
  a = 3, b = 5, return = 12
  a = 3, b = 3, return = 3
  a = 5, b = 3, return = 12 
*/

// 201121 풀이
function solution(a, b) {
  let answer = 0; // 초깃값

  // Math객체를 사용하여 최댓값, 최솟값 구해줌 
  const minNum = Math.min(a, b); // 최솟값
  const maxNum = Math.max(a, b); // 최댓값
  
  for (let i = minNum; i <= maxNum; i++) {
      answer += i;
  }
  return answer;
}

// 윗 풀이를 더 짧게 하면 변수선언 대신 직접 대입  
function solution(a, b) {
  let answer = 0; // 초깃값

  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
      answer += i;
  }

  return answer;
}


function solution(a, b) {
  let answer = 0;

  // a, b 대소 관계 정하기
  const min = a > b ? b : a;
  const max = a > b ? a : b;

  for (let i = min; i <= max; i++) {
    answer += i;
  }
  return answer;
}

solution(3, 5);
solution(3, 3);
solution(5, 3);

/*
  다른 풀이
*/
function solution(a, b) {
  let answer = 0;

  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    answer += i;
  }
  return answer;
}

/*
  [Level 1] 문자열을 정수로 바꾸기(JavaScript)
  문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.제한 조건

  s의 길이는 1 이상 5이하입니다.
  s의 맨앞에는 부호(+, -)가 올 수 있습니다.
  s는 부호와 숫자로만 이루어져있습니다.
  s는 0으로 시작하지 않습니다.
  입출력 예

  예를들어 str이 1234이면 1234를 반환하고, -1234이면 -1234를 반환하면 됩니다.
  str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없습니다.
*/

// 201121 풀이 
function solution(s) {
  return parseInt(s, 10);
}

function solution(s) {
  // return Number(s);
  return parseInt(s);
}

console.log("result : ", solution("1234"));
console.log("result : ", solution("-1234"));
console.log("result : ", solution("1234원"));

/*
  다른 풀이 
*/
// 문자열과 숫자열의 사칙연산은 문자가 숫자로 자동 파싱됨
function strToInt(str) {
  return str / 1;
}

function strToInt(str) {
  return +str;
}
/*
  문제28 : 2-gram

  2-gram이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다. 
  예를 들어 'Javascript'를 2-gram으로 반복해 본다면 다음과 같은 결과가 나옵니다.

  입력
  Javascript

  출력
  J a
  a v
  v a
  a s
  s c
  c r
  r i
  i p
  p t

  입력으로 문자열이 주어지면 2-gram으로 출력하는 프로그램을 작성해 주세요.
*/

/*
  substr(start, length) 
  문자열에서 특정 위치에서 시작하여 특정 문자 수 만큼의 문자들을 반환한다.
  start   추출하고자 하는 문자들의 시작위치
  length  추출할 문자들의 총 숫자
*/
const make_2gram = (string) => {
  let result = '';
  for (let i = 0; i < string.length - 1; i ++) {
    // result += `${string[i]}${string[i+1]} \n`;
    result += `${string.substr(i,2)} \n`;
  }
  return result;
}

console.log(make_2gram('Javascript'));
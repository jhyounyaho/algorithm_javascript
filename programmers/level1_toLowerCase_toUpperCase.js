/*
  [Level 1] 이상한 문자 만들기(JavaScript)

  문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 
  각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 
  각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 
  바꾼 문자열을 리턴하는 함수, solution을 완성하세요.
  
  제한 사항
  문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 
  짝/홀수 인덱스를 판단해야합니다.
  첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

  입출력 예 
  s = try hello world
  return = TrY HeLlO WoRlD

  입출력 예 설명
  try hello world는 세 단어 try, hello, world로 구성되어 있습니다. 
  각 단어의 짝수번째 문자를 대문자로, 홀수번째 문자를 소문자로 바꾸면 
  TrY, HeLlO, WoRlD입니다. 
  따라서 TrY HeLlO WoRlD 를 리턴합니다.
*/

// 201123 map과 for in 을 사용한 풀이 
function solution(s) {
  // 공백을 기준으로 나눈 뒤 map 으로 배열을 돌면서 체크한다.
  return s.split(' ').map((word) => {
    // 변경된 값을 넣어줄 result 
    let result = ''; 
      // 단어의 순서별로 체크
      for (let i in word) {
        // 가공된 값을 result 에 넣어줌
        result += i % 2 === 0 
        ? word[i].toUpperCase() // 짝수는 대문자
        : word[i].toLowerCase() // 홀수는 소문자
      } 
      // 가공된 값을 리턴해준다.
      return result 
  }).join(' ');
}

// 201123 map 두번써서 사용한 풀이
function solution(s) {
  // 공백을 기준으로 나눈 뒤 map 으로 배열을 돌면서 체크한다.
  return s.split(' ').map((word) => {
    // ''을 기준으로 나눈 뒤 map 으로 단어를 돌면서 체크한다.
    return word.split('').map((v, i) => {
      // 가공된 값을 리턴해준다.
      return i % 2 === 0 ? v.toUpperCase() : v.toLowerCase();
    }).join('')
  }).join(' ');
}

function solution(s) {
  return s
    .split(" ")
    .map((word) => {
      let result = "";
      for (let i in word) {
        result += i % 2 === 0 ? word[i].toUpperCase() : word[i].toLowerCase();
      }
      return result;
    })
    .join(" ");
}

console.log(solution("try hello world")); //TrY HeLlO WoRlD

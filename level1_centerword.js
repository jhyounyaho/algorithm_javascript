/*
  [Level 1] 가운데 글자 가져오기(JavaScript)
  https://bolob.tistory.com/entry/Level-1-%EA%B0%80%EC%9A%B4%EB%8D%B0-%EA%B8%80%EC%9E%90-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0JavaScript?category=739894

  단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 
  단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

  제한사항 
  s는 길이가 1 이상, 100이하인 스트링입니다

  입출력 예
  s = "abcde" 
  return = 'c'

  s= 'qwer' 
  return = 'we
*/

// 201121 내가 푼 풀이 
function solution(s) {
    return s.length % 2 === 0
    ? s.substr(Math.ceil(s.length/2-1), 2) // 짝수
    : s.substr(Math.ceil(s.length/2-1), 1) // 홀수 
}

function solution(s) {
  let answer = "";

  if (s.length % 2 === 0) {
    // 짝홀
    answer = s.substr(s.length / 2 - 1, 2);
  } else {
    // 홀수
    answer = s.substr(Math.floor(s.length / 2), 1);
  }
  return answer;
}

// test
console.log(solution("abcde")); // return "c"
console.log(solution("qwer")); // return "we"

/*
  다른 풀이 
*/
function solution(s) {
  const mid = Math.floor(s.length / 2);
  return s.length % 2 === 1 ? s[mid] : s[mid - 1] + s[mid];
}

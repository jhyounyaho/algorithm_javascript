/*
  [Level 1] 문자열 내 p와 y의 개수(JavaScript)
  대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.
  예를 들어 s가 pPoooyY면 true를 return하고 Pyy라면 false를 return합니다.

  제한사항

  문자열 s의 길이 : 50 이하의 자연수
  문자열 s는 알파벳으로만 이루어져 있습니다.

  입출력 예 설명

  입출력 예 #1
  s = pPoooyY
  answer = true 
  'p'의 개수 2개, 'y'의 개수 2개로 같으므로 true를 return 합니다.
  
  입출력 예 #2
  s = Pyy
  answer = false
  'p'의 개수 1개, 'y'의 개수 2개로 다르므로 false를 return 합니다.
*/

// 201121 filter를 사용한 풀이
function solution(s){
    const string = s.toLowerCase().split('');
    // p 체크값 
    const pChk = string.filter((string) => string === 'p');
    // y 체크값 
    const yChk = string.filter((string) => string === 'y');
    
    // answer true / false 체크 
    return pChk.length !== yChk.length ? false : true 
}

// 201121 filter를 사용한 풀이 더 짧게
function solution(s){
    const string = s.toLowerCase().split('');
    return string.filter((string) => string === 'p').length == string.filter((string) => string === 'y').length;
}

// 다른 사람 풀이 match 사용 
function solution(s) {
  return s.match(/p/ig).length == s.match(/y/ig).length
}

// 다른 사람 풀이 split 사용 
function numPY(s) {
  return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
}

console.log(solution("pPoooyY")); //true
console.log(solution("Pyy")); //false

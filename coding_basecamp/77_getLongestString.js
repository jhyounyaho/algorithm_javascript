/*
문제77 : 가장 긴 공통 부분 문자열

**가장 긴 공통 부분 문자열(Longest Common Subsequence)**이란 A, B 두 문자열이 주어졌을 때 두 열에 공통으로 들어 있는 요소로 만들 수 있는 가장 긴 부분열을 말합니다. 여기서 부분열이란 다른 문자열에서 몇몇의 문자가 빠져 있어도 순서가 바뀌지 않은 열을 말합니다.

예를 들어 S1 = ['T', 'H', 'I', 'S', 'I', 'S', 'S', 'T', 'R', 'I', 'N', 'G', 'S']  S2 = ['T', 'H', 'I', 'S', 'I', 'S']라는 두 문자열이 있을 때 둘 사이의 부분 공통 문자열의 길이는 ['T', 'H', 'I', 'S', 'I', 'S']의 6개가 됩니다.

이처럼 **두 문자열이 주어지면 가장 긴 부분 공통 문자열의 길이를 반환하는 프로그램**을 만들어 주세요.

두 개의 문자열이 한 줄에 하나씩 주어집니다. 문자열은 알파벳 대문자로만 구성되며 그 길이는 100글자가 넘어가지 않습니다.

출력은 이 두 문자열의 가장 긴 부분 공통 문자열의 길이를 반환하면 됩니다.

**- Test Case -**

**입력**
THISISSTRINGS
THISIS

**출력**
6

**입력**
THISISSTRINGS
TATHISISKKQQAEW

**출력**
6

**입력**
THISISSTRINGS
KIOTHIKESSISKKQQAEW

**출력**
3

**입력**
THISISSTRINGS
TKHKIKSIS

**출력**
3
*/

/*
  20122 
  알게된 것
  - 공통된 문자열을 뽑을 땐 모든 경우를 고려하자 
    ABC, AB, BC, A, B, C 
  - filter로 교집합 만들자 
  - sort로 문자열 길이로 정렬 할 수 있다 
*/
function getSliceString(string) {
  let answer = [];
  for (let i = 1; i < string.length + 1; i++) {
    for (let j = 0; j < i; j++) {
      answer.push(string.slice(j, j + string.length - i + 1));
    }
  }
  return answer;
}

let string1 = 'THISISSTRINGS';
let string2 = 'THISIS';
let string1Arr = getSliceString(string1);
let string2Arr = getSliceString(string2);

// 공통 부분 문자열 찾기 - 교집합
let intersection = string1Arr.filter(x => string2Arr.includes(x));

// 문자열 길이로 내림차순 정렬 
intersection.sort((a, b) => b.length - a.length);

// 가장 긴 공통 부분 문자열 길이값 
console.log(intersection[0].length)
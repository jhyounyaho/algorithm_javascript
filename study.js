// fill() : student 라는 n개원소를 가진 배열에 1로 채워라
// student = [1, 1, 1, 1]
let student = new Array(n).fill(1);
  
// ES6 for ..in : 반복문 객체 순환
// i = 0, 1, 2, 3
for (let i in student) {
  if (student[i] == 2 && student[i - 1] == 0) {
    student[i] -= 1;
    student[i - 1] += 1;
  }
}

// ES6 for ...of : 반복문 배열 값 탐색
// s = 1, 1, 1, 1
for (let s of student) {
  if (s == 0) {
    answer--;
  }
}

// Math.max() : 최댓값
let max = Math.max(count1, count2, count3);
// Math.max.apply(null, []) : 배열에서 최댓값 구하고 싶을 경우
let max_arr = Math.max.apply(null, [1, 2, 3, 4, 5]);

// includes() : lost 배열에 i+1 이란 값이 있는지 체크
if (lost.includes(i + 1)) {
  student[i] -= 1;
}

/*
  push() : 배열에 요소 추가

  sort() : 정렬 
  var score = [4, 11, 2, 10, 3, 1]; 
  // 오류
  score.sort(); // 1, 10, 11, 2, 3, 4 
                // ASCII 문자 순서로 정렬되어 숫자의 크기대로 나오지 않음
  // 정상 동작 
  score.sort(function(a, b) { // 오름차순
      return a - b;
      // 1, 2, 3, 4, 10, 11
  });
  score.sort(function(a, b) { // 내림차순
      return b - a;
      // 11, 10, 4, 3, 2, 1
  });

  slice(start, end) 
  배열을 얕은 복사 해서 새로운 배열로 반환
  start 지정하지 않으면 인덱스 0부터 시작
  end 지정하지 않으면 배열의 길이가 됨 
  반환 타입은 배열

  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var arrSlice1 = arr.slice(1);     // [ 2, 3, 4, 5, 6, 7, 8, 9 ]
  var arrSlice2 = arr.slice(1, 0);  // []
  var arrSlice3 = arr.slice(1, -1); // [ 2, 3, 4, 5, 6, 7, 8 ]
  var arrSlice4 = arr.slice(-2);    // [ 8, 9 ]

  splice(start, end) 
  배열의 기존 요소를 추가, 변경, 삭제해 원본 배열을 변경
  start는 배열의 변경을 시작할 인덱스
  반환 타입은 배열로 제거한 요소가 있다면 반환

  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var arrSplice1 = arr.splice(1, 1); // [ 2 ]
  var arrSplice2 = arr.splice(1, 3); // [ 3, 4, 5 ]
  var arrSplice3 = arr.splice(0);    // [ 1, 6, 7, 8, 9 ]

  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var arrSplice1 = arr.splice(1, 0, '추가1');
  var arrSplice2 = arr.splice(3, 0, '추가2', '추가3', { add: '추가4' });
  // [ 1, '추가1', 2, '추가2', '추가3', { add: '추가4' }, 3, 4, 5, 6, 7, 8, 9 ]
*/
var answer = [];
for (var i = 0; i < commands.length; i++) {
  answer.push(
    array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => a - b)[
      commands[i][2] - 1
    ]
  );
}

/*
  sort 로 문자열 n번째 글자 체크해서 정렬하기 
  오름차순 기준 
  abce
  a[0] = a, a[1] = b, a[2] = c, a[3] = e
*/
function solution(strings, n) {
  strings.sort((a, b) => {
    if (a[n] === b[n]) {
      return (a > b) - (a < b);
    } else {
      return (a[n] > b[n]) - (a[n] < b[n]);
    }
  });
  console.log(strings);
  return strings;
}

/*
  sort로 객체 정렬시 Object.values(arr) 
*/
let sort_arr = Object.values(list).sort((a, b) => b.plays - a.plays);

// join() : 배열 문자열로 변경
// map() : 배열 반복문
let result = answer.map((s) => String(s)).join("");

// repeat(n) : n번 반복
String(j).repeat(4).slice(0, 4) - String(i).repeat(4).slice(0, 4);

// substr(start, length) 문자열 자르기
// 0 1 2 3 4 순서
let answer = s.substr(s.length / 2 - 1, 2);

// 짝수 홀수 체크
if (s.length % 2 === 0) {
  // 짝홀
} else {
  // 홀수
}

const x = 3.5;
Math.floor(x); // 내림 3
Math.ceil(x); // 올림 4
Math.round(x); // 반올림 4

// 대소관계 없이 주어졌을 경우
const min = a > b ? b : a;
const max = a > b ? a : b;

for (let i = min; i <= max; i++) {
  answer += i;
}

// 정규식 match 로 문자 찾고, i 로 대소문자 무시, g로 전부 찾는 코드
// 찾는 문자가 없을 경우 null 인데 바로 length 체크하면 js 에러남 null체크해줘야함
const p_chk = s.match(/p/gi);
const p = p_chk !== null ? p_chk.length : 0;

/*
  문자열 내림차순 
  split() 문자열 쪼개기
  sort()로 오름차순 정렬
  reserve()로 내림차순 정렬
  join()으로 문자열 합치기
*/
const char = s.split("").sort().reverse().join("");

/*
  parseInt 숫자만 있는지 체크 
  result = NaN 문자 있을 경우
  result == inut값  숫자만 있을 경우  
*/
console.log(parseInt("a123")); //NaN
console.log(parseInt("1234")); //1234

/*
  str into int 형변환 
  parseInt vs Number 차이 
  Number : 문자 있으면 무조건 NaN
  parseInt : 숫자로 시작하는 경우 숫자가 끝날때까지만 형변환
             숫자로 시작하지 않으면 무조건 NaN
*/
console.log(parseInt("1234원")); // 1234
console.log(parseInt("와1234원")); // NaN
console.log(Number("1234원")); // NaN

/*
  아스키코드 
  대문자(65~90)
  소문자(97~122)

  String.fromCharCode() 문자로 반환
  charCodeAt() 아스키코드로 반환
*/
for (let i in s) {
  if (s[i] === " ") {
    // 문자도 이렇게 체크
    result += " ";
  } else {
    result += String.fromCharCode(
      s.charCodeAt(i) > 90
        ? ((s.charCodeAt(i) + n - 97) % 26) + 97
        : ((s.charCodeAt(i) + n - 65) % 26) + 65
    );
  }
}

/*
  char.toLowercase()  // 대문자 변환
  char.toUpperCase    // 소문자 변환 
*/
let result = "";
result += word[i].toLowerCase();
result += word[i].toUpperCase();

/*
  map() 
  배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 
  새로운 배열을 반환합니다.

  map.map((요소, 인덱스, 배열) => { return 요소 });
*/
const int_arr = [1, 2, 3];
let map_result = int_arr.map((v) => {
  return v + 1;
});
console.log(map_result); // [2, 3, 4]

/*
  hash 사용할때 유용한 reduce 함수 
  key, value 구조 만들어줌 

  array.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값`)
*/
// 해시 사용한 풀이 - 1차원 배열
function solution(participant, completion) {
  var newList = completion.reduce((acc, c) => {
    acc[c] = acc[c] ? acc[c] + 1 : 1;
    return acc;
  }, {}); // {} 초깃값
  // newList = { eden: 1, kiki: 1 }
}

// 해시 사용한 풀이 - 2차원 배열
let list = genres.reduce((hash, g, i) => {
  if (!hash[g]) {
    hash[g] = { plays: plays[i], music: [] };
  } else {
    hash[g].plays += plays[i];
  }
  hash[g].music.push([i, plays[i]]);
  return hash;
}, {});

/*
  배열의 특정값 찾기 
  filter()
  요소들을 모아 새로운 배열로 반환

  find()
  첫번째 요소의 값을 반환, 없다면 undefined 반환 
*/

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const filter_result = words.filter((word) => word.length > 6);
console.log(filter_result);
// expected output: Array ["exuberant", "destruction", "present"]

const find_result = words.find((word) => word.length > 6);
console.log(find_result);
// expected output: "exuberant"

return participant.find((c) => {
  if (newList[c]) {
    newList[c] -= 1;
  } else {
    return true;
  }
});

/*
  자연수 > 배열 변환 방법 
  reverse() 배열 순서 뒤집기 
  Number() 문자열 숫자 변경 
*/
function solution(n) {
  // n 이 자연수일때 배열로 변환하는 법
  let n_arr = [...(n + "")];
  // reverse() 배열 순서 뒤집기
  n_arr = n_arr.reverse();
  for (let i in n_arr) {
    // Number() 문자열 숫자 변경
    n_arr[i] = Number(n_arr[i]);
  }
  return n_arr;
}
console.log(solution(12345));

/*
  Math.sqrt(대상숫자)  제곱근 구하는 함수 
  Math.pow(대상숫자, 거듭제곱 횟수) 제곱 구하는 함수
  Number.isInteger 정수 만들어줌 
*/
function solution(n) {
  let chk_num = Math.sqrt(n);

  // 자연수 체크
  //return chk_num % 1 === 0 ? Math.pow(chk_num += 1, 2) : -1;
  return Number.isInteger(chk_num) ? Math.pow(chk_num + 1, 2) : -1;
}

/*
  Set 객체는 자료형에 관계 없이 
  원시 값과 객체 참조 모두 '유일한 값'을 저장 할 수 있다.
*/
temp = [1, 1, 2, 3, 4, 4, 5]
const answer = [...new Set(temp)] // [1, 2, 3, 4, 5]

/*
  array item add / remove 
  pop(): Remove an item from the end of an array.
  push(): Add items to the end of an array.
  shift(): Remove an item from the beginning of an array.
  unshift(): Add items to the beginning of an array.
  => stack, queue 를 구할때 유용함 

  queue FIFO 선입선출  
  - unshift() 선입  
  - shift() 선출  

  stack LIFO 후입선출   
  - push() 후입   
  - shift() 선출  
*/
const arr = [1, 2, 3];
arr.push('push'); // [1, 2, 3, 'push']
arr.pop() // [1, 2, 3]
arr.unshift('unshift') // ['unshift', 1, 2, 3]
arr.shift() // [1, 2, 3]

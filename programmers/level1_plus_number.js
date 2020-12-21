/*
  [Level 1] 자릿수 더하기(JavaScript)

  자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 
  solution 함수를 만들어 주세요.
  예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.
  
  제한사항
  N의 범위 : 100,000,000 이하의 자연수

  입출력 예 
  n = 123
  answer = 6 
  1 + 2 + 3 = 6이므로 6를 return 하면 됩니다
*/

// 201123 for of 를 사용한 풀이
function solution(n) {
    let answer = 0;
    for (let i of String(n)) {
      answer += parseInt(i)
    }
    return answer;
}

// 201123 reduce를 사용한 풀이
function solution(n) {
  return String(n).split('').reduce((result, value) => {
    return result += parseInt(value, 10)        
  }, 0)
}

// 201123 map을 사용한 풀이
function solution(n) {
  let answer = 0;
  String(n).split('').map((num) => answer += parseInt(num))
  return answer 
}


function solution(n) {
  let sum = 0;

  while (n > 0) {
    sum += n % 10;
    n = parseInt(n / 10);
  }
  return sum;
}

console.log(solution(123)); // 3 + 2 + 1
console.log(solution(987));

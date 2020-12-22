/*
  [level2] N개의 최소공배수 

  문제 설명
  두 수의 최소공배수(Least Common Multiple)란 입력된 두 수의 배수 중 공통이 되는 가장 작은 숫자를 의미합니다. 예를 들어 2와 7의 최소공배수는 14가 됩니다. 정의를 확장해서, n개의 수의 최소공배수는 n 개의 수들의 배수 중 공통이 되는 가장 작은 숫자가 됩니다. n개의 숫자를 담은 배열 arr이 입력되었을 때 이 수들의 최소공배수를 반환하는 함수, solution을 완성해 주세요.

  제한 사항
  arr은 길이 1이상, 15이하인 배열입니다.
  arr의 원소는 100 이하인 자연수입니다.

  입출력 예
  arr	        result
  [2,6,8,14]	168
  [1,2,3]	    6
*/

/*
  201221 
  유클리드 호제법을 사용한 최소공배수 알고리즘
  - 함수선언문은 호이스팅이 됨으로 함수선언문은 상단에 선언
  - 최대공약수를 구할 수 있는 방법 
    1. while문
    2. 재귀함수 
*/
// 최대공약수 - while 
function gcd(minNum, maxNum) {
  while(maxNum > 0) {
      let temp = maxNum;
      maxNum = minNum % maxNum;
      minNum = temp;
  }
  return minNum;
}

// 최대공약수 - 재귀함수  
function gcd(minNum, maxNum) {
  return (minNum % maxNum) === 0 
    ? maxNum
    : gcd(maxNum, minNum % maxNum)
}

// 최소공배수 = 두 수의 곱 / 최대공약수 
function lcm(minNum, maxNum) {
  return (minNum * maxNum) / gcd(minNum, maxNum)
}

function solution(arr) {
  let answer = 1;
  
  for (let i = 0; i < arr.length; i++) {
      answer = lcm(answer, arr[i]);
  }
  
  return answer;
}

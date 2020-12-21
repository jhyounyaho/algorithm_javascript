/*
  level2 피보나치수

  문제 설명
  피보나치 수는 F(0) = 0, F(1) = 1일 때, 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수 입니다.

  예를들어

  F(2) = F(0) + F(1) = 0 + 1 = 1
  F(3) = F(1) + F(2) = 1 + 1 = 2
  F(4) = F(2) + F(3) = 1 + 2 = 3
  F(5) = F(3) + F(4) = 2 + 3 = 5
  와 같이 이어집니다.

  2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567으로 나눈 나머지를 리턴하는 함수, solution을 완성해 주세요.

  제한 사항
  * n은 1이상, 100000이하인 자연수입니다.

  입출력 예
  n	return
  3	2
  5	5
  입출력 예 설명
  피보나치수는 0번째부터 0, 1, 1, 2, 3, 5, ... 와 같이 이어집니다.
*/

/*
  201221 
  피보나치수열 알고리즘 - 반복문 for문 
  피보나치수열 배열로 체크
  -> 값의 흐름을 볼 수 있는 이게 더 마음에 든다 
*/
function solution(n) {
    let answer = 0;
    let pibo = [0, 1];
    
    for (let i = 2; i < n + 1; i++) {
        pibo[i] = (pibo[i-2] + pibo[i-1]) % 1234567;
    }
    
    answer = pibo[n];
    return answer;
}

/*
  201221 
  피보나치수열 알고리즘 - 반복문 for문 
  피보나치수열 변수로 체크
*/
function solution(n) {
    let num1 = 0;
    let num2 = 1;
    let sum = 1; 
    
    for (let i = 2; i <= n; i++) {
        sum = (num1 + num2) % 1234567;
        num1 = num2;
        num2 = sum;
    }
    
	return sum;    
}
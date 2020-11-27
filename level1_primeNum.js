/*
  [level1] 소수 찾기

  문제 설명
  1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

  소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
  (1은 소수가 아닙니다.)

  제한 조건
  n은 2이상 1000000이하의 자연수입니다.

  입출력 예
  n	result
  10	4
  5	3

  입출력 예 설명
  입출력 예 #1
  1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환

  입출력 예 #2
  1부터 5 사이의 소수는 [2,3,5] 3개가 존재하므로 3를 반환
*/

// 내 풀이 - 시간초과
function solution(n) {
  let answer = 0;

  for (let i = 2; i <= n; i++) {
    let primeNum = true;
    // 나눠 떨어지지 않으면 소수 
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
          primeNum = false;
      } 
    }  
    if (primeNum) answer+=1; 
  }
  return answer;
}

/*
  다른 사람 풀이 - 에라토스테네스의 체
  소수를 구하고자 하는 범위 n~2이 있을 때, 
  2~n의 제곱근에 해당하는 범위 안의 소수의 배수들을 계속 제외하면
  결국 소수만 남는다.
*/
function solution(n) {
    // primeArr 배열 0~10 까지 true 값을 채워 넣는다.
    let primeArr = new Array(n+1).fill(true).fill(false, 0, 2);

    // 10일 경우 2, 3 의 제곱근만 체크하면된다
    for (let i = 2; i * i <= n; i++) {
        if (primeArr[i]) {
        	for (let j = i * i; j <= n; j+=i) {
            // 2의 배수 2, 4, 8, 10
            // 3의 배수 3, 6, 9
            primeArr[j] = false
          }    
        }
    }
	return primeArr.filter(e => e).length; 
    
}

// 
// 에라토스테네스의 체 
// n int 소수를 구하려는 대상  
// returnArr arr n의 소수 배열 
function makePrimeNum(n) {
    let primeArr = new Array(n+1).fill(true).fill(false, 0, 2);
    let returnArr = [];
    for (let i=2; i * i <= n; i++) {
       for (let j=i*i; j <= n; j+=i) {
           primeArr[j] = false;
       }
    }
    
    for (let i in primeArr) {
       if (primeArr[i] === true) {
           returnArr.push(Number(i))
       } 
    }
    return returnArr;
}
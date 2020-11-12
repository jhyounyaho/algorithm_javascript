/*
  문제69 : 골드바흐의 추측

  골드바흐의 추측(Goldbach's conjecture)은 오래전부터 알려진 정수론의 미해결 문제로, 2보다 큰 모든 짝수는 두 개의 소수(Prime number)의 합으로 표시할 수 있다는 것이다. 이때 하나의 소수를 두 번 사용하는 것은 허용한다. - 위키백과
  위 설명에서 2보다 큰 모든 짝수를 두 소수의 합으로 나타낸 것을 골드바흐 파티션이라고 합니다.

  예)
  100 == 47 + 53
  56 == 19 + 37

  2보다 큰 짝수 n이 주어졌을 때, 골드바흐 파티션을 출력하는 코드를 작성하세요. 
  * 해당 문제의 출력 형식은 자유롭습니다. 가능하시다면 골드바흐 파티션 모두를 출력하거나, 그 차가 작은 것을 출력하거나 그 차가 큰 것 모두 출력해보세요.
*/

function prime_list(n){
  //에라토스테네스의 체 초기화: n개 요소에 True 설정(소수로 간주)
  let sieve = []
  for(let i = 2; i < n; i++){
    sieve.push(true);
  }

  //n의 최대 약수가 sqrt(n) 이하이므로 i=sqrt(n)까지 검사
  let m = parseInt(n ** 0.5, 10);
  for(let i = 2; i < m + 1; i++){
      if (sieve[i] == true){      // i가 소수인 경우 
        for(let j = i+i; j < n; j+=i){ // i이후 i의 배수들을 False 판정
              sieve[j] = false;
          } 
      }
  }
  // 소수 목록 산출
  let 소수목록 = [];
  for(let i = 2; i < n; i++){
    if (sieve[i] == true){
      소수목록.push(i)
    }
  }
  return 소수목록;
}

const primeNum = prime_list(100);
const num = 100;
let goldArr = [];

for (let i of primeNum) {
  if (primeNum.includes(num - i) && (num - i) < num/2) {
    goldArr.push([i, num-i]);
  }
}
console.log(goldArr)
// [[53, 47], [59, 41], [71, 29], [83, 17], [89, 11], [97, 3]]


let diffArr = goldArr.map(e => e[0] - e[1]);
console.log(diffArr) // [6, 18, 42, 66, 78, 94]

let diffMin = diffArr.indexOf(Math.min.apply(null, diffArr));
let diffMax = diffArr.indexOf(Math.max.apply(null, diffArr));
console.log('골드바흐파티션 차 최솟값', goldArr[diffMin]) // [53, 47]
console.log('골드바흐파티션 차 최댓값', goldArr[diffMax]) // [97, 3]


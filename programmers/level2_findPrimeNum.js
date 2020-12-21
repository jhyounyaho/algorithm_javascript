/*
    1. numbers에서 만들어질 수 있는 모든 경우의 수 구하기
    2. 에라토스테네스의 체에서 소수가 맞는지 확인하기
*/

// 201127 어렵다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! keep해두고 나중에 다시 풀어보쟈 ㅠㅠ 
function solution(numbers) {
    let answer = 0;
    // string -> arr 변환 
    const numbersArr = numbers.split('').sort((a, b) => a - b); 
    // 중복값 방지 Set 객체 
    let nums = new Set();
    
    for (let i in numbersArr) {
      nums.add(parseInt(numbersArr[i], 10))
      for (let j = parseInt(i, 10) + 1; j <= numbersArr.length - 1; j++) {
        nums.add(parseInt(numbersArr[i] + numbersArr[j], 10))
      }
    }
    
    let newArr = [...nums];
    newArr.map((num) => chkPrime(num) && answer++);
    
    function chkPrime(num) {
      if (num < 2) return false;
      if (num === 2) return true;
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num%i===0) return false;
        }
      return true;
    }
    
    return answer;
}
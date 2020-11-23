/*
    [level1] 하샤드 수  

    문제 설명
    양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.

    제한 조건
    x는 1 이상, 10000 이하인 정수입니다.

    입출력 예
    arr	return
    10	true
    12	true
    11	false
    13	false

    입출력 예 설명
    입출력 예 #1
    10의 모든 자릿수의 합은 1입니다. 10은 1로 나누어 떨어지므로 10은 하샤드 수입니다.

    입출력 예 #2
    12의 모든 자릿수의 합은 3입니다. 12는 3으로 나누어 떨어지므로 12는 하샤드 수입니다.

    입출력 예 #3
    11의 모든 자릿수의 합은 2입니다. 11은 2로 나누어 떨어지지 않으므로 11는 하샤드 수가 아닙니다.

    입출력 예 #4
    13의 모든 자릿수의 합은 4입니다. 13은 4로 나누어 떨어지지 않으므로 13은 하샤드 수가 아닙니다.
*/

// 201123풀이 reduce로 합계 구하기 
function solution(x) {
    // 자릿수의 합 구하기 
    const sum = String(x).split('').reduce((sum, value) => { return sum + parseInt(value, 10) }, 0)
    return x % sum === 0 ? true : false; 
}

// 첫번째 풀이 미통과 
// => 두번째 자릿수까지만 고려되었음
function solution(x) {
    return x % (parseInt(String(x).slice(0,1), 10) + parseInt(String(x).slice(1,2), 10)) === 0
    ? true
    : false 
}

// 두번째 풀이 통과 for of 로 합계 구하기 
function solution(x) {
    let sum = 0;
    
    // for문 돌면서 각자릿수의 합을 구한다.
    for(let i of String(x)) {
        sum += parseInt(i, 10);
    }
    
    return x % sum === 0 ? true : false; 
}

// 다른 사람 풀이   
// => reduce 공부를 더하자 !
function solution(x) {
  const sum = String(x).split('').reduce((a,b) => +b + +a );
  return x % sum === 0 ? true : false; 
}
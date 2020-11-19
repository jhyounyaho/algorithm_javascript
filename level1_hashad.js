// 첫번째 풀이 미통과 
// => 두번째 자릿수까지만 고려되었음
function solution(x) {
    return x % (parseInt(String(x).slice(0,1), 10) + parseInt(String(x).slice(1,2), 10)) === 0
    ? true
    : false 
}

// 두번째 풀이 통과 
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
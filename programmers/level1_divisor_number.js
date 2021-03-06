/*
  [Level 1] 나누어 떨어지는 숫자 배열(JavaScript)
  
  array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
  divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.제한사항

  arr은 자연수를 담은 배열입니다.
  정수 i, j에 대해 i ≠ j 이면 arr[i] ≠ arr[j] 입니다.
  divisor는 자연수입니다.
  array는 길이 1 이상인 배열입니다.

  입출력 예 설명

  입출력 예#1
  arr = [5, 9, 7, 10]
  divisior = 5
  return = [5, 10]
  arr의 원소 중 5로 나누어 떨어지는 원소는 5와 10입니다. 따라서 [5, 10]을 리턴합니다.
  
  입출력 예#2
  arr = [2, 36, 1, 3]
  divisior = 1 
  return [1, 2, 3, 36]
  arr의 모든 원소는 1으로 나누어 떨어집니다. 원소를 오름차순으로 정렬해 [1, 2, 3, 36]을 리턴합니다.
  
  입출력 예#3
  arr= [3, 2, 6]
  divisior = 10
  return = [-1]
  3, 2, 6은 10으로 나누어 떨어지지 않습니다. 나누어 떨어지는 원소가 없으므로 [-1]을 리턴합니다.
*/

// 201121 filter 를 사용한 풀이 
function solution(arr, divisor) {
  // filter()를 사용하여 조건에 맞는 요소 반환 
  let answer = arr.filter((value) => value % divisor === 0); 
  return answer.length > 0 ? answer.sort((a,b) => a - b) : [-1];
}

// 201121 map 를 사용한 풀이 
function solution(arr, divisor) {
    let answer = [];
    // map()을 사용하여 조건에 맞는 요소 return  
    arr.map((value) => value % divisor === 0 && answer.push(value)); 
  	return answer.length > 0 ? answer.sort((a,b) => a - b) : [-1];
}

// for in 을 사용한 풀이 
function solution(arr, divisor) {
  let result = [];

  for (let i in arr) {
    if (arr[i] % divisor === 0) {
      result.push(arr[i]);
    }
  }

  result.length === 0 ? result.push(-1) : result.sort((a, b) => a - b);
  return result;
}

solution([5, 9, 7, 10], 5); // [5, 10]
solution([2, 36, 1, 3], 1); // [1, 2, 3, 38]
solution([3, 2, 6], 10); // [-1]

/*
  다른 풀이 
*/
function solution(arr, divisor) {
  let result = arr.filter((v) => v % divisior === 0);

  return result.length === 0 ? [-1] : result.sort((a, b) => a - b);
}

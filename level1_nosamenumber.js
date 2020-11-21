/*
  [Level 1] 같은 숫자는 싫어(JavaScript)
  https://bolob.tistory.com/entry/Level-1-%EA%B0%99%EC%9D%80-%EC%88%AB%EC%9E%90%EB%8A%94-%EC%8B%AB%EC%96%B4JavaScript?category=739894

  배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,
  arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
  arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.
  배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.

  제한사항

  배열 arr의 크기 : 1,000,000 이하의 자연수
  배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수

  입출력 예 
  arr = [1,1,3,3,0,1,1]
  answer = [1,3,0,1]
*/

// 201121 내가 푼 풀이 
function solution(arr) {
    let answer = [];
    for (let i = 0; i < arr.length; i++) {
      // 앞 뒤로 비교해서 다를 경우에만 넣어줌
      if (arr[i] !== arr[i+1]) {
        answer.push(arr[i]) 
      }
    }
    return answer;
}

// 다른풀이 filter를 사용해줌 
function solution(arr) {
  // 현재값과 다음값이 다를 경우에만 리턴함
  return arr.filter((val, index) => val != arr[index + 1]);
}

// 나는 주로 for문을 돌려서 계산. 
// reduce, map, filter공부를 더해야겠다 


function solution(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    // 앞 뒤로 비교해서 다를 경우에만 넣어줌
    if (arr[i] !== arr[i + 1]) {
      result.push(arr[i]);
    }
  }
  console.log(result);
  return result;
}

solution([1, 1, 3, 3, 0, 1, 1]); // [1, 3, 0, 1]
solution([4, 4, 4, 3, 3]); // [4, 3]

/*
  다른 풀이 
*/
function solution(arr) {
  let answer = [];
  // 첫번째를 now로 설정해서 무조건 넣어줌
  let now = arr[0];
  answer.push(now);

  for (var i = 1; i < arr.length; i++) {
    if (now !== arr[i]) {
      // now랑 비교해서 다를 경우에만 넣어줌
      now = arr[i];
      answer.push(now);
    }
  }
  return answer;
}


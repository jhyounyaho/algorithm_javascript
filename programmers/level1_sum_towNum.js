/*
  [level1] 두개 뽑아서 더하기 

  문제 설명
  정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

  제한사항
  numbers의 길이는 2 이상 100 이하입니다.
  numbers의 모든 수는 0 이상 100 이하입니다.
  입출력 예
  numbers	result
  [2,1,3,4,1]	[2,3,4,5,6,7]
  [5,0,2,7]	[2,5,7,9,12]
  입출력 예 설명
  입출력 예 #1

  2 = 1 + 1 입니다. (1이 numbers에 두 개 있습니다.)
  3 = 2 + 1 입니다.
  4 = 1 + 3 입니다.
  5 = 1 + 4 = 2 + 3 입니다.
  6 = 2 + 4 입니다.
  7 = 3 + 4 입니다.
  따라서 [2,3,4,5,6,7] 을 return 해야 합니다.
  입출력 예 #2

  2 = 0 + 2 입니다.
  5 = 5 + 0 입니다.
  7 = 0 + 7 = 5 + 2 입니다.
  9 = 2 + 7 입니다.
  12 = 5 + 7 입니다.
  따라서 [2,5,7,9,12] 를 return 해야 합니다.
*/

function solution(numbers) {
  // 리턴할 결과값 빈 배열 
  let answer = [];
  
  // for문 돌면서 값을 더해준다.
  for(let i = 0; i < numbers.length; i++) {
    // j는 i보다 1 커야 중복값 방지된다.
    for(let j = i + 1; j < numbers.length; j++) {
      let sumNum = numbers[i] + numbers[j];

      // answer 배열에 없으면 push 해준다. 
      if (!answer.includes(sumNum)) {
          answer.push(sumNum);
      }
    }
  }
  // 오름차순 
  return answer.sort((a, b) => a - b);
}


// 다른사람 풀이
function solution(numbers) {
    let temp = []

    for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        // temp 에 합을 모두 push 해준다.
        temp.push(numbers[i] + numbers[j])
      }
    }

    // Set 객체는 자료형에 관계 없이 원시 값과 객체 참조 모두 유일한 값을 저장 할 수 있다.
    const answer = [...new Set(temp)]

    return answer.sort((a, b) => a - b)
}
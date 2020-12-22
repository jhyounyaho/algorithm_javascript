/*
  문제79 : 순회하는 리스트

  다음의 값이 주어졌을 때
  l = [10, 20, 25, 27, 34, 35, 39]

  n번 순회를 결정합니다. 예를 들어 2번 순회하면
  l = [35, 39, 10, 20, 25, 27, 34]

  여기서 변하기 전 원소와 변한 후 원소의 값의 차가 가장 작은 값을 출력하는 프로그램을 작성하세요.

  예를 들어 2번 순회했을 때 변하기 전의 리스트와 변한 후의 리스트의 값은 아래와 같습니다.

  **순회전_리스트 = [10, 20, 25, 27, 34, 35, 39]
  순회후_리스트 = [35, 39, 10, 20, 25, 27, 34]
  리스트의_차 = [25, 19, 15, 7, 9, 8, 5]**

  39와 변한 후의 34 값의 차가 5이므로 리스트의 차 중 최솟값입니다. 따라서 39와 34의 인덱스인 6과 39와 34를 출력하는 프로그램을 만들어주세요.

  입력
  순회횟수는 : 2

  출력
  index : 6
  value : 39, 34
  ---
  입력
  순회횟수는 : 3

  출력
  index : 5
  value : 35, 25
*/

function rotate(inL, inN){
  let answer = [];
  const beforeInl = [...inL];
  let afterInl = inL;
  
  // inN 만큼 순회 
  for (let i = 1; i <= inN; i++) {
    let first = afterInl.pop();
    afterInl.unshift(first)
  }

  // 순회전 - 순회후 의 절대값 
  let diffInl = afterInl.reduce((pre, val, index) => {
    pre.push(Math.abs(afterInl[index] - beforeInl[index]));
    return pre;
  }, [])

  // 최솟값
  const minDiff = Math.min.apply(null, diffInl);
  // 최솟값의 인덱스 
  const minIndex = diffInl.indexOf(minDiff);
  answer.push(minIndex, beforeInl[minIndex], afterInl[minIndex]);
  
  console.log(beforeInl, afterInl, diffInl, answer);
  /*
    beforeInl = [10, 20, 25, 27, 34, 35, 39]
    afterInl = [35, 39, 10, 20, 25, 27, 34]
    diffInl = [25, 19, 15, 7, 9, 8, 5]
    answer = [6, 39, 34] // 최솟값의 인덱스, beforeInl 값, afterInl 값 
  */
  return answer;
}

const inL = [10, 20, 25, 27, 34, 35, 39 ];
const inN = 2;
rotate(inL, inN)






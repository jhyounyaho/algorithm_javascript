/*
  문제65 : 변형된 리스트

  a = [1, 2, 3, 4]
  b = [a, b, c, d]
  이런 리스트가 있을 때 [[1, a], [b, 2], [3, c], [d, 4]] 이런 식으로 a, b 리스트가 번갈아가면서 출력되게 해주세요.
*/

const a = [1, 2, 3, 4]
const b = ['a', 'b', 'c', 'd'];
let result = [];

for(let i=0; i < a.length; i++) {
  // 홀수번째 a, b 순서
  // 짝수번째 b, a 순서 
  // 가 들어 갈 수 있는 이중배열을 만들어준다.
  result[i] = i % 2 !== 0 ? [a[i], b[i]] : [b[i], a[i]];
}

console.log(result)

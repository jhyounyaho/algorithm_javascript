/*
  문제66 : 블럭탑쌓기

  탑을 쌓기 위해 각 크기별로 준비된 블럭들을 정해진 순서에 맞게 쌓아야 합니다.
  순서에 맞게 쌓지 않으면 무너질 수 있습니다.

  예를 들면 정해진 순서가 BAC 라면 A 다음 C가 쌓아져야 합니다.
  선행으로 쌓아야 하는 블럭이 만족된 경우라면 탑이 무너지지 않습니다.

  - B를 쌓지 않아도 A와 C를 쌓을 수 있습니다.
  - B 다음 블럭이 C가 될 수 있습니다.

  쌓아져 있는 블럭 탑이 순서에 맞게 쌓아져 있는지 확인하세요.

  1. 블럭은 알파벳 대문자로 표기합니다.
  2. 규칙에 없는 블럭이 사용될 수 있습니다.
  3. 중복된 블럭은 존재하지 않습니다.

  **입력**
  탑 = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"]
  규칙 = "ABD"

  **출력**
  ["가능", "불가능", "가능", "가능", "가능"]
*/

const allBlocks = ['ABCDEF', 'BCAD', 'ADEFQRX', 'BEDFG', 'AEBFDGCH'];
const chkBlock = 'ABCD';

function solution(allBlocks, chkBlock){
  let result = []; // 값들어갈 빈배열 
  for (let i of allBlocks) {
    result.push(orderChk(i, chkBlock));
  }
  return result;
} 

// 문자열 순서 체크 함수 
function orderChk(blocks, chkBlock) {
  let chkIndex = chkBlock.indexOf(chkBlock[0]);
  for (let i of blocks) {
    if (chkBlock.includes(i)) {
      // index 순서가 증가하면 정상적인 순서, 감소하면 !정상적인 순서 
      if (chkIndex > chkBlock.indexOf(i)){
        return '불가능'
      }
      // 체크 할 인덱스 값을 변경해준다. 
      chkIndex = chkBlock.indexOf(i)
    }
  }
  return '가능'
}

console.log(solution(allBlocks, chkBlock));
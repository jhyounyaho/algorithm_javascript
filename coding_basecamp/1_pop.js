/*
  문제1 : 배열의 삭제
  다음 배열에서 400, 500를 삭제하는 code를 입력하세요.
 */

/*
  CASE1 pop 을 사용하여 요소 삭제
  pop() 메서드는 배열에서 마지막 요소를 제거하고 그 요소를 반환한다.
  -> 기존 배열을 수정한다. 
*/
let nums = [100, 200, 300, 400, 500];
nums.pop()
nums.pop()
console.log(nums); // [100, 200, 300]

/*
  CASE2 filter 를 사용하여 요소 삭제 
  filter(value, index, array) 
  value : 값
  index : 인덱스
  array : 원 배열 
  메서드는 콜백함수에 지정된 조건에 맞는 요소를 새롭게 반환한다.
  -> 기존 배열을 수정하지 않는다. 
*/
const nums2 = [100, 200, 300, 400, 500];
const result = nums2.filter(number => number !== 400 && number !== 500)
const result2 = nums2.filter(number => number <= 300);


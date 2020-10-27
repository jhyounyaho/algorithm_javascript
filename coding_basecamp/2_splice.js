/*
  문제2 : 배열의 내장함수
  <pass>부분에 배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요.

  **데이터**
  var arr = [200, 100, 300];
  //pass
  console.log(arr);

  **출력**
  [200, 100, 10000, 300]
*/

/*
  splice(start, delegate_count, item)
  start           : 배열의 변경을 시작할 인덱스 
                    음수일 경우 배열의 끝에서 부터 요소를 센다. 
  delegate_count  : 배열에서 제거할 요소의 수 
  item            : 배열에 추가할 요소 
*/
var arr = [200, 100, 300];
//pass
arr.splice(3, 0, 10000)
console.log(arr); // [200, 100, 10000, 300]

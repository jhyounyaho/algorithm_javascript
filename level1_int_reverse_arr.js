/*
  [level1] 

  문제 설명
  자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

  제한 조건
  n은 10,000,000,000이하인 자연수입니다.

  입출력 예
  n	return
  12345	[5,4,3,2,1]
*/

// 201123 map 사용하여 풀이 
// 배열로 만든 후 reverse를 이용하여 뒤집어준후 map으로 배열 돌면서 string -> int 변경
function solution(n) {
  return String(n).split('').reverse().map((num) => parseInt(num, 10))
}

// 예전 풀이 
function solution(n) {
  let n_arr = [...(n + "")];
  n_arr = n_arr.reverse();
  for (let i in n_arr) {
    n_arr[i] = Number(n_arr[i]);
  }
  return n_arr;
} 
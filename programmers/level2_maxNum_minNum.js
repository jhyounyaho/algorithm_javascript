/*
  [level2] 최댓값과 최솟값
  
  문제 설명
  문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 (최소값) (최대값)형태의 문자열을 반환하는 함수, solution을 완성하세요.
  예를들어 s가 1 2 3 4라면 1 4를 리턴하고, -1 -2 -3 -4라면 -4 -1을 리턴하면 됩니다.

  제한 조건
  s에는 둘 이상의 정수가 공백으로 구분되어 있습니다.

  입출력 예
  s       	    return
  1 2 3 4	      1 4
  -1 -2 -3 -4	  -4 -1
  -1 -1	        -1 -1
*/

/*
  201219 풀이
  최댓값 최솟값 shift, pop 으로 구함 
  => 이게 더 직관적 
*/
function solution(s) {
  let answer = [];
  // 문자열을 배열로 만들어준 뒤 오름차순 정렬 
  const sortS = s.split(' ').sort((a, b) => a - b); 
  
  if (sortS.length > 2) {
    // 최솟값 shift 
    const minS = sortS.shift();
    // 최댓값 pop 
    const maxS = sortS.pop();
    // answer 에 push 
    answer.push(minS, maxS); 
    return answer.join(' ');
  } else {
    // 원소가 2개 이하는 그대로 리턴
    return s    
  }    
}

/*
  201219 풀이
  최댓값 최솟값 [0], [s.length -1] 으로 구함 
  => 이게 조금 더 빠름 
*/
function solution(s) {
  let answer = [];
  const sortS = s.split(' ').sort((a, b) => a - b); 
  
  if (sortS.length > 2) {
    // 첫번째 원소 최솟값, 마지막 원소 최댓값
    answer.push(sortS[0], sortS[sortS.length - 1]); 
    return answer.join(' ');
  } else {
    return s    
  }    
}

/*
  참고한 풀이
  => 최댓값  최솟값은 min, max 를 활용하자 
  => 훨씬 빠르고 코드도 간결해짐
*/
function solution(s) {
  const sortS = s.split(' '); 
  return Math.min(...sortS) + ' ' + Math.max(...sortS);
}
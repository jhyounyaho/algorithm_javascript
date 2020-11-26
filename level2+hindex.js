/*

*/

/*
  201126 풀이 - 정확성실패 

  h회 이상 인용된 논문을 배열하여 
  h >= 전체논문수 - h
  만족하면 return h
  불만족하면 h--
  하는 로직이었으나 실패 ..   

  느낀점
  - 배열을 sort로 빠르게 체크 할수 있는지 보자 
  - 반복문은 for가 능사는 아니다. 하나씩 다 돌아야되는게 아니라면 
    while문을 사용하자 
*/
function solution(citations) {
  // h-index
  for (let h = citations.length; h >= 1; h--) {
    // h회 이상 인용된 논문 배열 
    const hFilter = citations.filter((v) => v >= h)  
    // h >= 전체 논문수 - h
    if (hFilter.length >= citations.length - hFilter.length) {
      return h;
    }
  }
}

// 201126 다른 사람 풀이 참고 
function solution(citations) {
    // 내림차순 
    citations.sort((a, b) => b - a);
    let h = 0;
   	
    // 논문 인용횟수를 하나씩 돌면서, h회 이상 인용된 논문이 h개 보다 같거나 클 때를 구해준다 
    while(h + 1 <= citations[h]) {
        h++;
    }
    return h;
}
/*
  [level2] 카펫 (완전탐색)

  문제 설명
  Leo는 카펫을 사러 갔다가 아래 그림과 같이 중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.

  Leo는 집으로 돌아와서 아까 본 카펫의 노란색과 갈색으로 색칠된 격자의 개수는 기억했지만, 전체 카펫의 크기는 기억하지 못했습니다.

  Leo가 본 카펫에서 갈색 격자의 수 brown, 노란색 격자의 수 yellow가 매개변수로 주어질 때 카펫의 가로, 세로 크기를 순서대로 배열에 담아 return 하도록 solution 함수를 작성해주세요.

  제한사항
  갈색 격자의 수 brown은 8 이상 5,000 이하인 자연수입니다.
  노란색 격자의 수 yellow는 1 이상 2,000,000 이하인 자연수입니다.
  카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다.

  입출력 예
  brown	yellow	return
  10	2	[4, 3]
  8	1	[3, 3]
  24	24	[8, 6]
*/

/*
  201126 실패
  m > n
  brown + yellow = m * n 
  까지만 생각했음 ㅠㅠ 

  -> 조금만 더 생각해보자 
  (brown + yellow) % m === 0 
  brown = m * n
  yellow = (m-2) * (n-2)

  -> 공식 or 패턴 생각해 낸 후 코딩으로 구현해보자  
  
  결론 : 조금만 더 생각해보자 
*/
function solution(brown, yellow) {
    // 가로, 세로는 최소 3 이상은 되어야 한다. 
    for (let n = 3; n <= brown + yellow; n++) {
      let m = (brown + yellow) % n === 0 ? (brown + yellow) / n : 0;

      // m, n 이 나눠 떨어지는 경우에만 추가 체크해준다.  
      if (m > 0 && ((m-2) * (n-2) === yellow)) {
        return [m, n] 
      }
    }
}

/*
  다른 사람 풀이 참고
  m > n
  yellow = m * n
  brown = (m + 2) * (n + n) - yellow
  (m + 2) * (n + 2) = yellow + brown
*/
function solution(brown, yellow) {
    let n = 0;
    // m > n 임으로 m-- 로 체크  
    for (let m = yellow; m >= 1; m--) {
        n = Math.floor(yellow / m);
        if (yellow % m === 0 && ((m+2) * (n+2) === (brown + yellow))) return [m+2, n+2]
    }
    
}











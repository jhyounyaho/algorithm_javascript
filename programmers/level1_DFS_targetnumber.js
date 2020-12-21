/*
  깊이/너비 우선 탐색(DFS/BFS)
  [level1] 타겟 넘버 

  n개의 음이 아닌 정수가 있습니다. 
  이 수를 적절히 더하거나 빼서 타겟 넘버를 만들려고 합니다. 
  예를 들어 [1, 1, 1, 1, 1]로 숫자 3을 만들려면 다음 다섯 방법을 쓸 수 있습니다.
  -1+1+1+1+1 = 3
  +1-1+1+1+1 = 3
  +1+1-1+1+1 = 3
  +1+1+1-1+1 = 3
  +1+1+1+1-1 = 3
  사용할 수 있는 숫자가 담긴 배열 numbers, 타겟 넘버 target이 매개변수로 주어질 때 
  숫자를 적절히 더하고 빼서 타겟 넘버를 만드는 방법의 수를 return 하도록 solution 함수를 작성해주세요.

  제한사항
  주어지는 숫자의 개수는 2개 이상 20개 이하입니다.
  각 숫자는 1 이상 50 이하인 자연수입니다.
  타겟 넘버는 1 이상 1000 이하인 자연수입니다.

  입출력 예
  numbers	        target	return
  [1, 1, 1, 1, 1]	 3	    5

  풀이
  탐색수
  한숫자당 +, - 두가지 경우의 수 
  = 2 * 2 * 2 *...n
  = 2^n
  => DFS 알고리즘 이용 

  DFS 깊이우선탐색 알고리즘?
  그래프에서 다른 노드를 방문하기 전에 
  하나의 노드를 깊게 파고들며 순회하는 검색 알고리즘이다.

  최상위 노트에서 연결된 자식 노드를 모두 탐색한 후, 
  더 이상 자식 노드가 없을 때 
  인접한 상위 노드의 형제 노드를 방문한다. 
  해당 형제 노드에서도 자식 노드를 탐색하고, 
  더 이상 자식노드가 없을 경우 다시 인접한 상위 형제의 노드를 
  방문하는 알고리즘이다.
  => javascript 에서는 재귀함수를 이용하여 DFS 구현 가능 

  자식 노드를 탐색하는 함수를 스택에 추가한 뒤, 
  더 이상 자식 노드가 없을 때 
  마지막에 추가된 자식 노드 먼저실행 후 
  스택에서 제거하는 후입선출(LIFO) 방식이 이용된다.

  DFS, BFS의 목적 
  모든 노드를 한번씩 방문 
*/

// 201124 어렵다! 
function solution(numbers, target) {
    let answer = 0;
    dfs(0, 0);
   
    // dfs 깊이우선탐색 후입선출(LIFO) - 재귀함수로 풀 수 있다.
    function dfs(index, sum) {
      // 재귀함수 탈출 조건 : 마지막 자식 노드까지 갔을때의 합
      if (index === numbers.length) { 
        if (sum === target) {
          answer++;
        }
        // return 으로 빠져나온다.
        return 
      }

      // 여기가 어렵다!!!
      // 왼쪽 자식 node +1 인 경우를 모두 탐색한뒤  
      dfs(index+1, sum + numbers[index]);
      // 오른쪽 자식 node -1 인 경우를 탐색한다. 
      dfs(index+1, sum - numbers[index]);
    }

    return answer;
}

function solution(numbers, target) {
  let answer = 0;

  dfs(0, 0);

  function dfs(index, sum) {
    if (index === numbers.length) {
      if (sum === target) {
        answer++;
      }
      return;
    }
    // 재귀함수
    dfs(index + 1, sum + numbers[index]); // 왼쪽
    dfs(index + 1, sum - numbers[index]); // 오른쪽
  }
  return answer;
}

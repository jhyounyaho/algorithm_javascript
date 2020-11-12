/*
  문제71 : 깊이 우선 탐색 DFS 
  깊이 우선 탐색이란 목표한 노드를 찾기 위해 
  가장 우선순위가 높은 노드의 자식으로 깊이 들어갔다가 
  목표 노드가 존재하지 않으면 
  처음 방문한 노드와 연결된 다른 노드부터 
  그 자식 노드로 파고드는 검색 방법을 말합니다.

  => '한 개의 큐와 한 개의 스택'을 사용한다. 스택 = 선입후출 pop()
  - 장점 : 메모리를 덜 잡아먹고, 또한 자식노드가 존재하는지에 대한 물음을 기반으로 탐색하기 때문에, 특정 경로가 존재하는지(Does Path Exist?)를 판단할 때 아주 유용하다.
  - 단점 : BFS보다 속도가 느릴 수 있다.

  문제72 : 너비 우선 탐색 BFS 
  너비 우선 탐색이란 어떤 노드를 방문하여 확인한 후, 
  목표한 노드가 아니면 그 노드와 연결된 정점들 중에서 
  우선순위가 동일한 다른 노드를 찾고 
  그 순위에 없으면 그다음 순위 노드를 차례대로 찾는 방법이다

  => '두 개의 큐'를 사용한다. 큐 = 선입선출 shift()
  - 장점 : root에서 가까운 level부터 우선적으로 탐색하기 때문에 최단거리를 찾을 때 아주 유용하다. 
  - 단점 : queue에 각 노드의 정보를 기록해야 하기 때문에 메모리를 잡아먹는다.
*/

const graph = {
  'A': ['E', 'C', 'B'],
  'B': ['A'],
  'C': ['A'],
  'D': ['E','F'],
  'E': ['D', 'A'],
  'F': ['D'],
};

function dfs(graph, start) {
  let visited = [];
  let stack = [start]; // 선입후출 

  while(stack.length !== 0) {
    let n = stack.pop(); // 선입후출 
    if (!visited.includes[n]) {
      visited.push(n);
      let sub = graph[n].filter(x => !visited.includes(x));
      for (let i of sub) {
        stack.push(i);
      } 
    }
  }
  return visited;
}

console.log(dfs(graph, 'E')) //(6) ["E", "A", "B", "C", "D", "F"]


function bfs(graph, start) {
  let visited = [];
  let queue = [start]; // 선입선출

  while(queue.length !== 0) {
    let n = queue.shift(); // 선입선출 
    if (!visited.includes[n]) {
      visited.push(n);
      let sub = graph[n].filter(x => !visited.includes(x));
      for (let i of sub) {
        queue.push(i);
      } 
    }
  }
  return visited;
}

console.log(bfs(graph, 'E')) // (6) ["E", "D", "A", "F", "C", "B"]
/*
  문제10 : 별 찍기
  크리스마스 날, 은비는 친구들과 함께 파티를 하기로 했습니다. 
  그런데, 크리스마스 트리를 사는 것을 깜빡하고 말았습니다. 
  온 가게를 돌아다녀 봤지만 크리스마스 트리는 모두 품절이었습니다. 
  하는 수 없이 은비는 프로그래밍으로 트리를 만들기로 합니다. 

  은비를 위해 프로그램을 작성해 주세요.
  **입력**
  5

  **출력**
      *
     ***
    *****
   *******
  *********
*/

/*
  첫번째 풀이
  라인별 console.log 출력   
*/
const tree = (n) => {
  let blank = n;
  for (let i = 0; i < n; i++) {
    let result = ''; 
    for (let j = 0; j < blank; j++) {
      result += ' ';
    }
    for (let k = 0; k < 2 * i + 1; k++) {
      result += '*';
    }
    blank --;
    console.log(result)
  }
}
tree(5);

/*
  두번째 풀이
  총 결과물을 result로 리턴해줌   
*/
const tree = (n) => {
  let result = '';
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      result += ' ';
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      result += '*';
    }
    result += '\n';
  }
  return result;
}

console.log(tree(5));

// 첫번째보다는 두번째 풀이가 더 알맞은 결과물로 보인다.
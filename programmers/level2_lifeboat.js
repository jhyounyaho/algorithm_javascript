/*
  [level2] 구명보트 (탐욕법 - Greedy)

  문제 설명
  무인도에 갇힌 사람들을 구명보트를 이용하여 구출하려고 합니다. 구명보트는 작아서 한 번에 최대 2명씩 밖에 탈 수 없고, 무게 제한도 있습니다.
  예를 들어, 사람들의 몸무게가 [70kg, 50kg, 80kg, 50kg]이고 구명보트의 무게 제한이 100kg이라면 2번째 사람과 4번째 사람은 같이 탈 수 있지만 1번째 사람과 3번째 사람의 무게의 합은 150kg이므로 구명보트의 무게 제한을 초과하여 같이 탈 수 없습니다.
  구명보트를 최대한 적게 사용하여 모든 사람을 구출하려고 합니다.
  사람들의 몸무게를 담은 배열 people과 구명보트의 무게 제한 limit가 매개변수로 주어질 때, 모든 사람을 구출하기 위해 필요한 구명보트 개수의 최솟값을 return 하도록 solution 함수를 작성해주세요.

  제한사항
  무인도에 갇힌 사람은 1명 이상 50,000명 이하입니다.
  각 사람의 몸무게는 40kg 이상 240kg 이하입니다.
  구명보트의 무게 제한은 40kg 이상 240kg 이하입니다.
  구명보트의 무게 제한은 항상 사람들의 몸무게 중 최댓값보다 크게 주어지므로 사람들을 구출할 수 없는 경우는 없습니다.

  입출력 예
  people	limit	return
  [70, 50, 80, 50]	100	3
  [70, 80, 50]	100	3
*/

/*
  201126 풀이 시간초과 

  코딩 전 알고리즘 생각하기 
  let count = 0;
  people.sort 오름차순
  while 문 돌면서 첫번째랑 다음번째 100 이하인지 체크 
  해당 요소 or 요소2개 삭제 
  people.length === 0 이면 탈출 
*/
function solution(people, limit) {
  let answer = 0;
  people.sort((a,b) => a-b);
  
  while(people.length !== 0) {
    for (let i = 1; i <= people.length; i++) {
      if (people[0] + people[i] <= limit) {
        // 두명 이동   
        people.splice(i, 1);
      } 
      // 한명 이동 
      answer++;
      people.shift();
    }
  }
  return answer;
}

/*
  201126 두번째풀이 
  for문을 제거하고 for문만 돌려서 정확성 및 시간초과 패스했으나,
  효율성 때문에 실패  
*/
function solution(people, limit) {
  people.sort((a, b) => b - a);
  let count = 0;
  while(people.length) {
    if(people[0] + people[people.length - 1] <= limit) {
      people.shift();
      people.pop();
    } else {
      people.shift();
    }
    count++;
  }
  return count
}

/*
  201126 참고한 풀이 
  => 어렵게 생각하지말자 간단하게도 생각해보자 
*/ 
function solution(people, limit){
	let answer = 0
  // 내림차순 
  people.sort((a, b) => b - a)
  let l = 0
  let r = people.length-1
  
  while(l < r){
    if(people[l] + people[r] > limit){
      // 가장무거운사람과 + 가장가벼운사람 > limit 한명 이동 
      l++
    } else {
      // 가장무거운사람과 + 가장가벼운사람 <= limit 두명 이동 
      l++
      r--
    }
    answer++
  }

  // 맨마지막 한명일 경우 체크 
  if (l == r) answer++
  return answer
}

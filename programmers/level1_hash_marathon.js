/*
  해시(Hash) 해시는 Key-value쌍으로 데이터를 저장하는 자료구조입니다. 
  level1 완주하지 못한 선수
  
  수많은 마라톤 선수들이 마라톤에 참여하였습니다. 
  단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.

  마라톤에 참여한 선수들의 이름이 담긴 배열 participant와 
  완주한 선수들의 이름이 담긴 배열 completion이 주어질 때, 
  완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

  제한사항
  마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
  completion의 길이는 participant의 길이보다 1 작습니다.
  참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
  참가자 중에는 동명이인이 있을 수 있습니다.

  입출력 예
  participant	                            completion	                      return
  [leo, kiki, eden]	                      [eden, kiki]	                    leo
  [marina, josipa, nikola, vinko, filipa]	[josipa, filipa, marina, nikola]	vinko
  [mislav, stanko, mislav, ana]	          [stanko, ana, mislav]	            mislav

  입출력 예 설명
  예제 #1
  leo는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

  예제 #2
  vinko는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

  예제 #3
  mislav는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.
*/

// 첫번째 풀이 해시 사용 안함 key, value
function solution(participant, completion) {
  completion.forEach((complete) => {
    if (participant.find((participate) => participate === complete)) {
      participant.splice(participant.indexOf(complete), 1);
    }
  });
  return participant.join(",");
}

// 해시 사용한 풀이
function solution(participant, completion) {
  let newList = completion.reduce((pre, value) => {
    pre[value] = pre[value] ? pre[value] + 1 : 1; // key : value
    return pre;
  }, {}); // {} 초깃값
  // newList = { eden: 1, kiki: 1 }

  return participant.find((value) => {
    if (newList[value]) {
      // 요소 있을 경우
      newList[value] -= 1;
    } else {
      // 요소 없을 경우 미완주자 임으로 해당 값 리턴
      return true;
    }
  });
}

/*
  201221 풀이
  hash를 사용한 부분은 동일하나 
  미완주자가 n명일 경우를 로직으로 구현 
*/
function solution(participant, completion) {
  // 미완주자 arr
  let noCompletion = [];
  
  // 완주자 hash 변환 {name: count} 형태  
  const completeHash = completion.reduce((pre, val) => {
    pre[val] = pre[val] ? pre[val] + 1 : 1;
      return pre;
  }, {})
  
  // 미완주자가 n명 일 경우를 고려한 코드 
  participant.find((val) => {
      if (completeHash[val]) {
          completeHash[val] -= 1;
      } else {
          noCompletion.push(val)
      }
  })
  
  return noCompletion.join('');
}
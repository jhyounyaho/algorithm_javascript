/*
  hashmap 이란 자료구조의 한 형태로 key 와 value가 한 쌍으로
  key의 중복을 허용하지 않는 특성이 있습니다.

  채점 결과
  정확성: 50.0
  효율성: 0.0
  합계: 50.0 / 100.0
*/
function solution(participant, completion) {
  var answer = "";
  var i = 0;
  while (i < participant.length) {
    if (completion.includes(participant[i]) === false) {
      answer += participant[i];
    }
    i++;
  }
  return answer;
}

/*
  2번째 수정 
*/
function solution(participant, completion) {
  if (
    participant.length >= 1 &&
    participant.length <= 100000 &&
    participant.length - completion.length == 1
  ) {
    completion.forEach((complete) => {
      if (participant.find((participate) => participate === complete)) {
        participant.splice(participant.indexOf(complete), 1);
      }
    });
    return participant.join(",");
  }
}

/*
  탐욕법 > 체육복 
  https://programmers.co.kr/learn/courses/30/lessons/42862

  점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다. 예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.
  전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

  제한사항

  전체 학생의 수는 2명 이상 30명 이하입니다.
  체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
  여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
  여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
  여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.

  입출력예
  n = 5
  lost = [2, 4]
  reserve = [1, 3, 5]
  return = 5
*/
// n 전체학생수, lost 도난당함, reserve 여유분
// 0, 1, 2 로 체육복 체크
function solution(n, lost, reserve) {
  let answer = n;

  // 현재 학생별 운동복 보유 수
  let student = new Array(n).fill(1);
  for (let i = 0; i < student.length; i++) {
    if (lost.includes(i + 1)) {
      student[i] -= 1;
    }
    if (reserve.includes(i + 1)) {
      student[i] += 1;
    }
  }

  // 운동복이 2개 있는 학생들이 0인 친구들에게 빌려주기
  for (let i in student) {
    if (student[i] == 2 && student[i - 1] == 0) {
      student[i] -= 1;
      student[i - 1] += 1;
    }
    if (student[i] == 0 && student[i - 1] == 2) {
      student[i] += 1;
      student[i - 1] -= 1;
    }
  }
  for (let s of student) {
    if (s == 0) {
      answer--;
    }
  }
  return answer;
}

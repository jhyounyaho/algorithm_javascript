/*
  완전탐색 > 모의고사 
  최종 답안 
  https://programmers.co.kr/learn/courses/30/lessons/42840
  모의고사 수포자 문제풀기 

  1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
  2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
  3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

  1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

  제한 조건

  시험은 최대 10,000 문제로 구성되어있습니다.
  문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
  가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.

  입출력 예
  answer = [1,2,3,4,5]
  return = [1]

  answer = [1,3,2,4,2]
  return = [1,2,3]
*/

function solution(answers) {
  if (answers.length <= 10000) {
    var answer = [];
    var su_1 = [1, 2, 3, 4, 5];
    var su_2 = [2, 1, 2, 3, 2, 4, 2, 5];
    var su_3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    var count1 = 0,
      count2 = 0,
      count3 = 0;

    for (var i = 0; i < answers.length; i++) {
      if (answers[i] === su_1[i % su_1.length]) {
        count1 += 1;
      }
      if (answers[i] === su_2[i % su_2.length]) {
        count2 += 1;
      }
      if (answers[i] === su_3[i % su_3.length]) {
        count3 += 1;
      }
    }

    // 최댓값
    var max = Math.max(count1, count2, count3);
    if (count1 === max) {
      answer.push(1);
    }
    if (count2 === max) {
      answer.push(2);
    }
    if (count3 === max) {
      answer.push(3);
    }

    return answer;
  }
}

function solution(answers) {
  if (answers.length <= 10000) {
    var answer = [];
    var su_1 = [1, 2, 3, 4, 5];
    var su_2 = [2, 1, 2, 3, 2, 4, 2, 5];
    var su_3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    var count1 = 0,
      count2 = 0,
      count3 = 0;

    for (var i = 0; i < answers.length; i++) {
      if (answers[i] === su_1[i % su_1.length]) {
        count1 += 1;
      }
      if (answers[i] === su_2[i % su_2.length]) {
        count2 += 1;
      }
      if (answers[i] === su_3[i % su_3.length]) {
        count3 += 1;
      }
    }
    console.log(`count1 : ${count1} count2 : ${count2} count3 : ${count3} `);
    if (count1 > count2 && count1 > count3) {
      answer.push(1);
    } else if (count2 > count1 && count2 > count3) {
      answer.push(2);
    } else if (count2 > count1 && count2 > count3) {
      answer.push(3);
    } else if (count1 == count2 && count2 > count3) {
      answer.push(1, 2);
    } else if (count1 == count3 && count1 > count2) {
      answer.push(1, 3);
    } else if (count2 == count3 && count2 > count1) {
      answer.push(2, 3);
    } else if (count1 == count2 && count2 == count3 && count1 > 0) {
      answer.push(1, 2, 3);
    }
    return answer;
  }
}

function solution(answers) {
  var answer = [];
  var count = [0, 0, 0];
  var std1 = [1, 2, 3, 4, 5];
  var std2 = [2, 1, 2, 3, 2, 4, 2, 5];
  var std3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  var i = 0,
    j = 0,
    k = 0;

  for (var n = 0; n < answers.length; n++) {
    if (i > std1.length - 1) {
      i = 0;
    }
    if (j > std2.length - 1) {
      j = 0;
    }
    if (k > std3.length - 1) {
      k = 0;
    }
    if (answers[n] == std1[i]) {
      count[0]++;
    }
    if (answers[n] == std2[j]) {
      count[1]++;
    }
    if (answers[n] == std3[k]) {
      count[2]++;
    }
    i++;
    j++;
    k++;
  }

  answer.push(1);
  if (count[0] == count[1]) {
    answer.push(2);
  } else if (count[0] < count[1]) {
    answer[0] = 2;
  }

  if (count[answer[0] - 1] == count[2]) {
    answer.push(3);
  } else if (count[answer[0] - 1] < count[2]) {
    while (answer.length != 0) {
      answer.pop();
    }
    answer.push(3);
  }

  return answer;
}

function solution(answers) {
  var answer = [];
  var a1 = [1, 2, 3, 4, 5];
  var a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  var a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  var a1c = answers.filter((a, i) => a === a1[i % a1.length]).length;
  var a2c = answers.filter((a, i) => a === a2[i % a2.length]).length;
  var a3c = answers.filter((a, i) => a === a3[i % a3.length]).length;
  var max = Math.max(a1c, a2c, a3c);

  if (a1c === max) {
    answer.push(1);
  }
  if (a2c === max) {
    answer.push(2);
  }
  if (a3c === max) {
    answer.push(3);
  }

  return answer;
}

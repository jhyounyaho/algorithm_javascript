/*
  정렬 > K번째 수 
  정렬을 이용해서 문제를 효율적으로 풀어보세요
  https://programmers.co.kr/learn/courses/30/lessons/42748

*/

// 201121 내가 푼 답
function solution(array, commands) {
    let answer = [];
    
    // for문 돌면서 처리 후 answer에 push 하기
    for (let i of commands) {
        // 첫번째 자릿수가 0이 아니라 1로 생각해줘야한다.
        answer.push(array.slice(i[0]-1, i[1]).sort((a, b) => a - b)[i[2]-1]);
    }
    return answer;
}

/* 최종 답안  */
function solution(array, commands) {
  var answer = [];
  for (var i = 0; i < commands.length; i++) {
    answer.push(
      array.slice(commands[i][0] - 1, commands[i][1]).sort((a, b) => a - b)[
        commands[i][2] - 1
      ]
    );
  }
  return answer;
}

function solution(array, commands) {
  var answer = [];
  for (var i = 0; i < commands.length; i++) {
    var arr = array.slice(commands[i][0] - 1, commands[i][1]);
    answer.push(arr.sort()[commands[i][2] - 1]);
  }
  return answer;
}

function solution(array, commands) {
  var answer = [];

  for (let i = 0; i < commands.length; i++) {
    answer.push(
      array.slice(commands[i][0] - 1, commands[i][1]).sort()[commands[i][2] - 1]
    );
  }

  return answer;
}

function solution(array, commands) {
  return commands.map((v) => {
    return array
      .slice(v[0] - 1, v[1])
      .sort((a, b) => a - b)
      .slice(v[2] - 1, v[2])[0];
  });
}

function solution(array, commands) {
  return commands.map((command) => {
    const [sPosition, ePosition, position] = command;
    const newArray = array
      .filter(
        (value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1
      )
      .sort((a, b) => a - b);

    return newArray[position - 1];
  });
}

function solution(array, commands) {
  var answer = [];

  answer = commands.map((a) => {
    return array.slice(a[0] - 1, a[1]).sort((b, c) => b - c)[a[2] - 1];
  });
  return answer;
}

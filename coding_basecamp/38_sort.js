/*
  문제38 : 호준이의 아르바이트

  호준이는 아르바이트로 영어 학원에서 단어 시험지를 채점하는 일을 하고 있다. 
  호준이가 일하는 학원은 매번 1위부터 3위까지의 학생에게 상으로 사탕을 준다. 
  그런데 오늘은 마침 사탕이 다 떨어져서 호준이가 채점을 하고 점수를 보내면, 
  당신이 아이들의 숫자만큼 사탕을 사러 가기로 했다.
  1위 ~ 3위 학생은 여러명일 수 있고 1~3위 학생 중 중복되는 학생까지 포함하여 사탕을 사기로 한다.
  학생들의 점수를 공백으로 구분하여 입력을 받고 사탕을 받을 학생의 수를 출력하세요.

  입출력
  입력 : 97 86 75 66 55 97 85 97 97 95
  출력 : 6
*/

/*
  내 풀이
  key: 점수, value: count 값을 갖는 배열을 만든 후
  sort 를 사용하여 내림차순을 만든 후
  0, 1, 2 에 있는 배열의 값을 더해준다. 
*/
const get_candy_count = (grade) => {
  const new_grade = {};
  for (let i of grade) {
    if (new_grade[i] === undefined) {
      new_grade[i] = 1;
    } else {
      new_grade[i] += 1;
    }
  }
  const grades = Object.values(new_grade).sort((a,b) => b-a);
  return grades[0] + grades[1] + grades[2];
}

console.log(get_candy_count([97, 86, 75, 66, 55, 97, 85, 97, 97, 95]))

/*
  강의 풀이 
  sort로 오름차순 만든 후 
  while문을 돌면서 pop을 사용하여 새로운 배열에 점수가 없을 경우에만 넣어준다.
  count를 세준다. 
*/
const get_candy_count = (grade) => {
  const sorted = grade.sort((a,b) => a - b);
  const new_grade = [];
  let count = 0;

  while (new_grade.length < 3) {
    const n_grade = sorted.pop();
    if(!new_grade.includes(n_grade)) {
      new_grade.push(n_grade)
    }
    count++;
  }
  return count;
}

console.log(get_candy_count([97, 86, 75, 66, 55, 97, 85, 97, 97, 95]))
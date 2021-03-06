/*
  Level2 정렬 > 가장 큰 수 
  https://programmers.co.kr/learn/courses/30/lessons/42746

  0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.
  예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.
  0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.

  제한 사항
  numbers의 길이는 1 이상 100,000 이하입니다.
  numbers의 원소는 0 이상 1,000 이하입니다.
  정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.

  입출력 예
  numbers = [6, 10, 2]
  return = '6210'
*/

// 201124 풀이
function solution(numbers) {
  // 앞뒤수 수를 비교하여 정렬 ex) 3, 10 => 103 - 310   
  let answer = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`).join('');
  return answer[0] === '0' ? '0' : answer;
}

// repeat으로 풀이의 단점 : 4자릿수 이상일 경우엔? 
function solution(numbers) {
  if (numbers.reduce((a, b) => a + b) === 0) {
    return "0";
  } else {
    let answer = numbers.sort((i, j) => {
      // 6 > 6666 , 54 > 5454, 258 > 2582, 6545 > 6545 네자리로 비교 후 오름차순
      return String(j).repeat(4).slice(0, 4) - String(i).repeat(4).slice(0, 4);
    });
    // 배열 문자열로 변경
    let result = answer.map((s) => String(s)).join("");
    return result;
  }
}

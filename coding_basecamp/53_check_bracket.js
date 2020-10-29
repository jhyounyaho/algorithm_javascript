/*
  문제53 : 괄호 문자열

  괄호 문자열이란 괄호 기호인 '{', '}', '[', ']', '(', ')' 와 같은 것을 말한다. 
  그중 괄호의 모양이 바르게 구성된 문자열을 **바른 문자열**, 
  그렇지 않은 문자열을 **바르지 않은 문자열**이라 부르도록 하자. 

  (())와 같은 문자열은 바른 문자열이지만 ()()) 와 같은 문자열은 바르지 않은 문자열이다.
  (해당 문제에서는 소괄호만 판별하지만,  중괄호와 대괄호까지 판별해 보세요.)

  **입력으로 주어진 괄호 문자열이 바른 문자열인지 바르지 않은 문자열인지 "YES"와 "NO"로 구분된 문자열을 출력해보자.**
*/

const chk_bracket = (string) => {
  const arr = string.split('');
  let bracket_count = 0;
  let result = [];

  for (let i in arr) {
    if (arr[i] === '(') {
      result.push('(')
      bracket_count++;
    } else {
      result.pop();
      bracket_count--;
    }
  }

  // count가 0 이 아닌 경우 갯수가 안맞았음
  // length 가 0이 아닌 경우 ()의 조합이 맞지 않았음.
  if (result.length !== 0 || bracket_count !== 0) {
    return false
  }
  return true;
}

console.log(chk_bracket('(())')) //true
console.log(chk_bracket('(()))(')) //false
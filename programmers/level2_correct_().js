/*
  [level2] 올바른 괄호

  문제 설명
  괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어
  ()() 또는 (())() 는 올바른 괄호입니다.
  )()( 또는 (()( 는 올바르지 않은 괄호입니다.
  '(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.

  제한사항
  문자열 s의 길이 : 100,000 이하의 자연수
  문자열 s는 '(' 또는 ')' 로만 이루어져 있습니다.

  입출력 예
  s	      answer
  ()()	  true
  (())()	true
  )()(	  false
  (()(	  false

  입출력 예 설명
  입출력 예 #1,2,3,4
  문제의 예시와 같습니다.
*/

/*
  201219 
  stack 의 FILO 을 사용하면 되겠다 싶었다
  정확성은 모두 통과되었으나 
  효율성 두개 실패(시간초과)
*/
function solution(s){
  // 변수들은 상단에 선언해준다  
  let result = false;
  let stack = []; // FILO 특징의 stack 사용 
  
  // ) 가 처음에 올 경우엔 무조건 false
  if (s[0] == ')') return false;
  
  for(let i in s) {
    if (s[i] == '(') {
      stack.push('(')
    } else {
      stack.pop()
    }
  }
  
  // 올바른 구조일 경우 stack 은 0이 된다. 반대는 stack 에 존재 
  result = stack.length == 0 && true;
  return result 
}

/*
  201219 
  똑같은 풀이인데 ES6 for in을 ES5 for로 바꾸니까 통과되었다 
  왜...?
  똑같이 배열 요소를 순회하는건데?!?!
*/
function solution(s){
  // 변수들은 상단에 선언해준다  
  let result = false;
  let stack = []; // FILO 특징의 stack 사용 
  
  // ) 가 처음에 올 경우엔 무조건 false
  if (s[0] == ')') return false;
  
  for(let i=0; i < s.length; i++) {
    if (s[i] == '(') {
      stack.push('(')
    } else {
      stack.pop()
    }
  }
  
  // 올바른 구조일 경우 stack 은 0이 된다. 반대는 stack 에 존재 
  result = stack.length == 0 && true;
  return result 
}

/*
  다른 풀이법
  stack 이 아니라 count 로 생각함
*/
function solution(s) {
  let answer = true,
    sum = 0
  for (let i = 0; i < s.length; i++) {
    s[i] === "(" ? sum++ : sum--
    if (sum < 0) break
  }

  return sum === 0
}
/*
  문제9 : concat을 활용한 출력 방법
  다음 소스 코드를 완성하여 날짜와 시간을 출력하시오.
  출력
  2019/04/26 11:34:27
*/
const year = '2019';
const month = '04';
const day = '26';
const hour = '11';
const minute = '34';
const second = '27';

/*
  CASE1 concat 사용하기 
  문자열.concat('문자열') 
  배열.concat([배열]) 
  두개의 문자열 or 배열을 하나의 문자열 or 배열로 만들어주는 역할을 하는 함수
*/
const result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);

/*
  CASE2 template literal 사용하기 
*/
const result2 = result = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
console.log(result);
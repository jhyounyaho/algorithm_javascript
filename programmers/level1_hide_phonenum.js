/*
  [level1] 핸드폰 번호 가리기 

  문제 설명
  프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
  전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

  제한 조건
  s는 길이 4 이상, 20이하인 문자열입니다.

  입출력 예
  phone_number	return
  01033334444	*******4444
  027778888	
*/

// 201123 풀이 substr 로 글자 자르기 
function solution(phone_number) {
    return '*'.repeat(phone_number.length - 4) + phone_number.substr(-4, 4)
}

// 내풀이 slice로 글자 자르기  
function solution(phone_number) {
  /*
    전체길이 - 4 만큼 * 로 채우고
    뒤에서 4번째 길이만큼 잘라서 붙여준다.
  */
  return '*'.repeat(phone_number.length - 4) + phone_number.slice(-4);
}

// 다른 사람 풀이 
function hide_numbers(s) {
  // 정규식 풀이 
  return s.replace(/\d(?=\d{4})/g, "*");
}

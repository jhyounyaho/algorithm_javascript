/*
  2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT
  입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 TUE를 반환하세요.

  제한 조건

  2016년은 윤년입니다.
  2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)

  입출력 예

  a = 5
  b = 24
  result = 'TUE'
*/

// 201121 최종답안
function solution(a, b) {
    // 필요한 값을 배열에 넣어준다.
   	const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
    const date = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let day = 0;
   
    // 월 날짜 더하기 
    for (let i = 0; i < a - 1; i++) {
       day += date[i]; 
    }
    // 일 날짜 더하기 (배열 0으로 시작해서 1을 빼준다.)
    day += b - 1
   	return week[day % 7] 
}

// 201121 case 한개 실패 
function solution(a, b) {
    // 필요한 값을 배열에 넣어준다.
   	const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
    const date = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let day = b;
   
    // 날짜 수를 구해준다. 
    for (let i = 0; i < a - 1; i++) {
       day += date[i]; 
    }
   	return week[day % 7 - 1] 
}

function solution(a, b) {
  if (a >= 1 && a <= 12 && b >= 1 && b <= 31) {
    const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
    const date = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let result_day = 0;

    // 월 날짜 더하기
    for (let i = 0; i < a - 1; i++) {
      result_day += date[i];
    }
    // 일 날짜 더하기
    result_day += b - 1;

    //요일 날짜 구해서 return
    return week[result_day % 7];
  } else {
    return "월 1~12, 일 1~31 사이의 숫자를 입력해주세요";
  }
}

// test
console.log(solution(5, 24));

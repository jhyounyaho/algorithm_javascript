/*
  문제58 : 콤마 찍기

  원범이는 편의점 아르바이트가 끝난 후 정산을 하고자 합니다.
  정산을 빨리하고 집에 가고 싶은 원범이는 프로그램을 만들려고 합니다.

  숫자를 입력받고 천 단위로 콤마(,)를 찍어주세요.

  예를 들어, 123456789를 입력받았으면 123,456,789를 출력해야 합니다.
*/

// 내 풀이
const commaAdd = (num) => {
  // 숫자를 배열로 만든 후 뒤에서부터 숫자를 셀 수 있도록 reverse 시켜준다. 
  const reverseNum = String(num).split('').reverse();
  let nNum = [];

  // 3자리마다 콤마를 추가해준다.
  for(let i in reverseNum) {
    nNum.push(reverseNum[i]);
    if (i % 3 === 2) {
      nNum.push(',');
    }
  }
  
  // 배열을 reverser 시켜준다. 
  const result = nNum.reverse();
  // 첫째자리에 , 가 있으면 삭제해준다. 
  if (result[0] === ',') {
    delete result[0]
  }   
  // string으로 만들어준다. 
  return result.join('');
}

console.log(commaAdd(123456789))

// 문제 풀이
// toLocalString() 내장 함수를 사용하여 콤마 사용함 
const money = 123456789;
money.toLocaleString();

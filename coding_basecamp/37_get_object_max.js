/*
  문제37 : 반장 선거

  새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다.  
  그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은 
  학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 
  출력하는 프로그램을 작성하기로 하였습니다

  입력
  원범 원범 혜원 혜원 혜원 혜원 유진 유진

  출력
  혜원(이)가 총 4표로 반장이 되었습니다.
*/

const get_vote_result = (item) => {
  let vote_result = {};

  // 이름을 key 값으로 하는 객체를 만들어 준다. 
  for (let i of item) {
    if (vote_result[i] === undefined) {
      // 없을 경우 1로 셋팅
      vote_result[i] = 1
    } else {
      // 있을 경우 +1 해준다.
      vote_result[i] += 1
    }
  }
  /*
    reduce()
    누적 계산의 결과 값 하나의 값이 리턴된다

    Object.keys(obj)
    키가 담긴 배열을 반환한다.

    Object.values(obj)
    값이 담긴 배열을 반환한다.

    Object.entries(obj)
    [key, value] 쌍이 담긴 배열을 반환한다. 
  */

  // CASE1 Object.keys 사용 
  const winner = Object.keys(vote_result).reduce((a,b) => a > b ? a : b);
  return `${winner}(이)가 총 ${vote_result[winner]}표로 반장이 되었습니다.`

  // CASE2 Object.entries 사용 
  /*
  const winner = Object.entries(vote_result).reduce((a,b) => a > b ? a : b);
  return `${winner[0]}(이)가 총 ${winner[1]}표로 반장이 되었습니다.`
  */
}

console.log(get_vote_result(['원범', '원범', '혜원', '혜원', '혜원', '혜원', '유진', '유진']))
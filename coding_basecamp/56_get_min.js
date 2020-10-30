/*
  문제56 : 객체의 함수 응용

  다음의 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.

  데이터
  nationWidth = {
       'korea': 220877,
       'Rusia': 17098242,
       'China': 9596961,
       'France': 543965,
       'Japan': 377915,
      'England' : 242900,
  }

  출력
  England 22023
*/

const nationWidth = {
       'korea': 220877,
       'Rusia': 17098242,
       'China': 9596961,
       'France': 543965,
       'Japan': 377915,
       'England' : 242900,
  }

const korea = nationWidth['korea'];
delete nationWidth['korea'];

// 배열을 사용하기 편하게 변경한다.
const entries = Object.entries(nationWidth);
const val = Object.values(nationWidth);

// gap 에 최댓값 저장
let gap = Math.max.apply(null, val);
let item = [];

// 최솟값 구하는 알고리즘 
for(let i in entries) {
  if (gap > Math.abs(entries[i][1] - korea)) {
    gap = Math.abs(entries[i][1] - korea);
    item = entries[i];
  }
}

console.log(item[0],item[1]-korea);
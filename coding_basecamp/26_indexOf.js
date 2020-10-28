/*
  문제26 : 행성 문제2
  우리 태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있습니다.
  이 행성들의 영어 이름은 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune입니다.

  행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램을 만들어 주세요.
*/

/*
  indexOf()
  찾은 값의 첫번째 원소의 위치를 반환해주며 없을 경우 -1 을 리턴한다.
*/
const find_planet = (name) => {
  const planet_ko = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성']
  const planet_en = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']
  const find_index = planet_ko.indexOf(name);
  return planet_en[find_index];
}

console.log(find_planet('수성')); // Mercury 
console.log(find_planet('지구')); // Earth 
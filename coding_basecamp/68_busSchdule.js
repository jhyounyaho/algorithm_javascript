/*
  문제68 : 버스 시간표

  학교가 끝난 지원이는 집에 가려고 합니다. 학교 앞에 있는 버스 시간표는 너무 복잡해서 버스 도착시간이 몇 분 남았는지 알려주는 프로그램을 만들고 싶습니다.

  버스 시간표와 현재 시간이 주어졌을 때 버스 도착 시간이 얼마나 남았는지 알려주는 프로그램을 만들어주세요.

  - 버스 시간표와 현재 시간이 입력으로 주어집니다.
  - 출력 포맷은 "00시 00분"입니다.
    만약 1시간 3분이 남았다면 "01시간 03분"으로 출력해야 합니다.
  - 버스 시간표에 현재 시간보다 이전인 버스가 있다면 "지나갔습니다."라고 출력합니다.

  입력
  ["12:30", "13:20", "14:13"]
  "12:40"

  출력
  ['지나갔습니다', '00시간 40분', '01시간 33분']
*/

const getBusSchedule = (busTime, nowTime) => {
  // 출력 될 결과값이 들어갈 빈배열 생성  
  let result = [];
  // 시간을 분으로 변경해준다. 
  let time = nowTime.split(':').map(n => parseInt(n, 10));
  time = time[0] * 60 + time[1];

  // for문 돌면서 버스시간과 비교하여 결과 값을 result 배열에 넣어준다.
  for(let i of busTime) {
    let bus = i.split(':').map(n => parseInt(n, 10));
    bus = bus[0] * 60 + bus[1];
    if (bus < time) {
      result.push('지나갔습니다.')
    } else {
      let hour = parseInt((bus - time)/60, 10);
      let minute = (bus - time) % 60;
      result.push(`${String(hour).padStart(2, 0)}시간 ${String(minute).padStart(2, 0)}분`)
    }
  }
  return result;
} 

const busTime = ["12:30", "13:20", "14:13"]
const nowTime = "12:40"
console.log(getBusSchedule(busTime, nowTime))

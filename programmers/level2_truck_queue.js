/*
  [level2] 다리를 지나는 트럭 (스택/큐 문제)

  문제 설명
  트럭 여러 대가 강을 가로지르는 일 차선 다리를 정해진 순으로 건너려 합니다. 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다. 트럭은 1초에 1만큼 움직이며, 다리 길이는 bridge_length이고 다리는 무게 weight까지 견딥니다.
  ※ 트럭이 다리에 완전히 오르지 않은 경우, 이 트럭의 무게는 고려하지 않습니다.

  예를 들어, 길이가 2이고 10kg 무게를 견디는 다리가 있습니다. 무게가 [7, 4, 5, 6]kg인 트럭이 순서대로 최단 시간 안에 다리를 건너려면 다음과 같이 건너야 합니다.

  경과 시간	다리를 지난 트럭	다리를 건너는 트럭	대기 트럭
  0	[]	[]	[7,4,5,6]
  1~2	[]	[7]	[4,5,6]
  3	[7]	[4]	[5,6]
  4	[7]	[4,5]	[6]
  5	[7,4]	[5]	[6]
  6~7	[7,4,5]	[6]	[]
  8	[7,4,5,6]	[]	[]
  따라서, 모든 트럭이 다리를 지나려면 최소 8초가 걸립니다.

  solution 함수의 매개변수로 다리 길이 bridge_length, 다리가 견딜 수 있는 무게 weight, 트럭별 무게 truck_weights가 주어집니다. 이때 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return 하도록 solution 함수를 완성하세요.

  제한 조건
  bridge_length는 1 이상 10,000 이하입니다.
  weight는 1 이상 10,000 이하입니다.
  truck_weights의 길이는 1 이상 10,000 이하입니다.
  모든 트럭의 무게는 1 이상 weight 이하입니다.

  입출력 예
  bridge_length	weight	truck_weights	return
  2	10	[7,4,5,6]	8
  100	100	[10]	101
  100	100	[10,10,10,10,10,10,10,10,10,10]	110
*/

/*
  queue FIFO 선입선출  
  - unshift() 'add' items to the 'beginning' of an arrary 
  - shift() 'remove' an item from the 'beginning' of an array 
  stack LIFO 후입선출   
  - push() 'add' items to the 'end' of an array  
  - shift() 'remove' an item from the 'beginning' of an array 
*/

// 다른 사람 풀이 - arr을 queue처럼 생각한 풀이  
function solution(bridge_length, weight, truck_weights) {
  // 경과시간 
  let answer = 0;
  // 현재 다리 상태 FIFO - queue의 길이는 다리 길이로 하고 다리 하나하나를 0으로 초기화  
  let queue = new Array(bridge_length).fill(0);
  // 현재 다리 무게 
  let queueSum = 0;
  // 현재 다리를 지나가는 트럭 FIFO 
  let nowTruck = truck_weights.shift();
  
  // queue 에 트럭을 넣고 다리를 앞으로 한칸식 땡김 FIFO 
  queue.unshift(nowTruck);
  queue.pop();
  
  // 다리 무게 증가
  queueSum += nowTruck;
  // 시간 증가 
  answer++;
  
  // 쉬지않고 큐에 트럭을 넣거나 건너기 때문에 queueSum 이 0이 되면 모든 트럭이 지나간 것 
  // 빠져나오는 조건 queueSum = 0
  while(queueSum) {
    // 다리에 있는 트럭 이동     
    queueSum -= queue.pop();
    
    // 일단 다리를 안건넌 트럭 하나 빼기
    nowTruck = truck_weights.shift();
    
    if (nowTruck + queueSum <= weight) {
      // 다리에 들어갈 수 있으면 큐(다리)에 트럭 넣고 무게 증가 
      queue.unshift(nowTruck);
      queueSum += nowTruck;
    } else {
      // 다리에 들어갈 수 없으면 0을 넣고 뺐던거 다시 트럭집단에 넣어줌
      queue.unshift(0);
      truck_weights.unshift(nowTruck)
    }
    answer++;
  }
  return answer;
}



// 201125 풀이 못풀음 
function solution(bridge_length, weight, truck_weights) {
  // 경과시간 
  let answer = 0;
  // 다리를 지난 트럭 
  let endTruck = [];
  // 다리를 건너는 트럭 - 다리를 구하는 arr은 필요 없었음  
  let ingTruck = [];
  
  truck_weights.map((truck, index) => { // 원소마다 체크하는게 아님으로 map으로 돌리는게 아닌 while로 돌렸어야했음. 
    // 다리 위에 있는 트럭 무게 
    const ingWeight = ingTruck.reduce((a, b) => a + b, 0) 
    
    if (ingWeight <= weight) {
      // 다리가 견딜 수 있는 무게보다 적을 경우 트럭을 다리 위에 올린다.
      ingTruck.push(truck)
      answer+=1;
    } else {
      // 다리가 견딜 수 있는 무게보다 클 경우 먼저 트럭을 다 보내주고
      answer += bridge_length
      // 다음 트럭을 다리 위에 올린다.
      ingTruck.push(truck)
      // 다 건넌 트럭은 다리를 지난 트럭 배열에 넣어준다.
      endTruck.push(ingTruck.pop()) 
    }
    // => 다리 길이를 구하는 방법을 구할 수 없었음. 
  })
  
  return answer;
}

// 201222 큐로 푸는 다리 문제 
function solution(bridge_length, weight, truck_weights) {
    // 소요시간 
    let answer = 0;
    // queue FIFO
    let bridge = new Array(bridge_length).fill(0);
    // 현재 트럭 FIFO
    let now_truck = truck_weights.shift();
    // 다리 위 무게 
    let now_weight = 0;
    
    bridge.unshift(now_truck);
    bridge.pop();
    now_weight += now_truck;
    answer++;
    
    while(now_weight > 0) {
        now_weight -= bridge.pop();
        now_truck = truck_weights.shift();
        
        if (now_weight + now_truck <= weight) {
            bridge.unshift(now_truck);
            now_weight += now_truck;
        } else {
            truck_weights.unshift(now_truck);
            bridge.unshift(0);
        }
        answer++;
    }
    return answer;
}
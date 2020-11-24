/*
  해시 해시는 Key-value쌍으로 데이터를 저장하는 자료구조입니다.
  level3 베스트앨범 

  문제 설명
  스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 합니다. 
  노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같습니다.

  속한 노래가 많이 재생된 장르를 먼저 수록합니다.
  장르 내에서 많이 재생된 노래를 먼저 수록합니다.
  장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
  노래의 장르를 나타내는 문자열 배열 genres와 노래별 재생 횟수를 나타내는 정수 배열 plays가 주어질 때, 
  베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return 하도록 solution 함수를 완성하세요.

  제한사항
  genres[i]는 고유번호가 i인 노래의 장르입니다.
  plays[i]는 고유번호가 i인 노래가 재생된 횟수입니다.
  genres와 plays의 길이는 같으며, 이는 1 이상 10,000 이하입니다.
  장르 종류는 100개 미만입니다.
  장르에 속한 곡이 하나라면, 하나의 곡만 선택합니다.
  모든 장르는 재생된 횟수가 다릅니다.

  입출력 예
  genres	                              plays	                      return
  [classic, pop, classic, classic, pop]	[500, 600, 150, 800, 2500]	[4, 1, 3, 0]

  입출력 예 설명
  classic 장르는 1,450회 재생되었으며, classic 노래는 다음과 같습니다.
  고유 번호 3: 800회 재생
  고유 번호 0: 500회 재생
  고유 번호 2: 150회 재생
  pop 장르는 3,100회 재생되었으며, pop 노래는 다음과 같습니다.

  고유 번호 4: 2,500회 재생
  고유 번호 1: 600회 재생
  따라서 pop 장르의 [4, 1]번 노래를 먼저, 
  classic 장르의 [3, 0]번 노래를 그다음에 수록합니다.
*/

// 201124 풀이
// 주어진 문제를 내가 필요한 형태의 배열로 만드는게 중요하다. 
function solution(genres, plays) {
    let list = genres.reduce((hash, v, i) => {
    	if (!hash[v]) {
        	hash[v] = { play: plays[i], music: []} 
        } else {
            hash[v].play += plays[i]
        } 
       	hash[v].music.push([i, plays[i]]) 
        return hash;
    }, {})
    
    let answer = [];
    let sortArr = Object.values(list).sort((a, b) => b.play - a.play)
    sortArr.map((m) => {
        m.music.sort((a,b) => b[1] - a[1])
        if (m.music.length >= 2) {
            answer.push(m.music[0][0], m.music[1][0])
        } else {
            answer.push(m.music[0][0])
        }
    })
    return answer;
}

function solution(genres, plays) {
  /*
    list 배열 형태 
    {
      classic: { 
        plays: 1450, 
        music: [ [ 0, 500 ], [ 2, 150 ], [ 3, 800 ] ]
      },
      pop: { 
        plays: 3100, 
        music: [ [ 1, 600 ], [ 4, 2500 ] ] 
      }
    }

    list sort로 정렬 후 배열 형태
    1. plays 기준으로 정렬
    2. music 기준으로 정렬  
    {
      pop: { 
        plays: 3100, 
        music: [ [ 4, 2500 ], [ 1, 600 ] ] 
      },
      classic: { 
        plays: 1450, 
        music: [ [ 3, 800 ], [ 0, 500 ], [ 2, 150 ] ]
      }
    }
  */
  let list = genres.reduce((hash, g, i) => {
    if (!hash[g]) {
      hash[g] = { plays: plays[i], music: [] };
    } else {
      hash[g].plays += plays[i];
    }
    hash[g].music.push([i, plays[i]]);
    return hash;
  }, {});

  let answer = [];
  // 객체 plays 기준으로 정렬
  let sort_arr = Object.values(list).sort((a, b) => b.plays - a.plays);
  sort_arr.map((m) => {
    m.music.sort((a, b) => b[1] - a[1]);
    if (m.music.length >= 2) {
      // 2곡 이상일 경우 리스트 2개 추가
      answer.push(m.music[0][0], m.music[1][0]);
    } else {
      // 1곡일 경우 하나만 리스트 추가
      answer.push(m.music[0][0]);
    }
  });
  return answer;
}

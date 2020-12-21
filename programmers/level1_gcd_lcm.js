/*
  [level1] 최대공약수와 최소공배수

  문제 설명
  두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

  제한 사항
  두 수는 1이상 1000000이하의 자연수입니다.

  입출력 예
  n	m	return
  3	12	[3, 12]
  2	5	[1, 10]

  입출력 예 설명
  입출력 예 #1
  위의 설명과 같습니다.

  입출력 예 #2
  자연수 2와 5의 최대공약수는 1, 최소공배수는 10이므로 [1, 10]을 리턴해야 합니다.
*/

// 201123 최대공약수 못풀음 
function solution(n, m) {
  let answer = [];
  let minNum = Math.min(n, m); // 작은수 
  let maxNum = Math.max(n, m); // 큰수 
  
  // 최대공약수 
  answer.push(gcd(minNum, maxNum));  
  // 최소공배수 = (minNum + maxNum) / 최대공약수 
  answer.push((minNum * maxNum) / answer[0])
  
  return answer;
}

/*
	최대공약수 - 재귀함수 
  두 수의 공약수 중 가장 큰 수 두 수를 나눠봐서 
  나머지가 0 이면 maxNum이 최대 공약수
  나머지가 생긴다면 maxNum와 나머지값을 다시 비교  
*/
function gcd(minNum, maxNum) {
  return (minNum % maxNum) === 0 ? maxNum : gcd(maxNum, minNum % maxNum); 
}
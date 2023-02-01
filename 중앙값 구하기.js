/**
 * @ts-check
 * https://school.programmers.co.kr/learn/courses/30/lessons/120811
 * sort 함수: https://velog.io/@mystyle730/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98-Sort%ED%95%A8%EC%88%98-%EC%9D%B4%ED%95%B4
 */

/**
 * 정수가 담긴 배열에서 중앙값을 출력하는 함수
 *
 * @param {number[]} array 정수가 담긴 배열
 * @returns {number} array의 중앙값
 */
function solution(array) {
  const sortedArray = array.sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedArray.length / 2);
  const answer = sortedArray[middleIndex];

  return answer;
}

/**
 * @ts-check
 * https://school.programmers.co.kr/learn/courses/30/lessons/120583
 */

/**
 * 정수가 담긴 배열에 특정한 정수가 몇 개 있는지 출력하는 함수
 *
 * @param {number[]} array 정수가 담긴 배열
 * @param {number} n 정수
 * @returns {number} array에 n이 몇 개 있는 지
 */
function solution(array, n) {
  let answer = array.reduce((accumulator, currentValue) => {
    if (currentValue === n) {
      accumulator++;
    }

    return accumulator;
  }, 0);

  return answer;
}

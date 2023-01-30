/**
 * @ts-check
 * https://school.programmers.co.kr/learn/courses/30/lessons/120807
 */

/**
 * 두 수가 같으면 1 다르면 -1을 출력하는 함수
 *
 * @param {number} num1 첫 번째 정수
 * @param {number} num2 두 번째 정수
 * @returns {number} 주어진 두 정수가 같으면 1 다르면 -1
 */
function solution(num1, num2) {
  let answer = num1 === num2 ? 1 : -1;

  return answer;
}

/**
 * @ts-check
 * https://school.programmers.co.kr/learn/courses/30/lessons/120806
 */

/**
 * 첫 번째 정수를 두 번째 정수로 나눈 값에 1,000을 곱한 후 정수 부분을 출력하는 함수
 *
 * @param {number} num1 첫 번째 정수
 * @param {number} num2 두 번째 정수
 * @returns {number} 첫 번째 정수를 두 번째 정수로 나눈 값에 1,000을 곱한 후 정수 부분
 */
function solution(num1, num2) {
  let answer = Math.trunc((num1 / num2) * 1000);

  return answer;
}

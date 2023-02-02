/**
 * @ts-check
 * https://school.programmers.co.kr/learn/courses/30/lessons/120813
 */

/**
 * n 이하의 홀수가 오름차순으로 담긴 배열을 출력하는 함수
 *
 * @param {number} n 정수
 * @returns {number[]} n 이하의 홀수가 오름차순으로 담긴 배열
 */
function solution(n) {
  /** @type {number[]} */
  const answer = [];
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 1) {
      answer.push(i);
    }
  }

  return answer;
}

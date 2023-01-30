/**
 * @ts-check
 * https://school.programmers.co.kr/learn/courses/30/lessons/120585
 */

/**
 * 머쓱이보다 키 큰 사람 수를 출력하는 함수
 *
 * @param {number[]} array 머쓱이네 반 친구들의 키가 담긴 정수 배열
 * @param {number} height 머쓱이의 키
 * @returns {number} 머쓱이보다 키 큰 사람 수
 */
function solution(array, height) {
  let answer = array.reduce((accumulator, currentValue) => {
    if (currentValue > height) {
      accumulator++;
    }

    return accumulator;
  }, 0);

  return answer;
}

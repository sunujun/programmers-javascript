/**
 * @ts-check
 * https://school.programmers.co.kr/learn/courses/30/lessons/120809
 */

/**
 * 주어진 정수 배열의 각 원소에 두 배한 원소를 가진 배열을 출력하는 함수
 *
 * @param {number[]} numbers 정수 배열
 * @returns {number[]} 주어진 정수 배열의 각 원소에 두 배한 원소를 가진 배열
 */
function solution(numbers) {
  /** map 사용하는 방법 */
  const answer = numbers.map((value) => value * 2);
  /** reduce 사용하는 방법 */
  const answerReduce = numbers.reduce(
    (accumulator, currentValue) => [...accumulator, currentValue * 2],
    []
  );

  return answer;
}

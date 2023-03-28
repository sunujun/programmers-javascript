/**
 * @ts-check
 * https://school.programmers.co.kr/learn/courses/30/lessons/120812
 */

/**
 * 주어진 값 중에서 가장 자주나오는 값을 출력하는 함수
 *
 * @param {number[]} array 주어진 정수 배열
 * @returns {number} 최빈값, 최빈값이 여러 개면 -1
 */
function solution(array) {
  // 새로운 객체 생성 (객체에 있는 값이라면 +1, 없는 값이라면 1)
  const counts = array.reduce(
    (accumulator, currentValue) =>
      accumulator[currentValue]
        ? { ...accumulator, [currentValue]: accumulator[currentValue] + 1 }
        : { ...accumulator, [currentValue]: 1 },
    {}
  );
  /** counts의 value array 중 최대값 */
  const max = Math.max(...Object.values(counts));
  /** counts에서 value가 max 값과 같은 key의 배열 */
  const modes = Object.keys(counts).filter((key) => counts[key] === max);

  return modes.length === 1 ? parseInt(modes[0]) : -1;
}

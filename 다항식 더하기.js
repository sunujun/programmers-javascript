/**
 * @ts-check
 * https://school.programmers.co.kr/learn/courses/30/lessons/120863
 */

/**
 * 다항식을 동류항끼리 계산해 출력하는 함수
 *
 * @param {string} polynomial 주어지는 다항식
 * @returns {string} 다항식을 더한 값
 */
function solution(polynomial) {
  /** 전체 항 */
  const term = polynomial.split(" + ");
  /** 일차 항 */
  const linearTerm = term
    .filter((value) => value.includes("x"))
    .map((value) => parseInt(value.replace("x", "")) || 1)
    .reduce((a, c) => a + c, 0);
  /** 상수항 */
  const constantTerm = term
    .filter((value) => !value.includes("x"))
    .reduce((a, c) => a + parseInt(c), 0);
  /**
   * 합산된 항
   * @type {(number | string)[]}
   */
  const resultTerm = [];
  // 조건에 따른 일차 항 변환 후, resultTerm에 추가
  if (linearTerm) {
    if (linearTerm === 1) {
      resultTerm.push("x");
    } else {
      resultTerm.push(linearTerm + "x");
    }
  }
  // 상수항이 0이 아니라면, resultTerm에 추가
  if (constantTerm) {
    resultTerm.push(constantTerm);
  }
  /** 합산된 항을 요구하는 형태로 변환 */
  const answer = resultTerm.join(" + ");

  return answer;
}

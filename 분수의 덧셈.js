/**
 * @ts-check
 * https://school.programmers.co.kr/learn/courses/30/lessons/120808
 * 중첩 함수: https://siyoon210.tistory.com/162
 * 최대공약수, 최소공배수: https://myjamong.tistory.com/138
 */

/**
 * 두 분수를 더한 값을 기약 분수로 나타내는 함수
 *
 * @param {number} numer1 첫 번째 분수의 분자
 * @param {number} denom1 첫 번째 분수의 분모
 * @param {number} numer2 두 번째 분수의 분자
 * @param {number} denom2 두 번째 분수의 분모
 * @returns {number[]} 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열
 */
function solution(numer1, denom1, numer2, denom2) {
  /**
   * 두 수의 최대공약수를 구하는 함수
   *
   * @param {number} a 첫 번째 정수
   * @param {number} b 두 번째 정수
   * @returns {number} 두 정수의 최대공약수
   */
  function GCD(a, b) {
    return a % b ? GCD(b, a % b) : b;
  }

  /** 두 분수를 더했을 때, 분자 */
  const numer = numer1 * denom2 + numer2 * denom1;
  /** 두 분수를 더했을 때, 분모 */
  const denom = denom1 * denom2;
  /** 두 분수를 더했을 때의 분자와 분모의 최대공약수 */
  const gcd = GCD(numer, denom);
  /** 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열 */
  const answer = [numer / gcd, denom / gcd];

  return answer;
}

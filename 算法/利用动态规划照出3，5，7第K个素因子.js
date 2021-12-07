//https://juejin.cn/post/7039010274178760741/
/**
 * @param {number} k
 * @return {number}
 */
var getKthMagicNumber = function (k) {
  let dpList = new Array(k + 1).fill(1)
  let p3 = 0
  let p5 = 0
  let p7 = 0
  for (let index = 1; index <= k; index++) {
    const number3 = dpList[p3] * 3
    const number5 = dpList[p5] * 5
    const number7 = dpList[p7] * 7
    console.log({ number3, number5, number7 })
    const min = Math.min(number3, number5, number7)
    min === number3 && p3++
    min === number5 && p5++
    min === number7 && p7++
    dpList[index] = min
  }
  return dpList[k - 1]
};

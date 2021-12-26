// https://juejin.cn/post/7046058948964646919/

/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let dpList = new Array(n).fill(0)
  dpList[0] = 0
  dpList[1] = 1
  const MOD = 1000000007;
  for (let index = 2; index <= n; index++) {
    dpList[index] = (dpList[index - 2] + dpList[index - 1]) % MOD
  }
  return dpList[n]
};

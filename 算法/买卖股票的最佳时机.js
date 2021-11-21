var maxProfit = function (prices) {
  let dpList = new Array(prices.length).fill(0)
  let min = prices[0]
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > min) {
      dpList[i] = prices[i] - min
    } else {
      dpList[i] = 0
      min = prices[i]
    }
  }
  return Math.max(...dpList)
}

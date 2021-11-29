var longestWPI = function (hours) {
  // 前缀和
  let preSum = new Array(hours.length + 1).fill(0)
  for (let i = 0; i < hours.length; i++) {
    if (hours[i] > 8) preSum[i + 1] = preSum[i] + 1
    else preSum[i + 1] = preSum[i] - 1
  }

  console.log({ preSum })

  // 单减栈
  let stack = []
  stack.push(0)
  for (let i = 1; i < preSum.length; i++) {
    if (preSum[stack[stack.length - 1]] > preSum[i]) {
      stack.push(i)
    }
  }

  console.log({ stack })

  // 从右到左求最大跨度
  let max = 0
  for (let i = preSum.length - 1; i > max; i--) {
    while (stack.length > 0 && preSum[stack[stack.length - 1]] < preSum[i]) {
      max = Math.max(max, i - stack.pop())
    }
  }
  return max

};



const max = longestWPI([9, 9, 6, 0, 6, 6, 9])
console.log({ max })
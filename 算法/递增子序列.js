/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let dp = new Array(nums.length).fill(1)
  for (let i = 1; i < nums.length; i++) { // 外循环
    const right = nums[i]
    for (let j = 0; j < i; j++) { // 内循环
      const left = nums[j]
      if (left < right) {
        dp[i] = Math.max(dp[i], dp[j] + 1) //记录长度
      }
    }
  }

  return Math.max(...dp) // 取得最大长度
};

console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]))
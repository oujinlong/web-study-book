//https://juejin.cn/post/7066448433183195150/ 

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var findKthLargest = function(nums, k) {
//    nums = nums.sort((a, b) => {
//         return b - a
//     })
//     return nums[k - 1]
// };

var findKthLargest = function (nums, k) {
  let min = nums[0]
  let max = nums[0]
  // 找出最小， 最大值
  for (let i = 1; i < nums.length; i++) {
    let num = nums[i]
    min = min > num ? num : min
    max = max < num ? num : max
  }
  const list = new Array(max - min + 1).fill(0) // 利用最大值减去最小值来做长度
  for (let index = 0; index < nums.length; index++) {
    const num = nums[index]
    list[num - min] = list[num - min] + 1 // 利用下标来表示数字，元素的个数就是该下标数字出现的次数
  }
  for (let index = list.length - 1; index >= 0; index--) { // 有大到小开始遍历
    const count = list[index] // 得出每个数字出现的次数
    k = k - count // 除去 k 个数字
    if (k <= 0) { // k 满足条件
      return index + min // 返回下标就是第k大元素
    }
  }
}
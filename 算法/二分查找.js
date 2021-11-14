// https://juejin.cn/post/7030487883043569671/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let mid = Math.floor(nums.length / 2)
  let left = mid - 1
  let right = mid + 1
  if (nums[mid] === target) {
    return mid
  }
  let isLeft = nums[left] >= target
  while ((isLeft && left >= 0)) {
    if (nums[left] === target) {
      return left
    }

    left--
  }
  while (!isLeft && right <= nums.length) {
    if (right <= nums.length - 1 && nums[right] === target) {
      return right
    }
    right++
  }
  return -1
};

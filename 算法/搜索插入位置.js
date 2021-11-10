/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let insertIndex = nums.indexOf(target)
  if (insertIndex !== -1) {
    return insertIndex
  } else {
    insertIndex = nums.length - 1
    while (nums[insertIndex] > target) {
      nums[insertIndex + 1] = nums[insertIndex]
      insertIndex--
    }
    nums[insertIndex + 1] = target
  }
  return insertIndex + 1
};
/**
 * @param {number} k
 * @param {number[]} nums
 */
/**
 * https://leetcode-cn.com/problems/kth-largest-element-in-a-stream/
*/

//常规
var KthLargest = function (k, nums) {
  for (let j = 0; j < nums.length - 1; j++) {
    for (let i = 0; i < nums.length - 1; i++) {
      let current = nums[i]
      let next = nums[i + 1]
      if (current > next) {
        let temp = nums[i]
        nums[i] = nums[i + 1]
        nums[i + 1] = temp
      }
    }

  }
  this.k = k
  this.nums = nums

};

/** 
* @param {number} val
* @return {number}
*/
KthLargest.prototype.add = function (val) {
  this.nums.push(val)
  let insertIndex = this.nums.length - 2
  while (insertIndex >= 0 && this.nums[insertIndex] > val) {
    this.nums[insertIndex + 1] = this.nums[insertIndex]
    insertIndex--
  }
  this.nums[insertIndex + 1] = val
  return this.nums[this.nums.length - this.k]
};


//JS API

// /**
//  * @param {number} k
//  * @param {number[]} nums
//  */
//  var KthLargest = function(k, nums) {
//   this.nums = nums.sort((a, b) => b - a)
//   this.k = k
// };

// /** 
//  * @param {number} val
//  * @return {number}
//  */
// KthLargest.prototype.add = function(val) {
//   this.nums.push(val)
//   return this.nums.sort((a, b) => b - a)[this.k - 1]
// };
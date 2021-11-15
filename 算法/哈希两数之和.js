var twoSum = function (nums, target) {
  const map = {}
  for (let index = 0; index < nums.length; index++) {
    const values = Object.values(map)
    const keys = Object.keys(map)
    const number = nums[index]
    let i = values.indexOf(number)
    if (i !== -1) {
      return [parseInt(keys[i]), index]
    } else {
      map[String(index)] = target - number
    }
  }
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let index = 0; index < nums.length - 1; index++) {
    for (let subIndex = index + 1; subIndex < nums.length; subIndex++) {
      let x = nums[index]
      let y = nums[subIndex]
      if (target === x + y) {
        return [index, subIndex]
      }
    }
  }
};

const res = twoSum([2, 7, 11, 15], 9)
console.log(res)
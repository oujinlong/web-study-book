/**
 * @param {number[]} arr
 * @return {number[]}
 */
// https://juejin.cn/post/7040436259017195551/
let getMaxIndex = function (arr, ready) {
  let maxIndex = 0
  for (let index = 1; index < arr.length - ready; index++) {
    maxIndex = arr[maxIndex] > arr[index] ? maxIndex : index
  }
  return maxIndex
}

let trans = function (arr, index) {
  let left = 0
  let right = index
  while (left < right) {
    arr[left] = arr[left] ^ arr[right]
    arr[right] = arr[left] ^ arr[right]
    arr[left] = arr[left] ^ arr[right]
    left++
    right--
  }
  return arr
}

var pancakeSort = function (arr) {
  let ready = 0
  let res = []
  while (ready < arr.length - 1) {
    const maxIndex = getMaxIndex(arr, ready)
    arr = trans(arr, maxIndex)
    arr = trans(arr, arr.length - 1 - ready)
    maxIndex > 0 ? res.push(maxIndex + 1) : ''
    arr.length - 1 - ready > 0 ? res.push(arr.length - 1 - ready + 1) : ''
    ready++
  }
  return res
};

// 排序算法
/**
 * 它重复地走访过要排序的元素列，依次比较两个相邻的元素，
 * 如果顺序（如从大到小、首字母从Z到A）错误就把他们交换过来。
 * 走访元素的工作是重复地进行直到没有相邻元素需要交换，也就是说该元素列已经排序完成。
 */
let s = [2, 1, 3, 10, 4, 5, 8, 11, 9, -2, 100, 99, -30]
const bubbleSort = function (arr) {
  // 大循环次数为长度 - 1
  for (let j = 0; j < s.length - 1; j++) {
    // 小循环直至倒数第二个 （倒数第二个会和最后一个去比较，然后沉底）
    for (let i = 0; i < arr.length - 1; i++) {
      // 小循环当前数据
      let current = arr[i]
      // 小循环右边相邻数据
      let next = arr[i + 1]
      if (current > next) {
        // 交换位置 （往右沉）
        let temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
      }
    }
  }

  return arr

}

console.log(bubbleSort(s))
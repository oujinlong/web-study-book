// 排序算法 
/**
 * 选择排序法是一种不稳定的排序算法。它的工作原理是每一次从待排序的数据元素中选出最小（或最大）的一个元素，
 * 存放在序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，
 * 然后放到已排序序列的末尾。以此类推，直到全部待排序的数据元素排完。
 */
//选择排序
const chooseSort = function (arr) {
  // 遍历数组找出最小元素，放在排序末尾
  for (let i = 0; i < arr.length - 1; i++) {
    let minNumberIndex = i; // 记录最小数据的下标， 默认为 循环的 i，即未参加排序的第一个数据
    for (let j = i + 1; j < arr.length; j++) { // 遍历未排序部分的数据，目的找到最小值的 index
      if (arr[minNumberIndex] > arr[j]) {
        // 最小值下标替换
        minNumberIndex = j
      }
    }
    // 最小值下标对应的为未参加排序的数据中最小值的下标，将数据和 i 下标数据交换，第 i 个即算入已参加排序的数据
    let temp = arr[i]
    arr[i] = arr[minNumberIndex]
    arr[minNumberIndex] = temp
  }
  return arr
}


const s = [22, 8, 16, 5, 47, 1, 10, 3, 15]
console.log(chooseSort(s))
// 排序算法
/**
 * 插入排序，一般也被称为直接插入排序。对于少量元素的排序，它是一个有效的算法。
 * 插入排序是一种最简单的排序方法，它的基本思想是将一个记录插入到已经排好序的有序表中，
 * 从而一个新的、记录数增1的有序表。在其实现过程使用双层循环，外层循环对除了第一个元素之外的所有元素，
 * 内层循环对当前元素前面有序表进行待插入位置查找，并进行移动
 */
let s = [2, 1, 3, 10, 4, 5, 8, 11, 9, -2, 99, 100]
const insertSort = function (arr) {
  for (let i = 1; i < s.length - 1; i++) {
    // 当前需要插入的数据
    let currentNumber = s[i]
    let insertIndex = 0
    for (let j = i - 1; j >= 0; j--) {
      // 已经排好的数据 （遍历做比较）
      let compatedNumber = arr[j]
      // 如果需要插入的数据比已经排序好的遍历数据要大，那么插在改遍历位置下一个
      if (currentNumber >= compatedNumber) {
        // 记录遍历位置的下一个位置
        insertIndex = j + 1
        break
      }
    }
    // 删除原来的数据 （即将插入的数据）
    arr.splice(i, 1)
    // 插入数据
    arr.splice(insertIndex, 0, currentNumber)
  }
  return arr
}
console.log(insertSort(s))
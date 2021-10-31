// 排序算法
/**
 * 插入排序，一般也被称为直接插入排序。对于少量元素的排序，它是一个有效的算法。
 * 插入排序是一种最简单的排序方法，它的基本思想是将一个记录插入到已经排好序的有序表中，
 * 从而一个新的、记录数增1的有序表。在其实现过程使用双层循环，外层循环对除了第一个元素之外的所有元素，
 * 内层循环对当前元素前面有序表进行待插入位置查找，并进行移动
 */
// 插入排序
const insertSort = function (arr) {
  // 遍历数组 从下标为1的位置开始遍历 (下标为0的数据默认已经参与了排序)
  for (let i = 1; i < arr.length; i++) {
    //		下标为 i 的数据为待插入数据 ; 下一个问题:找到待插入位置
    let currentNumber = arr[i]
    let insertIndex = i - 1// 待插入位置，默认当前为插入位置，index一直左移，直到找到位置
    // 合适的位置：  插入的数据比移动下标对应的数据要大
    while (insertIndex >= 0 && arr[insertIndex] > currentNumber) {
      arr[insertIndex + 1] = arr[insertIndex]
      insertIndex--
    }
    arr[insertIndex + 1] = currentNumber
  }
  return arr
}

const s = [22, 8, 16, 5, 47, 1, 10, 3, 15]
console.log(insertSort(s))
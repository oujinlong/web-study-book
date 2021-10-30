//排序算法
/**
 * 希尔排序是把记录按下标的一定增量分组，对每组使用直接插入排序算法排序；
 * 随着增量逐渐减少，每组包含的关键词越来越多，当增量减至 1 时，整个文件恰被分成一组，算法便终止。
 */
let s = [2, 1, 3, 10, 4, 5, 8, 11, 9, -2, 100, 99, -30]
const shellSort = (arr) => {
  for (let distance = Math.floor(s.length / 2); distance >= 1; distance = Math.floor(distance / 2)) {
    // distance = 6
    // [2,8] [1,11] [3,9] [10, -2] [4,100] [5, 99]
    // [2, 10, 8, -2] [1,4, 11, 100] [3,59,99]
    for (let i = distance; i <= arr.length; i += distance) {
      // 当作插入排序算法
      // i: 6 12
      // 换算 index
      let index = i - distance
      let currentNumber = arr[index]
      let insertIndex = index - distance
      while (insertIndex >= 0 && currentNumber < arr[insertIndex]) {
        arr[insertIndex + distance] = arr[insertIndex]
        insertIndex = insertIndex - distance
      }
      arr[insertIndex + distance] = currentNumber
    }
  }
  return arr
}

console.log(shellSort(s))
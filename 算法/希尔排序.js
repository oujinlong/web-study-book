//排序算法
/**
 * 希尔排序是把记录按下标的一定增量分组，对每组使用直接插入排序算法排序；
 * 随着增量逐渐减少，每组包含的关键词越来越多，当增量减至 1 时，整个文件恰被分成一组，算法便终止。
 */
// shell 排序
const shellSort = function (arr) {
  // 增量为 arr.length / 2 /2 /2 /2
  for (let add = Math.floor(arr.length / 2); add > 0; add = Math.floor(add / 2)) {
    //		第一组数据: add = 5  [22, 1] [8, 10] [16, 3] [5, 15] [47, 20] === [arr[0], arr[5]]  [arr[1], arrp[6]] .....
    //		第二组数据: add = 2  [22, 16, 47, 10, 15] [8, 5, 1, 3, 20] ===  [arr[0], arr[2], [arr[4]]....., arr[add * n]]
    //    第三组数据: add = 1  [22, 8, 16, 5, 47, 1, 10, 3, 15, 20] 
    // 找到每组数据的对应下标，做插入排序
    // 待插入数据 index
    debugger
    for (let i = add; i < arr.length; i += add) {
      let index = i - add
      let currentNumber = arr[i]
      let insertIndex = index
      while (insertIndex >= 0 && currentNumber < arr[insertIndex]) {
        arr[insertIndex + add] = arr[insertIndex]
        insertIndex -= add
      }
      arr[insertIndex + add] = currentNumber
    }
  }
  return arr
}

const s = [22, 8, 16, 5, 47, 1, 10, 3, 15, 20, 198, 2, 120]
console.log(shellSort(s))
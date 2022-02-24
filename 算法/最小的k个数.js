// https://juejin.cn/post/7053830995014844453/
// 计数法
var getLeastNumbers = function (arr, k) {
  if (k === 0) {
    return []
  }
  const newArr = new Array(Math.max(...arr) + 1).fill(0) // 新数组
  for (let index = 0; index < arr.length; index++) {
    newArr[arr[index]] += 1
  }
  const res = []
  for (let index = 0; index < newArr.length; index++) {
    for (let j = 0; j < newArr[index]; j++) {
      if (res.length === k) {
        break
      }
      res.push(index)
    }
    if (res.length === k) {
      break
    }
  }
  return res
}

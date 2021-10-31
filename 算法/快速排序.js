const quickSort = function (arr) {
  if (arr.length === 0) {
    return []
  }
  // 去第一个值作为标数
  let standard = arr[0]
  // 遍历数组，小于标数放左边， 大于标数放右边
  const left = []
  const right = []
  for (let index = 1; index < arr.length; index++) {
    const number = arr[index]
    if (number < standard) {
      left.push(number)
    } else {
      right.push(number)
    }
  }
  // 递归调用
  return [...quickSort(left), standard, ...quickSort(right)]
}

const s = [22, 8, 16, 5, 47, 1, 10, 3, 15, 20, 198, 2, 120]
console.log(quickSort(s))
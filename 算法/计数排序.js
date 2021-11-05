const f = () => {
  let min = s[0]
  let max = s[0]
  // 找出最小， 最大值
  for (let i = 1; i < s.length; i++) {
    let num = s[i]
    min = min > num ? num : min
    max = max < num ? num : max
  }
  console.log({ min, max })
  // 创建 max - min + 1 长度的数组
  const countList = new Array(max - min + 1).fill(0)

  s.forEach(num => {
    countList[num - min] = countList[num - min] + 1
  })

  console.log(countList)
  const res = []
  countList.forEach((val, index) => {
    while (val > 0) {
      res.push(index + min)
      val--
    }
  })
  console.log(res)
}


const s = [3, 2, 6, 4, 5, 3, 7]
f(s)
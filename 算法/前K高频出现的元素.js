/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */ // 3 2 5 7. 2-0 3-1 
var topKFrequent = function (nums, k) {
  const min = Math.min(...nums)
  const max = Math.max(...nums)
  let countList = new Array(max - min + 1).fill({ val: 0, count: 0 })
  nums.forEach(num => {
    countList[num - min] = {
      val: num,
      count: countList[num - min].count + 1
    }
  })
  countList = countList.sort((a, b) => { return b.count - a.count })
  let index = 0
  const res = []
  while (index < k) {
    res.push(countList[index].val)
    index++
  }
  return res
};

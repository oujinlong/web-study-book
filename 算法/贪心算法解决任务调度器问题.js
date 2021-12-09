// https://juejin.cn/post/7039746689145503775/
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */


var leastInterval = function (tasks, n) {
  let obj = {} // key 任务 value 出现次数
  let maxCount = 0 // 出现频率最高的次数
  let equalCount = 0 // 和最高频相等的次数
  for (let index = 0; index < tasks.length; index++) {
    obj[tasks[index]] = obj[tasks[index]] ? obj[tasks[index]] + 1 : 1
  }
  const keys = Object.keys(obj)
  maxCount = obj[keys[0]]
  for (let index = 1; index < keys.length; index++) {
    const key = keys[index]
    if (maxCount < obj[key]) {
      maxCount = obj[key]
      equalCount = 0
    } else if (maxCount === obj[key]) {
      equalCount++
    }
  }
  return Math.max((maxCount - 1) * (n + 1) + 1 + equalCount, tasks.length)
};
// A -> . -> . -> A -> . -> . -> A



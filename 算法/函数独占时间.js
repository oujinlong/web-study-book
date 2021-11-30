/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */

const createItem = function (item) {
  const a = item.split(':')
  return {
    id: a[0],
    isStart: a[1] === 'start',
    time: parseInt(a[2])
  }
}

var exclusiveTime = function (n, logs) {
  let dpList = new Array(n).fill(0)
  const stack = []
  let pre = 0
  for (let index = 0; index < logs.length; index++) {
    const item = createItem(logs[index])
    if (item.isStart) {
      if (stack.length > 0) {
        dpList[stack[stack.length - 1]] += item.time - pre
      }
      pre = item.time
      stack.push(item.id)
    } else {
      dpList[item.id] += item.time - pre + 1
      pre = item.time + 1
      stack.pop()
    }
  }
  return dpList
};


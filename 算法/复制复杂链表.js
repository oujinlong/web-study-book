// https://juejin.cn/post/7034067466477109278
var handle = function (head, map) {
  if (head === null) {
    return null
  }
  if (!map.get(head)) {
    map.set(head, { val: head.val })
    Object.assign(map.get(head), { next: handle(head.next, map), random: handle(head.random, map) })
  }
  return map.get(head)
}

var copyRandomList = function (head) {
  let map = new Map()
  return handle(head, map)
};

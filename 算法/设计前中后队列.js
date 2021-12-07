// https://juejin.cn/post/7038892948078985253
var NodeList = function (val, next) {
  this.val = val
  this.next = next
}
var FrontMiddleBackQueue = function () {
  this.head = null
};

/** 
* @param {number} val
* @return {void}
*/
FrontMiddleBackQueue.prototype.pushFront = function (val) {
  this.head = new NodeList(val, this.head)
};

/** 
* @param {number} val
* @return {void}
*/
FrontMiddleBackQueue.prototype.pushMiddle = function (val) {
  if (!this.head || !this.head.next) {
    this.pushFront(val)
    return
  }
  let slow = this.head
  let fast = this.head.next
  while (fast && fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
  }
  slow.next = new NodeList(val, slow.next)
};

/** 
* @param {number} val
* @return {void}
*/
FrontMiddleBackQueue.prototype.pushBack = function (val) {
  if (!this.head) {
    this.pushFront(val)
    return
  }
  let p = this.head
  while (p.next) {
    p = p.next
  }
  p.next = new NodeList(val, null)
};

/**
* @return {number}
*/
FrontMiddleBackQueue.prototype.popFront = function () {
  if (!this.head) {
    return -1
  }
  const res = this.head.val
  this.head = this.head.next
  return res
};

/**
* @return {number}
*/
FrontMiddleBackQueue.prototype.popMiddle = function () {
  if (!this.head) {
    return -1
  }
  if (!this.head.next || !this.head.next.next) {
    // 仅有一个元素
    return this.popFront()
  }

  let slow = this.head
  let fast = this.head.next.next
  while (fast && fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
  }
  const res = slow.next
  slow.next = slow.next.next
  return res.val
};

/**
* @return {number}
*/
FrontMiddleBackQueue.prototype.popBack = function () {
  if (!this.head) {
    return -1
  }
  if (!this.head.next) {
    return this.popFront()
  }
  let backPre = this.head
  let back = this.head.next
  while (back.next) {
    backPre = backPre.next
    back = back.next
  }
  backPre.next = null
  return back.val
};

/**
* Your FrontMiddleBackQueue object will be instantiated and called as such:
* var obj = new FrontMiddleBackQueue()
* obj.pushFront(val)
* obj.pushMiddle(val)
* obj.pushBack(val)
* var param_4 = obj.popFront()
* var param_5 = obj.popMiddle()
* var param_6 = obj.popBack()
*/

// const queue = new FrontMiddleBackQueue()
// queue.pushFront(1)
// queue.pushBack(2)
// queue.pushMiddle(3)
// queue.pushMiddle(4)
// console.log(queue.popFront())
// console.log(queue.popMiddle())
// console.log(queue.popMiddle())
// console.log(queue.popBack())
// console.log(queue.popFront())
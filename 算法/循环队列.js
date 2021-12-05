//https://juejin.cn/post/7038216569385680910

/**
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.front = 0
  this.rear = 0
  this.capacity = k
  this.queue = new Array(k)
};

/** 
* @param {number} value
* @return {boolean}
*/
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.isFull()) {
    return false
  } else {
    this.queue[this.rear] = value
    this.rear = (this.rear + 1) % this.capacity
    return true
  }
};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.deQueue = function () {
  if (this.isEmpty()) {
    return false
  } else {
    this.queue[this.front] = null
    this.front = (this.front + 1) % this.capacity
    return true
  }
};

/**
* @return {number}
*/
MyCircularQueue.prototype.Front = function () {
  return this.isEmpty() ? -1 : this.queue[this.front]
};

/**
* @return {number}
*/
MyCircularQueue.prototype.Rear = function () {
  let rearIndex = this.rear === 0 ? this.capacity - 1 : this.rear - 1
  return this.isEmpty() ? -1 : this.queue[rearIndex]
};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.isEmpty = function () {
  return this.rear === this.front && !this.queue[this.front]
};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.isFull = function () {
  return this.rear === this.front && !!this.queue[this.front]
};

/**
* Your MyCircularQueue object will be instantiated and called as such:
* var obj = new MyCircularQueue(k)
* var param_1 = obj.enQueue(value)
* var param_2 = obj.deQueue()
* var param_3 = obj.Front()
* var param_4 = obj.Rear()
* var param_5 = obj.isEmpty()
* var param_6 = obj.isFull()
*/

// https://juejin.cn/post/7038250399500861471/

/**
 * @param {number} k
 */
var MyCircularDeque = function (k) {
  this.capatity = k
  this.queue = new Array(k)
  this.front = 0
  this.rear = 0
};

/** 
* @param {number} value
* @return {boolean}
*/
MyCircularDeque.prototype.insertFront = function (value) {
  if (this.isFull()) {
    return false
  } else {
    this.front = this.front === 0 ? this.capatity - 1 : this.front - 1
    this.queue[this.front] = value
    return true
  }
};

/** 
* @param {number} value
* @return {boolean}
*/
MyCircularDeque.prototype.insertLast = function (value) {
  if (this.isFull()) {
    return false
  } else {
    this.queue[this.rear] = value
    this.rear = (this.rear + 1) % this.capatity
    return true
  }
};

/**
* @return {boolean}
*/
MyCircularDeque.prototype.deleteFront = function () {
  if (this.isEmpty()) {
    return false
  } else {
    this.queue[this.front] = null
    this.front = (this.front + 1) % this.capatity
    return true
  }
};

/**
* @return {boolean}
*/
MyCircularDeque.prototype.deleteLast = function () {
  if (this.isEmpty()) {
    return false
  } else {
    this.rear = this.rear === 0 ? this.capatity - 1 : this.rear - 1
    this.queue[this.rear] = null
    return true
  }
};

/**
* @return {number}
*/
MyCircularDeque.prototype.getFront = function () {
  if (this.isEmpty()) {
    return -1
  } else {
    return this.queue[this.front]
  }
};

/**
* @return {number}
*/
MyCircularDeque.prototype.getRear = function () {
  if (this.isEmpty()) {
    return -1
  } else {
    let index = this.rear === 0 ? this.capatity - 1 : this.rear - 1
    return this.queue[index]
  }
};

/**
* @return {boolean}
*/
MyCircularDeque.prototype.isEmpty = function () {
  return this.rear === this.front && !this.queue[this.front] && this.queue[this.front] !== 0
};

/**
* @return {boolean}
*/
MyCircularDeque.prototype.isFull = function () {
  return this.rear === this.front && this.queue[this.front] !== null && this.queue[this.front] !== undefined
};

/**
* Your MyCircularDeque object will be instantiated and called as such:
* var obj = new MyCircularDeque(k)
* var param_1 = obj.insertFront(value)
* var param_2 = obj.insertLast(value)
* var param_3 = obj.deleteFront()
* var param_4 = obj.deleteLast()
* var param_5 = obj.getFront()
* var param_6 = obj.getRear()
* var param_7 = obj.isEmpty()
* var param_8 = obj.isFull()
*/

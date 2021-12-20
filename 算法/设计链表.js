// https://juejin.cn/post/7043838877047455774/
var MyLinkedList = function (val, next) {
  this.next = next
  this.val = val

};

MyLinkedList.prototype.isNull = function () {
  return this.val === undefined || this.val === null
}

/** 
* @param {number} index
* @return {number}
*/
MyLinkedList.prototype.get = function (index) {
  let res = this
  for (let i = 0; i < index; i++) {
    res = res.next
    if (!res || res.isNull()) {
      return -1
    }
  }
  return res.isNull() ? -1 : res.val
};

/** 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtHead = function (val) {
  let temp = new MyLinkedList(this.val, this.next)
  this.val = val
  this.next = temp
};

/** 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtTail = function (val) {
  if (this.isNull()) {
    return this.addAtHead(val)
  }
  let p = this
  while (p.next && p.next.isNull() === false) {
    p = p.next
  }
  p.next = new MyLinkedList(val, null)
};

/** 
* @param {number} index 
* @param {number} val
* @return {void}
*/
MyLinkedList.prototype.addAtIndex = function (index, val) {

  if (index <= 0) {
    return this.addAtHead(val)
  }
  let p = this
  for (; index > 1; index--) {
    p = p.next
    if (!p || p.isNull()) {
      return
    }
  }

  const node = new MyLinkedList(val, p.next)
  p.next = node
};

/** 
* @param {number} index
* @return {void}
*/
MyLinkedList.prototype.deleteAtIndex = function (index) {
  let p = this
  if (index === 0) {
    this.val = this.next ? this.next.val : null
    this.next = this.next ? this.next.next : null
    return
  }
  for (; index - 1 > 0; index--) {
    p = p.next
  }
  if (p) {
    p.next = p.next ? p.next.next : null
  }
};
//  1 2 7 3
/**
* Your MyLinkedList object will be instantiated and called as such:
* var obj = new MyLinkedList()
* var param_1 = obj.get(index)
* obj.addAtHead(val)
* obj.addAtTail(val)
* obj.addAtIndex(index,val)
* obj.deleteAtIndex(index)
*/
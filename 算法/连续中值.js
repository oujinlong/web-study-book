/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.dataList = [] // 数值数组
};

/** 
* @param {number} num
* @return {void}
*/
MedianFinder.prototype.addNum = function (num) {
  // 插入
  if (this.dataList.length === 0) {
    this.dataList.push(num)
  } else {
    let insertIndex = this.dataList.length
    for (let index = 0; index < this.dataList.length; index++) {
      if (this.dataList[index] > num) {
        insertIndex = index // 插入位置
        break
      }
    }
    this.dataList.splice(insertIndex, 0, num)
  }
};

/**
* @return {number}
*/
MedianFinder.prototype.findMedian = function () {
  if (this.dataList.length % 2 === 0) {
    // 偶数
    const index = this.dataList.length / 2 - 1
    return (this.dataList[index] + this.dataList[index + 1]) / 2
  } else {
    return this.dataList[parseInt(this.dataList.length / 2)]

  }
};

/**
* Your MedianFinder object will be instantiated and called as such:
* var obj = new MedianFinder()
* obj.addNum(num)
* var param_2 = obj.findMedian()
*/
//https://juejin.cn/post/7038916058547224589/

var RecentCounter = function () {
  this.requestList = []
};


/** 
* @param {number} t
* @return {number}
*/
RecentCounter.prototype.ping = function (t) {
  this.requestList = this.requestList.filter(t1 => {
    return t1 >= t - 3000
  })
  this.requestList.push(t)
  return this.requestList.length
};

/**
* Your RecentCounter object will be instantiated and called as such:
* var obj = new RecentCounter()
* var param_1 = obj.ping(t)
*/
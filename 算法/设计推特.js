//https://juejin.cn/post/7066622412497879053/

var Twitter = function () {
  this.dataQuene = []
  this.followTable = []
};

/** 
* @param {number} userId 
* @param {number} tweetId
* @return {void}
*/
Twitter.prototype.postTweet = function (userId, tweetId) {
  this.dataQuene.unshift({
    tweetId,
    userId
  })

};

/** 
* @param {number} userId
* @return {number[]}
*/
Twitter.prototype.getNewsFeed = function (userId) {
  let res = []
  const followList = this.followTable.filter(item => item.followerId === userId)
  for (let index = 0; index < this.dataQuene.length; index++) {
    const data = this.dataQuene[index]
    if (data.userId === userId || followList.some(item => data.userId === item.followeeId)) {
      res.push(data.tweetId)
      if (res.length === 10) {
        return res
      }
    }
  }
  return res
};

/** 
* @param {number} followerId 
* @param {number} followeeId
* @return {void}
*/
Twitter.prototype.follow = function (followerId, followeeId) {
  if (this.followTable.some(item => item.followerId === followerId && item.followeeId === followeeId)) {
    // 已关注
    return
  } else {
    // 去关注
    this.followTable.push({
      followeeId,
      followerId
    })
  }
};

/** 
* @param {number} followerId 
* @param {number} followeeId
* @return {void}
*/
Twitter.prototype.unfollow = function (followerId, followeeId) {
  let removeIndex = -1
  for (let index = 0; index < this.followTable.length; index++) {
    const obj = this.followTable[index]
    if (obj.followeeId === followeeId && obj.followerId === followerId) {
      removeIndex = index
      break
    }
  }
  this.followTable.splice(removeIndex, 1)
};

/**
* Your Twitter object will be instantiated and called as such:
* var obj = new Twitter()
* obj.postTweet(userId,tweetId)
* var param_2 = obj.getNewsFeed(userId)
* obj.follow(followerId,followeeId)
* obj.unfollow(followerId,followeeId)
*/

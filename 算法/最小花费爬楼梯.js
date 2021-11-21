var minCostClimbingStairs = function (cost) {
  if (cost.length < 2) {
    return 0
  }
  const dpList = new Array(cost.length).fill(0)
  dpList[0] = cost[0]
  dpList[1] = cost[1]
  for (let index = 2; index < cost.length; index++) {
    dpList[index] = Math.min(dpList[index - 1], dpList[index - 2]) + cost[index]
  }
  return Math.min(dpList[dpList.length - 1], dpList[dpList.length - 2])
}

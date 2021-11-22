var longestCommonSubsequence = function (text1, text2) {
  const l1 = text1.length
  const l2 = text2.length
  const dpList = []
  for (let index = 0; index < l1; index++) {
    dpList[index] = []
    for (let j = 0; j < l2; j++) {
      dpList[index].push(0)
    }
  }

  for (let i = 0; i < l1; i++) {
    for (let j = 0; j < l2; j++) {
      if (text1[i] === text2[j]) {
        dpList[i][j] = (i > 0 && j > 0) ? dpList[i - 1][j - 1] + 1 : 1
      } else {
        if (i > 0 && j > 0) {
          dpList[i][j] = Math.max(dpList[i - 1][j], dpList[i][j - 1])
        } else if (i > 0) {
          dpList[i][j] = dpList[i - 1][j]
        } else if (j > 0) {
          dpList[i][j] = dpList[i][j - 1]
        } else {
          dpList[i][j] = 0
        }
      }
    }
  }
  console.log(dpList)
  return dpList[l1 - 1][l2 - 1]
};

console.log(longestCommonSubsequence('ace', 'abced'))

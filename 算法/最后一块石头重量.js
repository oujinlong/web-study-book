// [掘金](https://leetcode-cn.com/submissions/detail/259219744/)
//         const sort = stones.sort((a, b) => {
//             return b - a
//         })
//         if (stones[0] === stones[1]) {
//             sort.splice(0,2)
//         } else {
//             sort[0] = sort[0] - sort[1]
//             sort.splice(1,1)
//         }
//     }
//     return stones
// };

var lastStoneWeight = function (stones) {
  if (stones.length <= 1) {
    return stones
  }
  const sort = stones.sort((a, b) => {
    return b - a
  })
  if (stones[0] === stones[1]) {
    sort.splice(0, 2)
  } else {
    sort[0] = sort[0] - sort[1]
    sort.splice(1, 1)
  }
  if (stones.length > 1) {
    return lastStoneWeight(stones)
  }
  return stones
}

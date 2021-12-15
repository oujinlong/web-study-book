// https://juejin.cn/post/7041591292899360776/

/**
 * @param {string[]} ops
 * @return {number}
 */
// var calPoints = function(ops) {
//     let score = []
//     for (let index = 0 ; index < ops.length; index++) {
//         const s = ops[index]
//         if (s === 'C') {
//             score.splice(score.length - 1 , 1)
//         } else if (s === 'D') {
//             score.push(parseInt(score[score.length - 1]) * 2)
//         } else if (s === '+') {
//             score.push(parseInt(score[score.length - 1]) + parseInt(score[score.length - 2]))
//         } else {
//             score.push(parseInt(s))
//         }
//     }
//     return score.reduce((pre, cur) => {return pre + cur})
// };

var calPoints = function (ops) {
  let score = []
  for (let index = 0; index < ops.length; index++) {
    const s = ops[index]
    if (s === 'C') {
      score.pop()
    } else if (s === 'D') {
      let number = score.pop()
      score.push(number)
      score.push(number * 2)
    } else if (s === '+') {
      let number1 = score.pop()
      let number2 = score.pop()
      score.push(number2)
      score.push(number1)
      score.push(number1 + number2)
    } else {
      score.push(parseInt(s))
    }
  }
  return score.reduce((pre, cur) => { return pre + cur })
}
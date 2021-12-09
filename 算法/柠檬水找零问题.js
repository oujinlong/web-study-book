// https://juejin.cn/post/7039689434236715021/
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let five = 0
  let ten = 0
  let twelve = 0
  for (let index = 0; index < bills.length; index++) {
    const bill = bills[index]
    if (bill === 5) {
      five++
    } else if (bill === 10) {
      if (five < 1) {
        return false
      } else {
        five--
        ten++
      }
    } else if (bill === 20) {
      if (ten >= 1 && five >= 1) {
        ten--
        five--
        twelve++
      } else if (five >= 3) {
        five = five - 3
        twelve++
      } else {
        return false
      }
    }
  }
  return true
}

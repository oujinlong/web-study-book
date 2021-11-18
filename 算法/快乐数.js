/**
 * @param {number} n
 * @return {boolean}
 */

const getNumber = (n) => {
  let res = 0
  do {
    const a = n % 10
    n = (n - a) / 10
    res += a * a
  } while (n >= 10)
  res += n * n
  return res
}

var isHappy = function (n) {
  let slow = getNumber(n)
  let quick = getNumber(getNumber(n))
  if (quick === 1) {
    return true
  }
  while (slow !== quick) {
    slow = getNumber(slow)
    quick = getNumber(getNumber(quick))
    console.log({ quick })
    if (quick === 1) {
      return true
    }
  }
  return false
};
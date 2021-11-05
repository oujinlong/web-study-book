const f = (x) => {
  return Number(String(x).split('').reverse().join('')) === x
}

const number = 123321

console.log(f(number))
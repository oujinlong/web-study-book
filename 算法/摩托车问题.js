let car = new Array(16).fill(100)

let canFill = false
let distance = 0
while (!canFill && car.length) {
  distance++
  car = car.map(item => {
    return item - 1
  })
  let empty = 0
  for (let index = 0; index < car.length - 2; index++) {
    empty += 100 - car[index]
  }
  canFill = car[car.length - 1] >= empty
  car.pop()
}
console.log(distance)

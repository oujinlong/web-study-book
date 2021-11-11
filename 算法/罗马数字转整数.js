var romanToInt = function (s) {
  const map = {
    'I': 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  }
  let res = 0
  for (let index = 0; index < s.length; index++) {
    let number = map[s[index]]

    if (index < s.length - 1 && number < map[s[index + 1]]) {
      res -= number
    } else {
      res += number
    }
  }
  return res
};

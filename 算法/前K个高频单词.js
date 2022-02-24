// https://juejin.cn/post/7067545202012979237
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const map = {}
  for (let index = 0; index < words.length; index++) {
    let mapStrObj = map[words[index]]
    map[words[index]] = mapStrObj ? mapStrObj + 1 : 1
  }
  // 转数组
  const list = []
  for (let key in map) {
    const count = map[key]
    list.push({ key, count })
  }
  return list.sort(function (a, b) {
    if (a.count != b.count) {
      return b.count - a.count;
    }
    let index = 0
    while (a.key[index] && b.key[index]) {
      if (a.key[index].charCodeAt() != b.key[index].charCodeAt()) {
        return a.key[index].charCodeAt() - b.key[index].charCodeAt();
      }
      index++
    }
    return a.key.length - b.key.length
  }).slice(0, k).map(item => item.key)

};

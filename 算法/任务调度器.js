var leastInterval = function (tasks, n) {
  var obj = {}, max = 0, maxcount = 0;
  for (let i = 0; i < tasks.length; i++) {
    obj[tasks[i]] = obj[tasks[i]] ? obj[tasks[i]] + 1 : 1
  }
  for (let i in obj) {
    if (max < obj[i]) {
      max = obj[i];
      maxcount = 1;
    } else if (max == obj[i]) {
      maxcount++;
    }
  }
  console.log({ max, maxcount })
  return Math.max((max - 1) * (n + 1) + maxcount, tasks.length)
};

console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 2))
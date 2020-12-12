const map = {
  A: function(base) {
    return base * 5
  },
  B: function (base) {
    return base * 4
  },
  C: function (base) {
    return base * 3
  },
  D: function (base) {
    return base * 2
  },
  E: function (base) {
    return base * 1
  },
}

function getBouns(base, level) {
  return map[level](base)
}


const p2 = {
  name: '李四',
  base: 1200,
  level: 'B'
}
p2.bouns = getBouns(p2.base, p2.level)

console.log(p2)
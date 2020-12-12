function getBouns(base, level) {
  if (level == 'A') {
    return base * 5
  }
  if (level == 'B') {
    return base * 4
  }
  if (level == 'C') {
    return base * 3
  }
  if (level == 'D') {
    return base * 2
  }
  if (level == 'E') {
    return base * 1
  }
}


const p1 = {
  name: '张三',
  base: 1000,
  level: 'A'
}
p1.bouns = getBouns(p1.base, p1.level)

console.log(p1)
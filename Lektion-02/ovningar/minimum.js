function min1(a, b) {
  if (a < b) return a;
  else return b;
}

function min2(a, b) {
  return a < b ? a : b;
}

function min3(a, b) {
  return Math.min(a, b);
}

console.log(min1(5, 10));
console.log(min2(5, 10));
console.log(min3(5, 10));

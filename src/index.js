module.exports = function reverse (n) {
  var n = String(Math.abs(n));
  return Number(n.split("").reverse().join(""));
}

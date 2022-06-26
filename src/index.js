module.exports = function reverse (n) {
  if (n >= 0) {
      return Number(String(n).split("").reverse().join(""));
  } else {
      const arr = String(n).split("");
      arr.shift();
      return Number(arr.reverse().join(""));
  }
}

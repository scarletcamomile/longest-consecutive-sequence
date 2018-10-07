module.exports = function longestConsecutiveLength(array) {
  let starttArr = new Set(array);
  let endArr = new Set();
  let answer = 0,
    right = 0,
    left = 0;
  for (let i in array) {
    if (!(array[i] in endArr)) {
      endArr.add(array[i]);
      left = right = array[i];
      while (starttArr.has(left - 1)) {
        left--;
        endArr.add(left);
      }
      while (starttArr.has(right + 1)) {
        right++;
        endArr.add(right);
      }
      answer = Math.max(answer, right - left + 1);
    }
  }
  return (answer)
}
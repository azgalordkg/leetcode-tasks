/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  const string = x.toString()
  let isPalindrome = true;
  for (let i = 0; i < Math.floor(string.length / 2); i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      isPalindrome = false
    }
  }
  return isPalindrome
};

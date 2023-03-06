/**
 * @param {string} s
 * @return {number}
 */
/**
 * Codemotion
 * Azamat Altymyshev
 */
const table = {
  'M': 1000,
  'D': 500,
  'C': 100,
  'L': 50,
  'X': 10,
  'V': 5,
  'I': 1,
}

const specialChars = ['I', 'X', 'C']
const ICases = ['V', 'X']
const XCases = ['L', 'C']
const CCases = ['D', 'M']

const romanToInt = function (s) {
  let skipNext = false;

  return s.split('').map((char, index) => {
    if (skipNext) {
      skipNext = false;
      return 0;
    }
    const nextChar = s[index + 1]
    if (specialChars.includes(char) && nextChar) {
      if (char === 'I' && ICases.includes(nextChar) || char === 'X' && XCases.includes(nextChar) || char === 'C' && CCases.includes(nextChar)) {
        skipNext = true;
        return table[nextChar] - table[char];
      }
    }
    return table[char]
  }).reduce((a, b) => a + b)
};

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
/**
 * Codemotion
 * Azamat Altymyshev
 */
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let x = i + 1; x < nums.length; x++) {
      if (nums[i] + nums[x] === target) {
        return [i, x]
      }
    }
  }
};

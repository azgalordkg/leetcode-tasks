/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  const sorted = []
  const length = nums.length
  let i = 0
  let j = length - 1;

  for (let x = 0; x < length; x++) {
    if (Math.abs(nums[i]) > Math.abs(nums[j])) {
      sorted.push(nums[i] * nums[i])
      i++
    } else {
      sorted.push(nums[j] * nums[j])
      j--
    }
  }
  return sorted.reverse();
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));


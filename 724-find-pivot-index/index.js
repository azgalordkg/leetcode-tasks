/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
  let left = 0;
  let right = nums.reduce((a, b) => a + b);

  for (let i = 0; i < nums.length; i++) {
    const pivot = nums[i]
    right -= pivot
    left += (nums[i - 1] || 0)
    if (left === right) return i;
  }
  return -1;
};

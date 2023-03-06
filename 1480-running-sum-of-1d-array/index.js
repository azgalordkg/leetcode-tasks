/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number[]}
 */
var runningSum = function(nums, val = 0) {
  return nums.map((num) => val += num)
};

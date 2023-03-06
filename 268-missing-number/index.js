/**
 * @param {number[]} nums
 * @return {number}
 */

var missingNumber = function(nums) {
  let summ = 0;
  let expected = 0;
  for (let i = 0; i <= nums.length; i++) {
    summ += nums[i] ? nums[i] : 0;
    expected += i;
  }
  return expected - summ;
};

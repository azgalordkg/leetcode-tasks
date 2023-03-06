const swap = (nums, i, j) => {
  const temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
  return nums
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function(nums, k) {
  let shift = k % nums.length;
  if (shift > 0) {
    let start = 0;
    let end = nums.length - shift - 1;
    let secondStart = end + 1
    let secondEnd = nums.length - 1;

    while (start < secondEnd) {
      if (start < end) {
        nums = swap(nums, start, end)
      }
      if (secondStart < secondEnd) {
        nums = swap(nums, secondStart, secondEnd)
      }
      nums = swap(nums, start, secondEnd)

      start++;
      end--;
      secondStart++;
      secondEnd--;
    }
  }
};

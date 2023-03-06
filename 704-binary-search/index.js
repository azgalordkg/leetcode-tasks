/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const search = (nums, target) => {
  let min = 0
  let max = nums.length - 1;
  while (max >= min) {
    const mid = Math.trunc((min + max) / 2)
    const guess = nums[mid];
    if (nums[mid] === target) return mid;
    else if (nums[mid] > target) {
      max = mid - 1;
    } else {
      min  = mid + 1;
    }
  }
  return -1;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} min
 * @param {number} max
 * @return {number}
 */

var binarySearch = (nums, target, min, max) => {
  const mid = Math.trunc((max + min) / 2)
  const guess = nums[mid]

  if (nums.length === 1) {
    if (guess === target) {
      return 0;
    }
    return guess > target ? 0 : 1;
  }

  if (guess === target) {
    return mid;
  }

  if (min >= max) {
    if (target > guess) {
      return mid + 1;
    } else {
      return mid
    }
  }

  if (guess < target) {
    return binarySearch(nums, target, mid + 1, max)
  } else {
    return binarySearch(nums, target, min, mid - 1)
  }
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function(nums, target) {
  return binarySearch(nums, target, 0, nums.length - 1)
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var targetIndices = function(nums, target) {
  const answer = []
  const sorted = nums.sort((a, b) => a - b)

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === target) {
      answer.push(i)
    }
  }
  return answer
};

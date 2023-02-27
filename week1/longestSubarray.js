function longestSubarray(nums) {
  let maxLen = 0,
    left = 0,
    right = 0,
    numZeroes = 0;

  while (right < nums.length) {
    if (nums[right] === 0) {
      numZeroes++;
    }

    while (numZeroes > 1) {
      if (nums[left] === 0) {
        numZeroes--;
      }
      left++;
    }

    maxLen = Math.max(maxLen, right - left);
    right++;
  }

  return maxLen;
}

console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]));

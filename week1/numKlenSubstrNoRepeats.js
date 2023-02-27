function numKlenSubstrNoRepeats(s, k) {
  if (s.length < k) {
    return 0;
  }
  let count = 0;
  let set = new Set();
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    let c = s.charAt(right);

    while (set.has(c) || right - left + 1 > k) {
      set.delete(s.charAt(left));
      left++;
    }
    set.add(c);
    if (right - left + 1 === k) {
      count++;
    }
  }
  return count;
}

console.log(numKlenSubstrNoRepeats("havefunonleetcode", 5));
console.log(numKlenSubstrNoRepeats("home", 5));

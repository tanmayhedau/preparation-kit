function matchingStrings(strings, queries) {
  // Write your code here
  let mp = {};
  for (let val of strings) {
    mp[val] = (mp[val] || 0) + 1;
  }
  let check = [];
  for (let val of queries) {
    check.push(mp[val] || 0);
  }
  return check;
}

console.log(matchingStrings(["ab", "ed", "ab", "f"], ["ab", "f", "gh", "kl"]));

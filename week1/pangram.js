function pangram(s) {
  let aplha = "abcdefghijklmnopqrstuvwxyz";
  let s1 = s.toLowerCase();
  for (let val of aplha) {
    if (s1.includes(val)) {
      continue;
    } else {
      return "not pangram";
    }
  }
  return "pangram";
}
console.log(
  pangram("We promptly judged antique ivory buckles for the next prize")
);

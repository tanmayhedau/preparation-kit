const longestBeautifulSubstring = (word) => {
  let max = 0;
  for (let i = 0; i < word.length; i++) {
    let [j, s] = [i, new Set(word[i])];
    while (word[j] <= word[j + 1]) s.add(word[++j]);
    if (5 === s.size) max = Math.max(max, j - i + 1);
    i = j;
  }
  return max;
};
console.log(longestBeautifulSubstring("aeiaaioaaaaeiiiiouuuooaauuaeiu"));

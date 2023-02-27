var longestNiceSubstring = function (s) {
  if (s.length < 2) return "";
  let set = new Set(s);
  for (let i = 0; i < s.length; i++) {
    if (s[i]) {
      if (set.has(s[i].toLowerCase()) && set.has(s[i].toUpperCase())) {
        continue;
      }

      let s1 = longestNiceSubstring(s.slice(0, i));
      let s2 = longestNiceSubstring(s.slice(i + 1));

      return s1.length >= s2.length ? s1 : s2;
    }
  }
  return s;
};
console.log(longestNiceSubstring("YazaAay"));

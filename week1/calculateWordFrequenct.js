function calculateWordFrequencies(str) {
  const words = str.split(/\s+/);
//   console.log(words);
  const frequencies = {};

  for (const word of words) {
    if (frequencies[word]) {
      frequencies[word]++;
    } else {
      frequencies[word] = 1;
    }
  }

  return frequencies;
}
console.log(
  calculateWordFrequencies("the quick brown fox jumps over the lazy dog")
);

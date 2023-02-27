function prime(n) {
  let isPrime = new Array(n + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  for (let i = 2; i * i <= n; i++) {
    for (let j = i * i; j <= n; j += i) {
      isPrime[j] = false;
    }
  }
  let output = [];
  for (let i = 2; i < n; i++) {
    if (isPrime[i] === true) {
      output.push(i);
    }
  }
  return output;
}

console.log(prime(10));

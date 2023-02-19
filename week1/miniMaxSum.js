// https://www.hackerrank.com/challenges/one-month-preparation-kit-mini-max-sum/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one

function miniMaxSum(arr) {
  arr.sort((a, b) => a - b);
  let minsum = 0;
  let maxsum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i != arr.length - 1) {
      minsum += arr[i];
    }
    if (i != 0) {
      maxsum += arr[i];
    }
  }
  console.log(minsum, maxsum);
}

miniMaxSum([1, 3, 5, 7, 9]);

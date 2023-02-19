// https://www.hackerrank.com/challenges/one-month-preparation-kit-plus-minus/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one

function plusMinus(arr) {
  
  let pcount = 0;
  let ncount = 0;
  let zcount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      pcount++;
    } else if (arr[i] < 0) {
      ncount++;
    } else if (arr[i] == 0) {
      zcount++;
    }
  }

  console.log(pcount / arr.length);
  console.log(ncount / arr.length);
  console.log(zcount / arr.length);
}

plusMinus([1,-3,0,7,-9])
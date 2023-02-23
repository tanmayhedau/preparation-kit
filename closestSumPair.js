// function closestSumPair(arr1, arr2, x) {
//   let mindiff = Number.MAX_VALUE;
//   let i = 0,
//     j = arr2.length - 1;
//   let res1 = 0,
//     res2 = 0;

//   while (i < arr1.length && j >= 0) {
//     let sum = arr1[i] + arr2[j];
//     let diff = Math.abs(x - sum);

//     if (diff < mindiff) {
//       mindiff = diff;
//       res1 = arr1[i];
//       res2 = arr2[j];
//     }
//     sum > x ? j-- : i++;
//   }
//   console.log(res1, res2);
// }
// closestSumPair([1, 4, 5, 7], [10, 20, 30, 40], 32);

function closestSumPair(arr, x) {
  let mindiff = Number.MAX_VALUE;
  let i = 0;
  let j = arr.length - 1;
  let res = [];

  while (i < j) {
    let sum = arr[i] + arr[j];
    let diff = Math.abs(x - sum);

    if (diff < mindiff) {
      res = [arr[i], arr[j]];
      i++;
      j--;
    }
    sum > x ? j-- : i++;
  }

  return res;
}
console.log(closestSumPair([10, 22, 28, 29, 30, 40], 54));

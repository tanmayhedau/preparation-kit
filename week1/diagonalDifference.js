function diagonalDifference(arr) {
  let LTR = 0;
  let RTL = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i === j) {
        LTR += arr[i][j];
      }
      if (i + j === arr.length - 1) {
        RTL += arr[i][j];
      }
    }
  }
  let res = Math.abs(LTR - RTL);
  return res;
}

console.log(
  diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ])
);

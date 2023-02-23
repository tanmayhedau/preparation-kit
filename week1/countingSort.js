function countingSort(arr) {
  const res = new Array(100).fill(0);
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    res[arr[i]]++;
  }
  // console.log(res)
  let index = 0;
  for (let value of res) {
    result.push(...Array(value).fill(index));
    index += 1;
  }

  return result;
}

console.log(countingSort([3, 5, 1, 8, 1, 7, 9]));

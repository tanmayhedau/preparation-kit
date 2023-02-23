function rotatearray(arr, d) {
  const reverse = (left, right) => {
    while (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
      right--;
    }
  };

  d = d % arr.length;
  reverse(0, arr.length - 1);
  reverse(0, d - 1);
  reverse(d, arr.length - 1);
  return arr;
}

console.log(rotatearray([1, 2, 3, 4, 5, 6, 7], 2));
//[5,6,7,1,2,3,4]

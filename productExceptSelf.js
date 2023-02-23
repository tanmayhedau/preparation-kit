var productExceptSelf = function (nums) {
  let res = Array(nums.length).fill(1);
  let pro = 1;
  for (let i = 0; i < res.length - 1; i++) {
    pro *= nums[i];
    res[i + 1] *= pro;
  }
//   console.log(res);
  pro = 1;
  for (let i = res.length - 1; i > 0; i--) {
    pro *= nums[i];
    res[i - 1] *= pro;
  }
//   console.log(res);
  return res;
};
console.log(productExceptSelf([1, 2, 3, 4]));

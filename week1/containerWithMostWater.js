function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left <= right) {
        let minHeight = Math.min(height[left], height[right]);
        maxArea = Math.max(maxArea, minHeight * (right - left));

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea;
}
console.log(maxArea([[1, 8, 6, 2, 5, 4, 8, 3, 7]]));

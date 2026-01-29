function maxArea(height) {
    var max = 0;
    var left = 0;
    var right = height.length - 1;
    while (left < right) {
        var s = Math.min(height[left], height[right]) * (right - left);
        max = Math.max(s, max);
        if (height[left] < height[right]) {
            left++;
        }
        else
            right--;
    }
    return max;
}
;

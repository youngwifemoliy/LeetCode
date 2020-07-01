/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    nums.sort(function (a, b) {
        return b - a;
    });
    for (var i = 0; i < nums.length; i++) {
        if (i + 1 === k) {
            return nums[i];
        }
    }
    return -1;
};

findKthLargest([1], 1);
// @lc code=end
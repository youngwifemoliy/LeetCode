/*
 * @lc app=leetcode.cn id=477 lang=javascript
 *
 * [477] 汉明距离总和
 */



// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function (nums) {
    var count = 0;
    for (var i = 0; i < 32; i++) {
        var oneSum = 0;
        for (var j = 0; j < nums.length; j++) {
            oneSum += nums[j] & 1;
            nums[j] >>= 1;
        }
        count += oneSum * (nums.length - oneSum);
    }
    return count;
};

// @lc code=end